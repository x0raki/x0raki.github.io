const links = [
  {
    label: "X",
    title: "@x0raki",
    description: "日々の観測、読書、創作の断片。",
    href: "https://x.com/x0raki",
  },
  {
    label: "Novel",
    title: "カクヨム",
    description: "小説の置き場。書くのは自分が読みたいもの。",
    href: "https://kakuyomu.jp/users/x0raki",
  },
  {
    label: "Essay",
    title: "note",
    description: "記事や長めの感想の置き場。",
    href: "https://note.com/x0raki",
  },
  {
    label: "Tool",
    title: "AWAI Draft",
    description: "メモと原稿のあいだを預かる執筆環境。",
    href: "https://awai-draft.netlify.app/",
  },
  {
    label: "Tool",
    title: "読書灯",
    description: "読書に入るための静かなタイマー。",
    href: "https://x0raki.github.io/reading-lamp/",
  },
  {
    label: "Archive",
    title: "GitHub",
    description: "自作ツールと試作の記録。公開しているものだけ。",
    href: "https://github.com/x0raki",
  },
  {
    label: "Toybox",
    title: "おもちゃ箱",
    description: "思い出すために置いている、具体的な好きなものの棚。",
    href: "toybox.html",
  },
];

const linkGrid = document.querySelector("#linkGrid");

if (linkGrid) {
  linkGrid.innerHTML = links
    .map((link) => {
      const isExternal = link.href.startsWith("http");
      const externalAttrs = isExternal ? ' target="_blank" rel="noreferrer"' : "";

      return `
        <a class="link-card" href="${link.href}"${externalAttrs}>
          <small>${link.label}</small>
          <strong>${link.title}</strong>
          <span>${link.description}</span>
        </a>
      `;
    })
    .join("");
}

const observationCopies = [
  ['.site-nav a[href="#profile"]', "記録"],
  ['.site-nav a[href="#writing"]', "作品"],
  ['.site-nav a[href="#tools"]', "道具"],
  ['.site-nav a[href="#links"]', "痕跡"],
  [".text-link", "記録を読む"],
  ["#profile-title", "観測記録"],
  [".profile-list div:nth-child(1) dt", "識別子"],
  [".profile-list div:nth-child(1) dd", "らきむぼん / 間間闇として記録されています"],
  [".profile-list div:nth-child(3) dt", "記録"],
  [".profile-list div:nth-child(3) dd", "短編小説を書いている、という記録があります"],
  [".profile-list div:nth-child(5) dt", "反復語"],
  ['#writing .section-heading p', "Confirmed works"],
  ['#writing .section-heading h2', "確認された作品"],
  ['#tools .section-heading p', "Remaining tools"],
  ['#tools .section-heading h2', "残された道具"],
  ['.site-nav a[href="toybox.html"]', "物証"],
  ['#likes .section-heading p', "Repeated words"],
  ["#likes-title", "本人が好んだ語"],
  ['#links .section-heading p', "References"],
  ["#links-title", "参照可能な痕跡"],
  [".site-footer > p:first-child", "fictional observation record"],
];

const observedNodes = observationCopies
  .map(([selector, observedText]) => {
    const node = document.querySelector(selector);
    if (!node) return null;
    return {
      node,
      normalText: node.textContent,
      observedText,
    };
  })
  .filter(Boolean);

const trigger = document.querySelector(".observation-trigger");
const exit = document.querySelector(".observation-exit");
let triggerClicks = 0;
let triggerTimer = 0;

function setObservationMode(enabled) {
  document.body.classList.toggle("observation-mode", enabled);
  document.title = enabled
    ? "観測記録 | x0raki"
    : "らきむぼん / 間間闇 | x0raki";

  observedNodes.forEach(({ node, normalText, observedText }) => {
    node.textContent = enabled ? observedText : normalText;
  });
}

function countObservationClick() {
  window.clearTimeout(triggerTimer);
  triggerClicks += 1;

  if (triggerClicks >= 3) {
    triggerClicks = 0;
    setObservationMode(true);
    return;
  }

  triggerTimer = window.setTimeout(() => {
    triggerClicks = 0;
  }, 1200);
}

if (trigger) {
  trigger.addEventListener("click", countObservationClick);
}

if (exit) {
  exit.addEventListener("click", (event) => {
    event.preventDefault();
    setObservationMode(false);
    trigger?.focus({ preventScroll: true });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("observation-mode")) {
    setObservationMode(false);
  }
});
