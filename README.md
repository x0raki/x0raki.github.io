# x0raki.github.io

らきむぼん / 間間闇の公開プロフィールサイトです。

小説、Webツール、AI-assisted music project「awAI mayami」、好きなものへの入口をまとめています。

[https://x0raki.github.io/](https://x0raki.github.io/)

## Pages

| Page | Description |
| --- | --- |
| [`index.html`](./index.html) | プロフィール、創作、音楽、Webツール、外部リンク |
| [`toybox.html`](./toybox.html) | 小説、映画、音楽など、具体的な好きなものの棚 |
| [`boundary.html`](./boundary.html) | 「境界生成的な固有意識観」を記した隠しページ |

## Structure

```text
.
├── assets/
│   ├── favicon.svg
│   └── threshold-room.png
├── boundary.html
├── index.html
├── script.js
├── style.css
└── toybox.html
```

フレームワークやビルド工程は使っていません。HTML / CSS / JavaScriptをGitHub Pagesからそのまま配信します。本文とリンクはJavaScriptを無効にした環境でも読めます。JavaScriptはトップページの隠し演出にだけ使用しています。

## Local preview

```sh
python3 -m http.server 4173
```

ブラウザで `http://127.0.0.1:4173/` を開きます。

## Updating content

- プロフィール、代表作、音楽、Webツール、リンク: [`index.html`](./index.html)
- 好きなものの一覧: [`toybox.html`](./toybox.html)
- 境界生成的な固有意識観: [`boundary.html`](./boundary.html)
- レイアウトとビジュアル: [`style.css`](./style.css)
- トップページの隠し演出: [`script.js`](./script.js)

`script.js` を更新した場合は、`index.html` 末尾にあるクエリ文字列も更新し、ブラウザキャッシュを切り替えます。

## Publishing

`main` ブランチが公開元です。変更をpushするとGitHub Pagesへ反映されます。`.nojekyll` は、Jekyllの変換を介さない静的サイトであることを明示しています。

## Public repository policy

このリポジトリには、公開してよい文章、画像、リンクだけを置きます。秘密鍵、APIキー、非公開の連絡先、住所、詳細な生年月日、制作途中の私的資料は含めません。

## Rights

Copyright © 2026 x0raki. All rights reserved.

コード、文章、画像の再利用を許諾するオープンソースライセンスは設定していません。詳しくは [`LICENSE`](./LICENSE) を参照してください。
