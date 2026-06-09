import { randomUUID } from "node:crypto";
import {
  createReadStream,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync
} from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = normalize(process.cwd());
const port = Number(process.env.PORT || 3000);
const dataDir = join(root, "data");
const uploadsDir = join(root, "assets", "uploads");
const uploadsFile = join(dataDir, "uploads.json");
const uploadLimit = Number(process.env.UPLOAD_LIMIT_MB || 900) * 1024 * 1024;

const types = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webm": "video/webm",
  ".webp": "image/webp"
};

const allowedSections = new Set(["ai-photo", "ai-video", "ai-commercial", "ip-design", "super-symbol", "ecommerce", "ui-launch"]);
const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".mp4", ".webm", ".mov"]);
const extensionByMime = {
  "image/gif": ".gif",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "video/mp4": ".mp4",
  "video/quicktime": ".mov",
  "video/webm": ".webm"
};

function ensureStore() {
  mkdirSync(dataDir, { recursive: true });
  mkdirSync(uploadsDir, { recursive: true });
  if (!existsSync(uploadsFile)) {
    writeFileSync(uploadsFile, JSON.stringify({ works: [] }, null, 2), "utf8");
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readUploads() {
  ensureStore();
  try {
    const data = JSON.parse(readFileSync(uploadsFile, "utf8"));
    return { works: Array.isArray(data.works) ? data.works : [] };
  } catch {
    return { works: [] };
  }
}

function writeUploads(data) {
  ensureStore();
  writeFileSync(uploadsFile, JSON.stringify({ works: data.works || [] }, null, 2), "utf8");
}

function sanitizeText(value, fallback = "") {
  return String(value || fallback)
    .replace(/\0/g, "")
    .trim()
    .slice(0, 500);
}

function sanitizeFileBase(value) {
  return sanitizeText(value, "work")
    .replace(/\.[^/.]+$/, "")
    .replace(/[^\p{L}\p{N}._-]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "work";
}

function parseDisposition(value = "") {
  const result = {};
  value.split(";").forEach((part) => {
    const [rawKey, ...rawValue] = part.trim().split("=");
    if (!rawKey || !rawValue.length) return;
    result[rawKey] = rawValue.join("=").replace(/^"|"$/g, "");
  });
  return result;
}

function parseMultipart(buffer, contentType) {
  const boundaryMatch = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!boundaryMatch) throw new Error("Missing multipart boundary");

  const boundary = `--${boundaryMatch[1] || boundaryMatch[2]}`;
  const rawBody = buffer.toString("binary");
  const rawParts = rawBody.split(boundary).slice(1, -1);
  const fields = {};
  const files = [];

  rawParts.forEach((rawPart) => {
    let part = rawPart;
    if (part.startsWith("\r\n")) part = part.slice(2);
    if (part.endsWith("\r\n")) part = part.slice(0, -2);

    const separatorIndex = part.indexOf("\r\n\r\n");
    if (separatorIndex === -1) return;

    const rawHeaders = part.slice(0, separatorIndex);
    const rawContent = part.slice(separatorIndex + 4);
    const headers = {};

    rawHeaders.split("\r\n").forEach((line) => {
      const index = line.indexOf(":");
      if (index === -1) return;
      headers[line.slice(0, index).trim().toLowerCase()] = line.slice(index + 1).trim();
    });

    const disposition = parseDisposition(headers["content-disposition"]);
    if (!disposition.name) return;

    const contentBuffer = Buffer.from(rawContent, "binary");
    if (disposition.filename) {
      files.push({
        name: disposition.name,
        filename: disposition.filename,
        mimeType: headers["content-type"] || "application/octet-stream",
        buffer: contentBuffer
      });
    } else {
      fields[disposition.name] = contentBuffer.toString("utf8");
    }
  });

  return { fields, files };
}

function collectRequest(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;

    request.on("data", (chunk) => {
      total += chunk.length;
      if (total > uploadLimit) {
        reject(new Error(`File is larger than ${Math.round(uploadLimit / 1024 / 1024)}MB`));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });

    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

async function handleUploadsApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/uploads") {
    sendJson(response, 200, readUploads());
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/uploads") {
    const contentType = request.headers["content-type"] || "";
    if (!contentType.includes("multipart/form-data")) {
      sendJson(response, 415, { error: "Only multipart/form-data is supported" });
      return true;
    }

    const body = await collectRequest(request);
    const { fields, files } = parseMultipart(body, contentType);
    const uploadedFile = files.find((file) => file.name === "file") || files[0];

    if (!uploadedFile || !uploadedFile.buffer.length) {
      sendJson(response, 400, { error: "请选择要上传的作品文件" });
      return true;
    }

    const section = sanitizeText(fields.section);
    if (!allowedSections.has(section)) {
      sendJson(response, 400, { error: "请选择有效的作品板块" });
      return true;
    }

    const sourceExt = extname(uploadedFile.filename).toLowerCase();
    const extension = allowedExtensions.has(sourceExt) ? sourceExt : extensionByMime[uploadedFile.mimeType];
    if (!extension || !allowedExtensions.has(extension)) {
      sendJson(response, 400, { error: "仅支持 jpg、png、webp、gif、mp4、webm、mov 文件" });
      return true;
    }

    const mediaType = uploadedFile.mimeType.startsWith("video/") || [".mp4", ".webm", ".mov"].includes(extension)
      ? "video"
      : "image";
    const baseName = sanitizeFileBase(fields.title || uploadedFile.filename);
    const storedFileName = `${Date.now()}-${randomUUID().slice(0, 8)}-${baseName}${extension}`;
    const storedPath = join(uploadsDir, storedFileName);

    ensureStore();
    writeFileSync(storedPath, uploadedFile.buffer);

    const record = {
      id: randomUUID(),
      section,
      category: sanitizeText(fields.category, "general"),
      title: sanitizeText(fields.title, "未命名作品"),
      tag: sanitizeText(fields.tag, mediaType === "video" ? "AI VIDEO" : "AIGC VISUAL"),
      description: sanitizeText(fields.description),
      keywords: sanitizeText(fields.keywords),
      duration: sanitizeText(fields.duration),
      fileUrl: `assets/uploads/${storedFileName}`,
      fileName: uploadedFile.filename,
      mediaType,
      mimeType: uploadedFile.mimeType,
      size: uploadedFile.buffer.length,
      createdAt: new Date().toISOString()
    };

    const data = readUploads();
    data.works.unshift(record);
    writeUploads(data);
    sendJson(response, 201, { work: record });
    return true;
  }

  if (request.method === "DELETE" && url.pathname.startsWith("/api/uploads/")) {
    const id = decodeURIComponent(url.pathname.split("/").pop() || "");
    const data = readUploads();
    const target = data.works.find((work) => work.id === id);

    if (!target) {
      sendJson(response, 404, { error: "未找到该作品" });
      return true;
    }

    data.works = data.works.filter((work) => work.id !== id);
    writeUploads(data);

    if (target.fileUrl?.startsWith("assets/uploads/")) {
      const filePath = normalize(join(root, target.fileUrl));
      if (filePath.startsWith(uploadsDir) && existsSync(filePath)) {
        unlinkSync(filePath);
      }
    }

    sendJson(response, 200, { ok: true });
    return true;
  }

  return false;
}

function serveStatic(request, response, url) {
  const safePath =
    url.pathname === "/"
      ? "index.html"
      : normalize(decodeURIComponent(url.pathname))
          .replace(/^[/\\]+/, "")
          .replace(/^(\.\.[/\\])+/, "");
  const filePath = normalize(join(root, safePath));

  if (!filePath.startsWith(root) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const fileStat = statSync(filePath);
  const contentType = types[extname(filePath)] || "application/octet-stream";
  const range = request.headers.range;

  if (range) {
    const match = range.match(/bytes=(\d*)-(\d*)/);
    const start = match?.[1] ? Number(match[1]) : 0;
    const end = match?.[2] ? Number(match[2]) : fileStat.size - 1;

    if (start >= fileStat.size || end >= fileStat.size || start > end) {
      response.writeHead(416, {
        "Content-Range": `bytes */${fileStat.size}`
      });
      response.end();
      return;
    }

    response.writeHead(206, {
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${fileStat.size}`,
      "Content-Type": contentType
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(filePath, { start, end }).pipe(response);
    return;
  }

  response.writeHead(200, {
    "Accept-Ranges": "bytes",
    "Content-Length": fileStat.size,
    "Content-Type": contentType
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    if (url.pathname.startsWith("/api/uploads") && (await handleUploadsApi(request, response, url))) {
      return;
    }
    serveStatic(request, response, url);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Server error" });
  }
}).listen(port, () => {
  ensureStore();
  console.log(`Preview running at http://localhost:${port}`);
  console.log(`Admin running at http://localhost:${port}/admin.html`);
});
