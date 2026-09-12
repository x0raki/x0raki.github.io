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
│   ├── threshold-room.png
│   ├── threshold-corridor.jpg
│   └── threshold-atrium.jpg
├── boundary.html
├── index.html
├── scene.js
├── script.js
├── style.css
└── toybox.html
```

フレームワークやビルド工程は使っていません。HTML / CSS / JavaScriptをGitHub Pagesからそのまま配信します。本文とリンクはJavaScriptを無効にした環境でも読めます。JavaScriptはトップページの風景選択と隠し演出に使用しています。

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
- トップページの風景選択: [`scene.js`](./scene.js)
- トップページの隠し演出: [`script.js`](./script.js)

`script.js` を更新した場合は、`index.html` 末尾にあるクエリ文字列も更新し、ブラウザキャッシュを切り替えます。

`style.css` を更新した場合も、全3ページのCSS参照のクエリ文字列を揃えて更新します。

## Publishing

`main` ブランチが公開元です。変更をpushするとGitHub Pagesへ反映されます。`.nojekyll` は、Jekyllの変換を介さない静的サイトであることを明示しています。

## Public repository policy

このリポジトリには、公開してよい文章、画像、リンクだけを置きます。秘密鍵、APIキー、非公開の連絡先、住所、詳細な生年月日、制作途中の私的資料は含めません。

## Rights

Copyright © 2026 x0raki. All rights reserved.

コード、文章、画像の再利用を許諾するオープンソースライセンスは設定していません。詳しくは [`LICENSE`](./LICENSE) を参照してください。

## Top-page scenes

トップページを開くたびに、部屋・回廊・中庭の3種類から風景を選び、背景色も合わせます。閲覧中の自動切り替えはありません。sessionStorageが利用できる場合、同じタブでは直前の風景を避けます。保存不可でもランダム選択は動作します。JavaScript無効時と追加画像の読み込み失敗時は従来の部屋を表示します。SNSカード画像は従来のまま固定です。

`scene.js` 更新時はトップページの参照クエリも更新してください。追加2画像は組み込みimagegenで生成しました。生成プロンプトは [`assets/scene-prompts.md`](./assets/scene-prompts.md) に記録しています。
