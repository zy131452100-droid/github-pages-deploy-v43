const navItems = [
  { id: "home", index: "01", label: "首页" },
  { id: "ai-photo", index: "02", label: "AI生成写真" },
  { id: "ai-video", index: "03", label: "AI视频" },
  { id: "ai-commercial", index: "04", label: "AI广告短片" },
  { id: "ip-design", index: "05", label: "IP形象设计" },
  { id: "super-symbol", index: "06", label: "超级符号" },
  { id: "ecommerce", index: "07", label: "电商海报" },
  { id: "ui-launch", index: "08", label: "UI启动页设计" },
  { id: "about", index: "09", label: "关于我" }
];

const abilityTags = ["AI PHOTO", "AI VIDEO", "AI COMMERCIAL", "IP DESIGN", "SUPER SYMBOL", "E-COMMERCE VISUAL", "UI LAUNCH DESIGN"];

const homeDirectoryItems = [
  {
    id: "ai-photo",
    index: "02",
    label: "AI生成写真",
    tag: "AI PHOTO GALLERY",
    description: "商业人像、情绪写真、虚拟模特与电影感剧照的高级摄影画廊。",
    status: "8 WORKS"
  },
  {
    id: "ai-video",
    index: "03",
    label: "AI视频",
    tag: "AI VIDEO DOSSIER",
    description: "两个视频项目档案，展示角色、场景与分镜制作流程。",
    status: "2 PROJECTS"
  },
  {
    id: "ai-commercial",
    index: "04",
    label: "AI广告短片",
    tag: "AI COMMERCIAL REEL",
    description: "收录两条 15 秒 AI 广告视频与一条 30 秒 AI 小短片，作为商业成片展示页。",
    status: "3 VIDEOS"
  },
  {
    id: "ip-design",
    index: "05",
    label: "IP形象设计",
    tag: "CHARACTER FILE",
    description: "官方角色设定集结构，包含主视觉、三视图、表情、动作与色彩系统。",
    status: "DOSSIER"
  },
  {
    id: "super-symbol",
    index: "06",
    label: "超级符号",
    tag: "BRAND SYSTEM",
    description: "品牌符号提案式排版，呈现推导、拆解、应用延展与海报视觉。",
    status: "PROPOSAL"
  },
  {
    id: "ecommerce",
    index: "07",
    label: "电商海报",
    tag: "COMMERCIAL POSTER",
    description: "风格参考海报、人物参考海报两类商业视觉入口。",
    status: "2 TABS"
  },
  {
    id: "ui-launch",
    index: "08",
    label: "UI启动页设计",
    tag: "UI LAUNCH DESIGN",
    description: "游戏启动页、品牌启动页与移动端首屏视觉设计，呈现主视觉、界面层级与启动氛围。",
    status: "5 WORKS"
  },
  {
    id: "about",
    index: "09",
    label: "关于我 / 联系方式",
    tag: "CONTACT",
    description: "AIGC视觉设计师简介、工具链说明与联系方式。",
    status: "INFO"
  }
];

// 作品替换入口：
// 当前模板不接入真实图片和视频。后续可以在这些数据项里添加 imageSrc / videoSrc 字段，
// 再把 placeholder() 替换成真实媒体组件，页面结构和排版不需要重做。
const photoItems = [
  { title: "商业人像", tag: "COMMERCIAL PORTRAIT", note: "品牌形象 / 质感光影", assetSlot: "ai-photo-01" },
  { title: "赛博写真", tag: "CYBER LOOKBOOK", note: "未来服装 / 人物气质", assetSlot: "ai-photo-02" },
  { title: "情绪写真", tag: "MOOD PORTRAIT", note: "电影感 / 低饱和叙事", assetSlot: "ai-photo-03" },
  { title: "时装大片", tag: "FASHION EDITORIAL", note: "杂志版式 / 高级棚拍", assetSlot: "ai-photo-04" },
  { title: "虚拟模特", tag: "VIRTUAL MODEL", note: "商业服饰 / 稳定角色", assetSlot: "ai-photo-05" },
  { title: "东方美学", tag: "ORIENTAL VISUAL", note: "含蓄色彩 / 人物设定", assetSlot: "ai-photo-06" },
  { title: "品牌肖像", tag: "BRAND PORTRAIT", note: "广告叙事 / 角色表达", assetSlot: "ai-photo-07" },
  { title: "电影剧照", tag: "CINEMATIC STILL", note: "镜头语言 / 场景氛围", assetSlot: "ai-photo-08" }
];

const videoProjects = [
  {
    index: "PROJECT 01",
    title: "机器人想看一次海",
    tag: "AI SHORT FILM / 2026",
    description:
      "通过 AIGC 完成角色设定、分镜设计、镜头提示词、视频生成与后期剪辑，构建一支废土科幻情绪短片。",
    bilibiliBvid: "BV15kV46iEng",
    sourceUrl: "https://www.bilibili.com/video/BV15kV46iEng/",
    processSource: "robot",
    assetSlot: "ai-video-robot-sea"
  },
  {
    index: "PROJECT 02",
    title: "重生后，我手撕白莲妹妹",
    tag: "AI VIDEO PROJECT / 2026",
    description: "展示从人物设定、场景概念、分镜设计到视频生成的完整 AIGC 视频创作流程。",
    bilibiliBvid: "BV1tWV96YEG7",
    sourceUrl: "https://www.bilibili.com/video/BV1tWV96YEG7/",
    processSource: "drama",
    assetSlot: "ai-video-project-02"
  }
];

const commercialVideoItems = [
  {
    index: "AD 01",
    title: "口红广告",
    tag: "AI COMMERCIAL / 15S",
    duration: "15S",
    description: "适合品牌传播、产品露出和社媒投放的 15 秒 AI 广告成片展示。",
    bilibiliBvid: "BV1aZVg6nEqm",
    sourceUrl: "https://www.bilibili.com/video/BV1aZVg6nEqm/"
  },
  {
    index: "AD 02",
    title: "储能电源广告",
    tag: "AI COMMERCIAL / 15S",
    duration: "15S",
    description: "以节奏、镜头调度和商业视觉包装为重点的 15 秒 AI 广告成片展示。",
    bilibiliBvid: "BV15kV46iEru",
    sourceUrl: "https://www.bilibili.com/video/BV15kV46iEru/"
  },
  {
    index: "FILM 01",
    title: "她从代码中醒来",
    tag: "AI SHORT FILM / 30S",
    duration: "30S",
    description: "用于展示 AIGC 叙事、情绪镜头和短片节奏控制的 30 秒小短片。",
    bilibiliBvid: "BV1RkV46vEAd",
    sourceUrl: "https://www.bilibili.com/video/BV1RkV46vEAd/"
  }
];

const processSteps = [
  {
    number: "01",
    title: "角色设计",
    tag: "CHARACTER DESIGN",
    description: "建立主角身份、比例、材质、表情与核心视觉记忆点，保证镜头间角色稳定。"
  },
  {
    number: "02",
    title: "场景概念",
    tag: "ENVIRONMENT CONCEPT",
    description: "明确世界观、场景层级、光线情绪和关键空间，为视频镜头提供统一美术方向。"
  },
  {
    number: "03",
    title: "分镜图设计",
    tag: "STORYBOARD DESIGN",
    description: "用连续镜头组织节奏、景别和动作关系，让 AI 视频生成前先拥有清晰叙事骨架。"
  },
  {
    number: "04",
    title: "提示词设计",
    tag: "PROMPT ENGINEERING",
    description: "把角色、场景、运动、镜头和情绪拆解为可复用的提示词卡片，便于迭代与控制。"
  },
  {
    number: "05",
    title: "视频生成与剪辑",
    tag: "AI VIDEO GENERATION",
    description: "完成镜头生成、筛选、剪辑节奏、成片截图和输出版本管理，形成完整交付链路。"
  }
];

const ecommerceTabs = [
  {
    id: "reference",
    label: "风格参考海报",
    tag: "STYLE REFERENCE",
    works: Array.from({ length: 6 }, (_, index) => ({
      title: `风格参考海报 ${String(index + 1).padStart(2, "0")}`,
      tag: "ECOMMERCE POSTER",
      keywords: "场景 / 氛围 / 视觉参考",
      assetSlot: `reference-${index + 1}`
    }))
  },
  {
    id: "persona",
    label: "人物参考海报",
    tag: "PERSONA REFERENCE",
    works: Array.from({ length: 6 }, (_, index) => ({
      title: `人物参考海报 ${String(index + 1).padStart(2, "0")}`,
      tag: "ECOMMERCE POSTER",
      keywords: "人物 / 风格 / 商业海报",
      assetSlot: `persona-${index + 1}`
    }))
  }
];

let activeTabId = ecommerceTabs[0].id;
let uploadedWorks = [];
let revealObserver;
let sectionObserver;

function placeholder(label, subLabel, variant) {
  return `
    <div class="placeholder-media placeholder-media-${variant}">
      <div class="placeholder-cross"></div>
      <div class="placeholder-content">
        <span>${label}</span>
        <strong>${subLabel}</strong>
      </div>
    </div>
  `;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

async function loadUploadedWorks() {
  const sources = ["/api/uploads", "data/uploads.json"];

  for (const source of sources) {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (!response.ok) continue;
      const data = await response.json();
      uploadedWorks = Array.isArray(data.works) ? data.works : [];
      return;
    } catch {
      // Static hosting may not support /api/uploads, so fall back to data/uploads.json.
    }
  }

  uploadedWorks = [];
}

function getUploadedWorks(sectionId, category = "") {
  return uploadedWorks.filter((work) => {
    if (work.section !== sectionId) return false;
    return category ? work.category === category : true;
  });
}

function getWorkSource(work) {
  const description = String(work.description || "");
  const marker = "张宇作品集/";
  const markerIndex = description.indexOf(marker);
  return markerIndex >= 0 ? description.slice(markerIndex + marker.length) : description;
}

function sortBySourcePath(works) {
  return [...works].sort((a, b) => getWorkSource(a).localeCompare(getWorkSource(b), "zh-CN", { numeric: true }));
}

function getRobotProcessWorks() {
  return sortBySourcePath(getUploadedWorks("ai-video", "process").filter((work) => getWorkSource(work).startsWith("机器人想看海/")));
}

function getDramaProcessWorks() {
  return sortBySourcePath(getUploadedWorks("ai-video", "process").filter((work) => getWorkSource(work).startsWith("ai漫剧/")));
}

function curateRobotProcessWorks() {
  const works = getRobotProcessWorks();
  const selected = [];
  const selectedIds = new Set();

  function addMatches(predicate, limit) {
    const matches = works.filter((work) => predicate(getWorkSource(work), work) && !selectedIds.has(work.id)).slice(0, limit);
    matches.forEach((work) => {
      selected.push(work);
      selectedIds.add(work.id);
    });
  }

  addMatches((source) => source.includes("封面"), 1);
  addMatches((source) => source.includes("机器人形象"), 2);
  addMatches((source) => source.includes("场景图1/"), 1);
  addMatches((source) => source.includes("场景图2/"), 1);
  addMatches((source) => source.includes("场景图3/"), 1);
  addMatches((source) => source.includes("场景图5/"), 1);
  addMatches((source) => source.includes("机器分镜图/") && /\/(1|3|5|8|10)\.png$/i.test(source), 5);

  if (selected.length < 12) {
    addMatches(() => true, 12 - selected.length);
  }

  return selected.slice(0, 12);
}

function getProcessWorksForStep(project, stepNumber) {
  const isRobot = project.processSource === "robot";
  const works = isRobot ? getRobotProcessWorks() : getDramaProcessWorks();

  if (stepNumber === "01") {
    return works
      .filter((work) => {
        const source = getWorkSource(work);
        if (isRobot) return source.includes("机器人形象/");
        return source.includes("漫剧人物设定/") && !source.includes("林家亲戚");
      })
      .slice(0, isRobot ? 4 : 12);
  }

  if (stepNumber === "02") {
    const sceneWorks = works.filter((work) => {
      const source = getWorkSource(work);
      if (isRobot) return source.includes("机器人场景图/场景图");
      return source.includes("ai漫剧/场景图/") && !source.includes("d30569dc6d5f3ca77cd67873a9ebe8f5");
    });

    if (!isRobot) return sceneWorks.slice(0, 3);

    const selectedRobotScenes = [
      "场景图1/",
      "场景图2/",
      "场景图3/",
      "场景图5/ChatGPT Image 2026年5月19日 16_56_23.png"
    ];
    const selected = [];
    const selectedIds = new Set();

    selectedRobotScenes.forEach((needle) => {
      const match = sceneWorks.find((work) => getWorkSource(work).includes(needle) && !selectedIds.has(work.id));
      if (!match) return;
      selected.push(match);
      selectedIds.add(match.id);
    });

    return selected.length ? selected : sceneWorks.slice(0, 4);
  }

  if (stepNumber === "03") {
    if (!isRobot) {
      const selectedDramaStoryboardFiles = new Set(["4.png", "6.png", "7.png", "10.png"]);
      return works
        .filter((work) => {
          const source = getWorkSource(work);
          const fileName = source.split("/").pop();
          return source.includes("第五集分镜图/") && selectedDramaStoryboardFiles.has(fileName);
        })
        .slice(0, 4);
    }

    return works
      .filter((work) => {
        const source = getWorkSource(work);
        return source.includes("机器分镜图/") && /\/(1|2|3|5|8|10)\.png$/i.test(source);
      })
      .slice(0, 6);
  }

  if (stepNumber === "05") {
    return works.filter((work) => getWorkSource(work).includes("封面")).slice(0, 2);
  }

  return [];
}

function getProcessCardTitle(work) {
  const source = getWorkSource(work);
  const parts = source.split("/");
  const fileName = parts[parts.length - 1]?.replace(/\.[^.]+$/, "") || work.title || "流程素材";

  if (source.includes("机器分镜图/")) return `分镜 ${fileName}`;
  if (source.includes("机器人形象/")) return `机器人形象 ${fileName}`;
  if (source.includes("机器人场景图/")) return `场景概念 ${fileName}`;
  if (source.includes("漫剧人物设定/")) return fileName;
  if (source.includes("场景图/")) return `场景图 ${fileName}`;
  if (source.includes("封面")) return "主视觉封面";
  return fileName;
}

function renderUploadedMedia(work) {
  const fileUrl = escapeHtml(work.fileUrl);
  const title = escapeHtml(work.title || "上传作品");

  if (work.mediaType === "video") {
    return `<video class="direct-video uploaded-media" src="${fileUrl}" controls preload="metadata" playsinline></video>`;
  }

  return `<img class="uploaded-image uploaded-media" src="${fileUrl}" alt="${title}" loading="lazy" />`;
}

function syncUploadedImageFrame(image) {
  const frame = image.closest(".uploaded-work-frame");
  if (!frame || !image.naturalWidth || !image.naturalHeight) return;

  frame.style.aspectRatio = "";
  const ratio = image.naturalWidth / image.naturalHeight;
  frame.classList.toggle("is-landscape", ratio >= 1.15);
  frame.classList.toggle("is-portrait", ratio <= 0.86);
  frame.classList.toggle("is-squareish", ratio > 0.86 && ratio < 1.15);
  frame.classList.add("is-image-fitted");
}

function fitUploadedImageFrames(root = document) {
  root.querySelectorAll("img.uploaded-image").forEach((image) => {
    if (image.complete) {
      syncUploadedImageFrame(image);
    }

    if (image.dataset.frameFitBound === "true") return;
    image.dataset.frameFitBound = "true";
    image.addEventListener("load", () => syncUploadedImageFrame(image), { once: true });
  });
}

function closeImagePreview() {
  const preview = document.querySelector(".image-lightbox");
  if (!preview) return;

  preview.classList.remove("is-open");
  window.setTimeout(() => preview.remove(), 260);
}

function openImagePreview(image) {
  if (!image?.src) return;

  closeImagePreview();

  const preview = document.createElement("div");
  preview.className = "image-lightbox";
  preview.setAttribute("role", "dialog");
  preview.setAttribute("aria-modal", "true");

  const button = document.createElement("button");
  button.type = "button";
  button.className = "image-lightbox-close";
  button.setAttribute("aria-label", "关闭图片预览");
  button.textContent = "×";

  const previewImage = document.createElement("img");
  previewImage.src = image.currentSrc || image.src;
  previewImage.alt = image.alt || "作品预览";

  preview.append(button, previewImage);
  document.body.append(preview);
  requestAnimationFrame(() => preview.classList.add("is-open"));

  button.addEventListener("click", closeImagePreview);
  preview.addEventListener("click", (event) => {
    if (event.target === preview) closeImagePreview();
  });
}

function renderUploadedWorkCard(work, index = 0) {
  return `
    <article class="uploaded-work-card hover-lift reveal visible" style="transition-delay:${index * 32}ms">
      <div class="uploaded-work-frame">
        ${renderUploadedMedia(work)}
      </div>
      <div class="uploaded-work-meta">
        <span>${escapeHtml(work.tag || "AIGC WORK")}</span>
        <h3>${escapeHtml(work.title || "未命名作品")}</h3>
      </div>
    </article>
  `;
}

function renderMasonryWorkCard(work, index = 0, extraClass = "", visible = false) {
  return `
    <article class="masonry-work-card ${extraClass} hover-lift reveal ${visible ? "visible" : ""}" style="transition-delay:${index * 24}ms">
      <div class="uploaded-work-frame">
        ${renderUploadedMedia(work)}
      </div>
    </article>
  `;
}

function renderUploadedWorks(sectionId, heading = "上传作品", worksOverride = null) {
  const works = worksOverride || getUploadedWorks(sectionId);
  if (!works.length) return "";

  return `
    <div class="uploaded-work-panel reveal visible">
      <div class="uploaded-work-heading">
        <span>UPLOADED WORKS</span>
        <h3>${heading}</h3>
      </div>
      <div class="uploaded-work-grid">
        ${works.map(renderUploadedWorkCard).join("")}
      </div>
    </div>
  `;
}

function renderProcessUploadCollection(eyebrow, title, works) {
  if (!works.length) return "";

  return `
    <article class="process-upload-panel reveal visible">
      <div class="process-upload-heading">
        <span>${eyebrow}</span>
        <h4>${title}</h4>
      </div>
      <div class="process-upload-grid">
        ${works
          .map(
            (work, index) => `
              <div class="process-upload-card hover-lift" style="transition-delay:${index * 28}ms">
                <div class="uploaded-work-frame">
                  ${renderUploadedMedia(work)}
                </div>
                <span>${escapeHtml(work.tag || "PROCESS MATERIAL")}</span>
                <strong>${escapeHtml(getProcessCardTitle(work))}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function sectionIntro(index, eyebrow, title, description = "") {
  return `
    <div class="section-intro reveal">
      <div class="section-number">${index}</div>
      <div>
        <p class="overline">${eyebrow}</p>
        <h2>${title}</h2>
        ${description ? `<p class="section-description">${description}</p>` : ""}
      </div>
    </div>
  `;
}

function renderNav() {
  const desktopNav = document.querySelector("#desktopNav");
  const mobileNav = document.querySelector("#mobileNav");
  const sideIndex = document.querySelector("#sideIndex");

  desktopNav.innerHTML = navItems.map((item) => `<a href="#${item.id}" data-section-link="${item.id}">${item.label}</a>`).join("");
  mobileNav.innerHTML = navItems
    .map((item) => `<a href="#${item.id}" data-section-link="${item.id}"><span>${item.index}</span>${item.label}</a>`)
    .join("");
  sideIndex.innerHTML = `
    <p>INDEX</p>
    <nav>
      ${navItems
        .map((item) => `<a href="#${item.id}" data-section-link="${item.id}"><span>${item.index}</span>${item.label}</a>`)
        .join("")}
    </nav>
  `;
}

function renderPage() {
  document.querySelector("#portfolioRoot").innerHTML = `
    ${renderHero()}
    ${renderPhotoGallery()}
    ${renderVideoArchive()}
    ${renderCommercialVideos()}
    ${renderIPDesign()}
    ${renderSuperSymbol()}
    ${renderEcommerce()}
    ${renderUILaunchDesign()}
    ${renderAbout()}
  `;
}

function renderHero() {
  return `
    <section id="home" class="portfolio-section hero-section directory-section section-layer">
      <div class="section-inner hero-directory-layout">
        <div class="hero-copy hero-directory-copy reveal">
          <p class="overline">INTERACTIVE INDEX / AIGC ARCHIVE</p>
          <h1>张宇</h1>
          <p class="hero-role">AIGC VISUAL DESIGNER</p>
          <p class="hero-subtitle">这是一个可互动的线上展厅目录，选择一个板块进入对应的 AIGC 视觉档案。</p>
          <p class="hero-description">AI 影像生成 / AI 视频 / IP 形象设计 / 电商视觉 / 超级符号</p>
          <div class="hero-tags" aria-label="能力标签">
            ${abilityTags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>

        <div class="home-directory reveal" aria-label="首页互动目录">
          <div class="directory-panel-heading">
            <div>
              <span>EXHIBITION MAP</span>
              <strong>请选择展厅入口</strong>
            </div>
            <p>CLICK TO ENTER</p>
          </div>
          <div class="directory-grid">
            ${homeDirectoryItems
              .map(
                (item, index) => `
                  <a
                    class="directory-card hover-lift ${item.featured ? "is-featured" : ""}"
                    href="#${item.id}"
                    data-section-link="${item.id}"
                    style="transition-delay:${index * 38}ms"
                  >
                    <span class="directory-card-index">${item.index}</span>
                    <span class="directory-card-tag">${item.tag}</span>
                    <h2>${item.label}</h2>
                    <p>${item.description}</p>
                    <div class="directory-card-footer">
                      <span>${item.status}</span>
                      <i>ENTER ↗</i>
                    </div>
                  </a>
                `
              )
              .join("")}
          </div>
          <div class="directory-footnote">
            <span>ZHANG YU PORTFOLIO</span>
            <span>WARM BLACK / DARK GOLD / AIGC ARCHIVE</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPhotoGallery() {
  const photoWorks = sortBySourcePath(getUploadedWorks("ai-photo", "gallery"));

  return `
    <section id="ai-photo" class="portfolio-section section-layer">
      <div class="section-inner">
        ${sectionIntro(
          "02",
          "AI PHOTO GALLERY",
          "AI生成写真",
          "以高级摄影画廊的节奏展示人像、时装、情绪与商业肖像方向。"
        )}
        <div class="photo-grid ${photoWorks.length ? "uploaded-masonry uploaded-masonry-photo" : ""}">
          ${photoWorks.length
            ? photoWorks.map((work, index) => renderMasonryWorkCard(work, index, "photo-masonry-card")).join("")
            : photoItems
                .map(
                  (item, index) => `
                    <article class="photo-card reveal hover-lift" style="transition-delay:${index * 35}ms">
                      ${placeholder("AI PHOTO", "IMAGE PLACEHOLDER", "portrait")}
                      <div class="card-meta">
                        <span>${item.tag}</span>
                        <h3>${item.title}</h3>
                        <p>${item.note}</p>
                      </div>
                    </article>
                  `
                )
                .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderVideoArchive() {
  return `
    <section id="ai-video" class="portfolio-section section-layer video-section">
      <div class="section-inner">
        ${sectionIntro(
          "03",
          "AI VIDEO DOSSIER",
          "AI视频项目档案",
          "重点呈现完整 AIGC 视频创作流程：最终成片、角色设定、场景概念与分镜设计。"
        )}
        <div class="video-projects">
          ${videoProjects.map(renderVideoProject).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCommercialVideos() {
  return `
    <section id="ai-commercial" class="portfolio-section section-layer commercial-section">
      <div class="section-inner">
        ${sectionIntro(
          "04",
          "AI COMMERCIAL REEL",
          "AI广告短片",
          "新增两条 15 秒 AI 广告视频与一条 30 秒 AI 小短片，集中展示商业成片、投放节奏和短片叙事能力。"
        )}
        <div class="commercial-video-grid">
          ${commercialVideoItems.map(renderCommercialVideoCard).join("")}
        </div>
        ${renderUploadedWorks("ai-commercial", "上传广告短片")}
      </div>
    </section>
  `;
}

function renderCommercialVideoCard(item) {
  return `
    <article class="commercial-video-card hover-lift reveal">
      <div class="commercial-video-frame">
        ${renderVideoMedia(item)}
      </div>
      <div class="commercial-video-meta">
        <div>
          <span>${item.index}</span>
          <h3>${item.title}</h3>
        </div>
        <strong>${item.duration}</strong>
      </div>
      <p class="commercial-video-tag">${item.tag}</p>
      <p class="commercial-video-description">${item.description}</p>
    </article>
  `;
}

function renderVideoProject(project) {
  return `
    <article class="video-project reveal">
      <div class="project-heading">
        <div>
          <span>${project.index}</span>
          <h3>${project.title}</h3>
        </div>
        <p>${project.tag}</p>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="video-placeholder hover-lift">
        ${renderVideoMedia(project)}
        <button type="button" aria-label="视频占位播放按钮">
          <span class="play-symbol"></span>
        </button>
      </div>
      <div class="process-timeline" aria-label="${project.title} 制作流程">
        ${processSteps.filter((step) => ["01", "02", "03"].includes(step.number)).map((step) => renderProcessStep(step, project)).join("")}
      </div>
    </article>
  `;
}

function renderVideoMedia(project) {
  if (project.bilibiliBvid) {
    const playerUrl = `https://player.bilibili.com/player.html?bvid=${project.bilibiliBvid}&page=1&high_quality=1&danmaku=0&autoplay=0`;
    return `
      <iframe
        class="bilibili-video"
        src="${playerUrl}"
        title="${escapeHtml(project.title || "Bilibili video")}"
        loading="lazy"
        allow="fullscreen; picture-in-picture"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    `;
  }

  if (project.videoSrc) {
    return `
      <video
        class="direct-video"
        src="${project.videoSrc}"
        ${project.posterSrc ? `poster="${project.posterSrc}"` : ""}
        controls
        preload="metadata"
        playsinline
      ></video>
    `;
  }

  return placeholder("VIDEO PLACEHOLDER", "COMING SOON", "video");
}

function renderProcessStep(step, project) {
  return `
    <article class="process-step">
      <div class="process-step-copy">
        <span>${step.number}</span>
        <h4>${step.title}</h4>
        <p class="process-tag">${step.tag}</p>
        <p>${step.description}</p>
      </div>
      ${renderProcessMaterials(step.number, project)}
    </article>
  `;
}

function renderProcessMaterials(stepNumber, project) {
  const uploadedMaterials = getProcessWorksForStep(project, stepNumber);

  if (stepNumber === "01") {
    if (uploadedMaterials.length) {
      const className = project.processSource === "robot" ? "character-materials character-materials-wide" : "character-materials";
      return renderProcessUploadedMaterials(uploadedMaterials, className, "portraitSmall");
    }

    return `
      <div class="process-materials character-materials">
        ${["主视觉", "三视图", "表情设定"].map((label) => labeledPlaceholder(label, "PROCESS MATERIAL", "portraitSmall")).join("")}
      </div>
    `;
  }

  if (stepNumber === "02") {
    if (uploadedMaterials.length) {
      return renderProcessUploadedMaterials(uploadedMaterials, "environment-materials", "wide");
    }

    return `
      <div class="process-materials environment-materials">
        ${["氛围图", "关键场景", "世界观设定"].map((label) => labeledPlaceholder(label, "PROCESS MATERIAL", "wide")).join("")}
      </div>
    `;
  }

  if (stepNumber === "03") {
    if (uploadedMaterials.length) {
      return `
        <div class="storyboard-wall uploaded-masonry uploaded-masonry-process">
          ${uploadedMaterials.map((work, index) => renderMasonryWorkCard(work, index, "process-upload-card")).join("")}
        </div>
      `;
    }

    return `
      <div class="storyboard-wall">
        ${Array.from({ length: 6 }, (_, index) => `
          <div class="shot-card">
            ${placeholder("IMAGE PLACEHOLDER", "PROCESS MATERIAL", "shot")}
            <span>SHOT ${String(index + 1).padStart(2, "0")}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (stepNumber === "04") {
    return `
      <div class="prompt-card-grid">
        ${["角色连续性", "镜头运动", "场景情绪"].map((label, index) => `
          <div class="prompt-card">
            <span>PROMPT CARD 0${index + 1}</span>
            <strong>${label}</strong>
            <p>placeholder prompt structure / camera / mood / motion / style control</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (stepNumber === "05" && uploadedMaterials.length) {
    return renderProcessUploadedMaterials(uploadedMaterials, "final-materials", "wide");
  }

  return `
    <div class="process-materials final-materials">
      ${labeledPlaceholder("成片截图", "PROCESS MATERIAL", "wide")}
      ${labeledPlaceholder("剪辑时间线", "TIMELINE PLACEHOLDER", "timeline")}
      ${labeledPlaceholder("输出版本", "VERSION PLACEHOLDER", "square")}
    </div>
  `;
}

function renderProcessUploadedMaterials(works, className, variant) {
  return `
    <div class="process-materials ${className} uploaded-masonry uploaded-masonry-process">
      ${works.map((work, index) => renderMasonryWorkCard(work, index, "process-upload-card")).join("")}
    </div>
  `;
}

function labeledPlaceholder(label, subLabel, variant) {
  return `
    <div class="labeled-placeholder hover-lift">
      ${placeholder("IMAGE PLACEHOLDER", subLabel, variant)}
      <span>${label}</span>
    </div>
  `;
}

function renderIPDesign() {
  const ipWorks = sortBySourcePath(getUploadedWorks("ip-design", "character"));
  const detailCards = [
    { title: "三视图设定", tag: "THREE VIEW", variant: "wide" },
    { title: "表情延展", tag: "EXPRESSION SHEET", variant: "square" },
    { title: "动作延展", tag: "POSE STUDY", variant: "square" },
    { title: "VI应用", tag: "VISUAL APPLICATION", variant: "wide" },
    { title: "色彩系统图", tag: "COLOR SYSTEM", variant: "square" }
  ];
  const swatches = ["#C89B5A", "#F2EDE4", "#9C9388", "#2A2520", "#15120E"];

  if (ipWorks.length) {
    return `
      <section id="ip-design" class="portfolio-section section-layer">
        <div class="section-inner">
          ${sectionIntro(
            "05",
            "CHARACTER DOSSIER",
            "IP形象设计",
            "以官方角色设定集方式组织主视觉、三视图、表情、动作、VI 应用与色彩系统。"
          )}
          <article class="ip-dossier uploaded-dossier-wall reveal">
            <div class="uploaded-masonry uploaded-masonry-ip">
              ${ipWorks.map((work, index) => renderMasonryWorkCard(work, index, "dossier-masonry-card")).join("")}
            </div>
            <div class="dossier-bottom compact-dossier-bottom">
              <div class="palette-card">
                <span>色彩系统 / COLOR SYSTEM</span>
                <div class="swatches">
                  ${swatches.map((color) => `<i style="background-color:${color}"></i>`).join("")}
                </div>
              </div>
              <div class="world-card">
                <span>世界观简介 / WORLD VIEW</span>
                <p>呈现角色背景、性格关键词、品牌应用场景与内容延展方向，建立完整的角色故事线与商业化应用体系。</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    `;
  }

  return `
    <section id="ip-design" class="portfolio-section section-layer">
      <div class="section-inner">
        ${sectionIntro(
          "05",
          "CHARACTER DOSSIER",
          "IP形象设计",
          "以官方角色设定集方式组织主视觉、三视图、表情、动作、VI 应用与色彩系统。"
        )}
        <article class="ip-dossier reveal">
          <div class="dossier-main">
            ${ipWorks[0] ? "" : `
              <div class="dossier-label">
                <span>IP CHARACTER FILE</span>
                <strong>NO. 01</strong>
              </div>
            `}
            ${ipWorks[0] ? `<div class="uploaded-work-frame dossier-embedded-frame">${renderUploadedMedia(ipWorks[0])}</div>` : placeholder("主视觉占位", "MAIN CHARACTER VISUAL", "character")}
          </div>
          <div class="dossier-details">
            ${detailCards
              .map(
                (card, index) => `
                  <div class="dossier-card hover-lift">
                    ${ipWorks[index + 1] ? "" : `<div class="mini-index">${String(index + 1).padStart(2, "0")}</div>`}
                    ${ipWorks[index + 1] ? `<div class="uploaded-work-frame dossier-embedded-frame">${renderUploadedMedia(ipWorks[index + 1])}</div>` : placeholder(card.title, "IMAGE PLACEHOLDER", card.variant)}
                    ${ipWorks[index + 1] ? "" : `
                      <div class="dossier-card-caption">
                        <span>${card.tag}</span>
                        <strong>${card.title}</strong>
                      </div>
                    `}
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="dossier-bottom">
            <div class="palette-card">
              <span>色彩系统 / COLOR SYSTEM</span>
              <div class="swatches">
                ${swatches.map((color) => `<i style="background-color:${color}"></i>`).join("")}
              </div>
            </div>
            <div class="world-card">
              <span>世界观简介 / WORLD VIEW</span>
              <p>呈现角色背景、性格关键词、品牌应用场景与内容延展方向，建立完整的角色故事线与商业化应用体系。</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderSuperSymbol() {
  const symbolWorks = sortBySourcePath(getUploadedWorks("super-symbol", "brand"));
  const symbolFrameLabels = [
    ["符号推导", "SYMBOL LOGIC", "wide"],
    ["图形拆解", "GRAPHIC BREAKDOWN", "wide"],
    ["应用延展", "APPLICATION SYSTEM", "wide"],
    ["海报视觉", "POSTER SYSTEM", "poster"],
    ["核心标识", "MASTER MARK", "square"],
    ["辅助图形", "SUPPORTING GRAPHIC", "wide"],
    ["组合规范", "LOCKUP SYSTEM", "wide"],
    ["材质测试", "MATERIAL TEST", "square"],
    ["品牌场景", "BRAND SCENE", "wide"],
    ["视觉延展", "VISUAL EXTENSION", "poster"],
    ["提案补充", "PROPOSAL DETAIL", "wide"]
  ];
  const placeholderCards = symbolFrameLabels.slice(0, 4).map(([title, tag, variant], index) => ({
    index: String(index + 2).padStart(2, "0"),
    title: `${title}占位`,
    tag,
    variant
  }));
  const uploadedCards = symbolWorks.slice(1).map((work, index) => {
    const [title, tag, variant] = symbolFrameLabels[index] || [`系统延展 ${String(index + 2).padStart(2, "0")}`, "BRAND EXTENSION", "wide"];
    return {
      index: String(index + 2).padStart(2, "0"),
      title,
      tag,
      variant,
      work
    };
  });
  const cards = symbolWorks.length ? uploadedCards : placeholderCards;

  if (symbolWorks.length) {
    return `
      <section id="super-symbol" class="portfolio-section section-layer">
        <div class="section-inner">
          ${sectionIntro(
            "06",
            "BRAND SYSTEM PROPOSAL",
            "超级符号",
            "用品牌提案的逻辑展示符号核心、推导、图形拆解、应用延展与海报视觉。"
          )}
          <article class="symbol-system uploaded-symbol-wall reveal">
            <div class="uploaded-masonry uploaded-masonry-symbol">
              ${symbolWorks.map((work, index) => renderMasonryWorkCard(work, index, "symbol-masonry-card")).join("")}
            </div>
          </article>
        </div>
      </section>
    `;
  }

  return `
    <section id="super-symbol" class="portfolio-section section-layer">
      <div class="section-inner">
        ${sectionIntro(
          "06",
          "BRAND SYSTEM PROPOSAL",
          "超级符号",
          "用品牌提案的逻辑展示符号核心、推导、图形拆解、应用延展与海报视觉。"
        )}
        <article class="symbol-system reveal">
          <div class="symbol-hero hover-lift">
            ${symbolWorks[0] ? "" : `
              <div class="symbol-meta">
                <span>MASTER SYMBOL</span>
                <strong>01</strong>
              </div>
            `}
            ${symbolWorks[0] ? `<div class="uploaded-work-frame symbol-embedded-frame">${renderUploadedMedia(symbolWorks[0])}</div>` : placeholder("大符号展示占位", "SUPER SYMBOL PLACEHOLDER", "symbol")}
          </div>
          <div class="symbol-grid">
            ${cards
              .map(
                (card) => `
                  <div class="symbol-card hover-lift">
                    ${card.work ? "" : `
                      <div class="symbol-card-title">
                        <span>${card.index}</span>
                        <p>${card.tag}</p>
                      </div>
                    `}
                    ${card.work ? `<div class="uploaded-work-frame symbol-embedded-frame">${renderUploadedMedia(card.work)}</div>` : placeholder(card.title, "IMAGE PLACEHOLDER", card.variant)}
                    ${card.work ? "" : `<div class="symbol-card-caption">${card.title}</div>`}
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderEcommerce() {
  return `
    <section id="ecommerce" class="portfolio-section section-layer">
      <div class="section-inner">
        ${sectionIntro(
          "07",
          "COMMERCIAL POSTER SYSTEM",
          "电商海报",
          "按风格参考海报、人物参考海报两个商业方向组织作品卡片，保持干净、统一、便于浏览。"
        )}
        <div class="tabs reveal" role="tablist" aria-label="电商海报分类">
          ${ecommerceTabs
            .map(
              (tab) => `
                <button type="button" role="tab" data-tab="${tab.id}" aria-selected="${tab.id === activeTabId}">
                  <span>${tab.tag}</span>
                  ${tab.label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="ecommerce-grid" id="ecommerceGrid"></div>
      </div>
    </section>
  `;
}

function renderEcommerceGrid() {
  const activeTab = ecommerceTabs.find((tab) => tab.id === activeTabId) || ecommerceTabs[0];
  const grid = document.querySelector("#ecommerceGrid");
  if (!grid) return;
  const uploaded = sortBySourcePath(getUploadedWorks("ecommerce", activeTab.id));
  grid.classList.toggle("uploaded-masonry", uploaded.length > 0);
  grid.classList.toggle("uploaded-masonry-ecommerce", uploaded.length > 0);
  grid.classList.toggle("ecommerce-grid-reference", activeTab.id === "reference");
  grid.classList.toggle("ecommerce-grid-persona", activeTab.id === "persona");

  grid.innerHTML = uploaded.length
    ? uploaded.map((work, index) => renderMasonryWorkCard(work, index, "ecommerce-masonry-card", true)).join("")
    : activeTab.works
        .map(
          (work, index) => `
            <article class="ecommerce-card reveal hover-lift visible" style="transition-delay:${index * 30}ms">
              ${placeholder("ECOMMERCE POSTER", "IMAGE PLACEHOLDER", "poster")}
              <div class="card-meta">
                <span>${work.tag}</span>
                <h3>${work.title}</h3>
                <p>${work.keywords}</p>
              </div>
            </article>
          `
        )
        .join("");

  updateTabs();
  fitUploadedImageFrames(grid);
}

function renderUILaunchDesign() {
  const launchWorks = sortBySourcePath(getUploadedWorks("ui-launch", "gallery"));

  return `
    <section id="ui-launch" class="portfolio-section section-layer ui-launch-section">
      <div class="section-inner">
        ${sectionIntro(
          "08",
          "UI LAUNCH DESIGN",
          "UI启动页设计",
          "游戏启动页、品牌启动页与移动端首屏视觉设计，展示主视觉构图、界面层级、按钮视觉与启动氛围。"
        )}
        <div class="ui-launch-grid uploaded-masonry">
          ${launchWorks
            .map((work, index) => {
              const frameClass = index === 0
                ? "ui-launch-card is-wide is-wide-3x2"
                : index === 1
                  ? "ui-launch-card is-wide is-wide-16x9"
                  : "ui-launch-card is-portrait";
              return renderMasonryWorkCard(work, index, frameClass, true);
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section id="about" class="portfolio-section about-section section-layer">
      <div class="section-inner">
        ${sectionIntro("09", "ABOUT / CONTACT", "关于我 / 联系方式")}
        <div class="about-grid resume-hero">
          <div class="about-copy reveal">
            <span class="resume-eyebrow">RESUME / PROFILE</span>
            <h3>张宇</h3>
            <p class="resume-role">AIGC Visual Designer</p>
            <p class="resume-summary">
              2024年毕业于人物形象设计专业，拥有约2年AIGC视觉创作经验。曾先后在山西与北京参与AIGC视觉内容相关工作，现寻求北京AIGC视觉设计、AI视频设计及内容创意方向机会。
            </p>
            <p class="resume-summary">
              专注AI图像、AI视频、角色IP、电商视觉与电影感分镜创作，擅长将创意概念转化为完整视觉方案。具备从风格定位、Prompt设计、画面生成、视觉优化到项目包装的完整执行能力。
            </p>
          </div>
          <div class="contact-panel reveal">
            ${["EMAIL", "WECHAT", "PORTFOLIO"].map((item) => `
              <div class="contact-row">
                <span>${item}</span>
                <p>PLACEHOLDER</p>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="resume-archive">
          <div class="resume-panel resume-experience-panel reveal">
            <div class="resume-panel-head">
              <span>EXPERIENCE</span>
              <h3>工作经历</h3>
            </div>
            <div class="resume-timeline">
              <article class="resume-timeline-item">
                <div>
                  <span>2024.06 - 2025.02</span>
                  <h4>山西闻智科技有限公司｜短视频剪辑</h4>
                  <p class="resume-location">山西</p>
                </div>
                <div class="resume-detail">
                  <p>毕业后进入山西闻智科技有限公司，从事短视频剪辑与视觉内容制作相关工作，主要负责短视频素材整理、内容剪辑、画面节奏把控、字幕包装、封面设计及基础后期优化。工作期间接触了短视频从素材筛选、剪辑成片到发布前视觉包装的完整流程，为后续转向AIGC视频创作积累了镜头节奏、画面构图和内容表达经验。</p>
                  <h5>主要工作内容</h5>
                  <ol class="resume-duty-list">
                    <li>负责短视频素材的整理、筛选与归类，根据脚本或内容方向完成视频粗剪、精剪与成片输出。</li>
                    <li>根据不同平台内容需求，调整视频节奏、镜头顺序、转场方式和画面结构，提升视频观看流畅度。</li>
                    <li>负责短视频字幕排版、标题包装、封面视觉设计及基础画面调色，使内容更符合新媒体传播风格。</li>
                    <li>配合项目需求完成企业宣传、产品展示、活动记录、新媒体短视频等不同类型的视频剪辑工作。</li>
                    <li>使用剪映、Premiere、Photoshop等工具完成剪辑、封面制作、画面裁切、格式适配与发布素材整理。</li>
                    <li>在工作中逐步形成对短视频节奏、用户观看习惯、画面信息层级和商业内容表达的理解，为AIGC视频生成工作打下基础。</li>
                  </ol>
                  <h5>能力沉淀</h5>
                  <p>通过该阶段工作，掌握了短视频制作的基础流程，提升了素材判断、镜头衔接、节奏控制、画面包装和视觉审美能力。能够根据内容主题快速完成视频剪辑与视觉优化，并具备一定的新媒体内容理解能力。</p>
                </div>
              </article>
              <article class="resume-timeline-item">
                <div>
                  <span>2025.03 - 2026.03</span>
                  <h4>有糖（北京）营销科技有限公司｜AI视频生成师</h4>
                  <p class="resume-location">北京</p>
                </div>
                <div class="resume-detail">
                  <p>在有糖（北京）营销科技有限公司担任AI视频生成师，主要参与AIGC视频内容、AI视觉素材、广告短片、新媒体视频及商业创意内容的制作。工作内容围绕AI视频生成、分镜拆解、Prompt撰写、图生视频、角色一致性控制、画面优化和后期调整展开，熟悉AI视频从创意构思到生成落地的完整流程。</p>
                  <h5>主要工作内容</h5>
                  <ol class="resume-duty-list">
                    <li>根据项目需求参与AI视频内容制作，包括广告短片、品牌视觉、新媒体视频、AI漫剧、人物展示视频等内容方向。</li>
                    <li>负责将文案、脚本或创意需求拆解为可执行的分镜画面，明确镜头景别、人物动作、场景氛围、光影风格和运镜方式。</li>
                    <li>撰写并优化AI视频生成提示词，控制人物形象、动作表现、镜头运动、画面质感、视觉风格和情绪氛围。</li>
                    <li>使用即梦、可灵、Runway等AI视频工具进行图生视频、文生视频及动态画面生成，并根据结果不断调整提示词和参考图。</li>
                    <li>负责AI生成画面的筛选、优化与二次调整，包括人物一致性、场景连贯性、动作自然度、画面稳定性和商业视觉质感。</li>
                    <li>配合项目需求完成AI视觉素材生成，包括人物写真、角色设定、产品海报、宣传主视觉、视频封面和分镜参考图。</li>
                    <li>结合剪映、Premiere、Photoshop等工具，对AI生成素材进行剪辑、调色、画面修正、字幕包装和最终输出。</li>
                    <li>参与项目视觉风格统一，确保不同镜头、不同画面之间在人物、服装、场景、色调和氛围上保持一致。</li>
                  </ol>
                  <h5>项目经验与成果</h5>
                  <p>在该阶段工作中，参与了多类型AIGC内容制作，熟悉商业项目对AI视频效率、视觉完成度和内容落地性的要求。能够根据项目目标快速完成画面方向判断、提示词设计、生成测试与结果优化，具备较强的AI视频执行能力和视觉转化能力。</p>
                  <h5>能力沉淀</h5>
                  <p>通过北京阶段的AI视频项目实践，进一步强化了AIGC视觉创作能力，掌握了从脚本理解、分镜拆解、提示词撰写、视频生成到后期包装的完整工作流。能够独立承担AI视频生成、AI视觉素材制作和AIGC内容优化相关工作，适合AI视频生成师、AIGC视觉设计师、AI内容设计师等岗位。</p>
                </div>
              </article>
            </div>
          </div>
          <div class="resume-panel resume-skills-panel reveal">
            <div class="resume-panel-head">
              <span>SKILLS</span>
              <h3>能力标签</h3>
            </div>
            <div class="resume-skill-cloud">
              ${["AI图像生成", "AI视频生成", "Prompt Design", "角色一致性", "分镜设计", "IP角色设计", "电商视觉", "商业海报", "AI写真", "图生视频", "Photoshop", "剪映", "Premiere"].map((skill) => `<span>${skill}</span>`).join("")}
            </div>
          </div>
          <div class="resume-panel resume-project-panel reveal">
            <div class="resume-panel-head">
              <span>SELECTED PROJECTS</span>
              <h3>精选项目</h3>
            </div>
            <div class="resume-project-list">
              ${["AI短片《机器人想看一次海》", "AIGC人物写真系列", "IP角色设计系列", "电商AIGC视觉设计", "超级符号与品牌视觉"].map((project, index) => `
                <a href="#${["ai-video", "ai-photo", "ip-design", "ecommerce", "super-symbol"][index]}" data-section-link="${["ai-video", "ai-photo", "ip-design", "ecommerce", "super-symbol"][index]}">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${project}</p>
                </a>
              `).join("")}
            </div>
          </div>
        </div>
        <footer class="site-footer">
          <span>ZHANG YU PORTFOLIO</span>
          <span>AIGC VISUAL ARCHIVE / 2026</span>
        </footer>
      </div>
    </section>
  `;
}

function bindInteractions() {
  const mobileMenuButton = document.querySelector("#mobileMenuButton");
  const mobileNav = document.querySelector("#mobileNav");

  mobileMenuButton.addEventListener("click", () => {
    const nextOpen = !mobileNav.classList.contains("is-open");
    mobileNav.classList.toggle("is-open", nextOpen);
    mobileMenuButton.classList.toggle("is-open", nextOpen);
    mobileMenuButton.setAttribute("aria-expanded", String(nextOpen));
  });

  document.querySelectorAll("[data-section-link]").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      mobileMenuButton.classList.remove("is-open");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      setActiveSection(link.dataset.sectionLink);
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTabId = button.dataset.tab;
      renderEcommerceGrid();
    });
  });

  document.addEventListener("click", (event) => {
    const image = event.target.closest?.("img.uploaded-image");
    if (!image || event.target.closest(".image-lightbox")) return;
    openImagePreview(image);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeImagePreview();
  });
}

function updateTabs() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    const isActive = button.dataset.tab === activeTabId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function observeReveal() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  elements.forEach((element) => revealObserver.observe(element));
}

function observeSections() {
  const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;

  sectionObserver?.disconnect();
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry) {
        setActiveSection(activeEntry.target.id);
      }
    },
    { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function setActiveSection(sectionId) {
  document.querySelectorAll("[data-section-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionLink === sectionId);
  });
}

function scrollToSection(sectionId, smooth) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  document.documentElement.style.scrollBehavior = smooth ? "smooth" : "auto";
  if (location.hash === `#${sectionId}`) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
  location.hash = sectionId;
  window.setTimeout(() => {
    document.documentElement.style.scrollBehavior = "";
  }, 360);
  setActiveSection(sectionId);
}

function applyInitialHash() {
  if (location.hash) {
    window.setTimeout(() => scrollToSection(location.hash.slice(1), false), 80);
  }
}

async function initPortfolio() {
  renderNav();
  await loadUploadedWorks();
  renderPage();
  renderEcommerceGrid();
  fitUploadedImageFrames();
  bindInteractions();
  observeReveal();
  observeSections();

  if (location.hash) {
    if (document.readyState === "complete") {
      applyInitialHash();
    } else {
      window.addEventListener("load", applyInitialHash, { once: true });
    }
  } else {
    setActiveSection("home");
  }
}

initPortfolio();
