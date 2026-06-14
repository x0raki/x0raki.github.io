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
    label: "Archive",
    title: "Notion",
    description: "いままでの公開プロフィールと詳しい好きなもの。",
    href: "https://app.notion.com/p/f5e33df257c4421aa381ca14c54f428e?pvs=28",
  },
];

const linkGrid = document.querySelector("#linkGrid");

if (linkGrid) {
  linkGrid.innerHTML = links
    .map(
      (link) => `
        <a class="link-card" href="${link.href}" target="_blank" rel="noreferrer">
          <small>${link.label}</small>
          <strong>${link.title}</strong>
          <span>${link.description}</span>
        </a>
      `,
    )
    .join("");
}
