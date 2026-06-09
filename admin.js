const sectionLabels = {
  "ai-photo": "AI生成写真",
  "ai-video": "AI视频项目档案",
  "ai-commercial": "AI广告短片",
  "ip-design": "IP形象设计",
  "super-symbol": "超级符号",
  ecommerce: "电商海报",
  "ui-launch": "UI启动页设计"
};

const categoryOptions = {
  "ai-photo": [{ value: "gallery", label: "写真画廊" }],
  "ai-video": [{ value: "project", label: "视频项目档案" }],
  "ai-commercial": [
    { value: "ad-15s", label: "15秒AI广告" },
    { value: "short-30s", label: "30秒小短片" }
  ],
  "ip-design": [{ value: "character", label: "角色设定" }],
  "super-symbol": [{ value: "brand", label: "品牌符号" }],
  "ui-launch": [{ value: "gallery", label: "启动页设计" }],
  ecommerce: [
    { value: "retouch", label: "精修产品" },
    { value: "reference", label: "风格参考海报" },
    { value: "persona", label: "指定人物产品" }
  ]
};

const uploadForm = document.querySelector("#uploadForm");
const sectionSelect = document.querySelector("#sectionSelect");
const categorySelect = document.querySelector("#categorySelect");
const fileInput = document.querySelector("#fileInput");
const previewBox = document.querySelector("#previewBox");
const progressBar = document.querySelector("#progressBar");
const formMessage = document.querySelector("#formMessage");
const worksList = document.querySelector("#worksList");
const filterSelect = document.querySelector("#filterSelect");
const refreshButton = document.querySelector("#refreshButton");

let uploadedWorks = [];
let previewUrl = "";

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function updateCategoryOptions() {
  const options = categoryOptions[sectionSelect.value] || [{ value: "general", label: "默认分类" }];
  categorySelect.innerHTML = options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
}

function setMessage(text, isError = false) {
  formMessage.textContent = text;
  formMessage.style.color = isError ? "#e3a08c" : "#9c9388";
}

function renderPreview() {
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
    previewUrl = "";
  }

  const file = fileInput.files?.[0];
  if (!file) {
    previewBox.innerHTML = "<span>PREVIEW</span><p>选择文件后显示预览</p>";
    return;
  }

  previewUrl = URL.createObjectURL(file);
  if (file.type.startsWith("video/")) {
    previewBox.innerHTML = `<video src="${previewUrl}" controls playsinline></video>`;
  } else {
    previewBox.innerHTML = `<img src="${previewUrl}" alt="作品预览" />`;
  }
}

async function loadWorks() {
  const response = await fetch("/api/uploads", { cache: "no-store" });
  const data = await response.json();
  uploadedWorks = Array.isArray(data.works) ? data.works : [];
  renderWorks();
}

function renderWorks() {
  const filter = filterSelect.value;
  const works = filter === "all" ? uploadedWorks : uploadedWorks.filter((work) => work.section === filter);

  if (!works.length) {
    worksList.innerHTML = `<div class="empty-state">暂无上传作品</div>`;
    return;
  }

  worksList.innerHTML = works.map((work) => `
    <article class="work-item">
      <div class="work-thumb">
        ${work.mediaType === "video"
          ? `<video src="${escapeHtml(work.fileUrl)}" muted playsinline preload="metadata"></video>`
          : `<img src="${escapeHtml(work.fileUrl)}" alt="${escapeHtml(work.title)}" loading="lazy" />`}
      </div>
      <div class="work-info">
        <span>${escapeHtml(sectionLabels[work.section] || work.section)} / ${escapeHtml(work.category || "general")}</span>
        <h3>${escapeHtml(work.title)}</h3>
        <p>${escapeHtml(work.tag || "AIGC WORK")} ${work.duration ? ` / ${escapeHtml(work.duration)}` : ""}</p>
        <p>${escapeHtml(work.description || work.keywords || work.fileName || "")}</p>
      </div>
      <button class="delete-button" type="button" data-delete="${escapeHtml(work.id)}">删除</button>
    </article>
  `).join("");
}

function uploadWork(formData) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", "/api/uploads");

    request.upload.addEventListener("progress", (event) => {
      if (!event.lengthComputable) return;
      progressBar.style.width = `${Math.round((event.loaded / event.total) * 100)}%`;
    });

    request.addEventListener("load", () => {
      let payload = {};
      try {
        payload = JSON.parse(request.responseText || "{}");
      } catch {
        payload = {};
      }

      if (request.status >= 200 && request.status < 300) {
        resolve(payload);
      } else {
        reject(new Error(payload.error || "上传失败"));
      }
    });

    request.addEventListener("error", () => reject(new Error("上传失败，请确认本地服务正在运行")));
    request.send(formData);
  });
}

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  progressBar.style.width = "0";
  setMessage("正在上传...");

  try {
    await uploadWork(new FormData(uploadForm));
    uploadForm.reset();
    updateCategoryOptions();
    renderPreview();
    progressBar.style.width = "100%";
    setMessage("上传成功，前台页面刷新后会显示该作品。");
    await loadWorks();
  } catch (error) {
    setMessage(error.message, true);
  }
});

worksList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;

  const work = uploadedWorks.find((item) => item.id === button.dataset.delete);
  if (!work) return;

  const confirmed = window.confirm(`确认删除「${work.title}」吗？`);
  if (!confirmed) return;

  const response = await fetch(`/api/uploads/${encodeURIComponent(work.id)}`, { method: "DELETE" });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    window.alert(payload.error || "删除失败");
    return;
  }

  await loadWorks();
});

sectionSelect.addEventListener("change", updateCategoryOptions);
fileInput.addEventListener("change", renderPreview);
filterSelect.addEventListener("change", renderWorks);
refreshButton.addEventListener("click", loadWorks);

updateCategoryOptions();
loadWorks().catch(() => {
  worksList.innerHTML = `<div class="empty-state">无法连接上传接口，请确认通过本地服务打开后台。</div>`;
});
