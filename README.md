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
├── scripts/
│   └── prepare-sites.mjs
├── style.css
├── theme.js
└── toybox.html
```

フレームワークやビルド工程は使っていません。HTML / CSS / JavaScriptをGitHub Pagesからそのまま配信します。本文とリンクはJavaScriptを無効にした環境でも読めます。JavaScriptはトップページの風景選択、隠し演出、全ページ共通の配色切り替えに使用しています。

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
- 全ページ共通の配色切り替え: [`theme.js`](./theme.js)

`script.js` を更新した場合は、`index.html` 末尾にあるクエリ文字列も更新し、ブラウザキャッシュを切り替えます。

`style.css` を更新した場合も、全3ページのCSS参照のクエリ文字列を揃えて更新します。

`theme.js` を更新した場合も、全3ページの参照クエリを揃えて更新します。初回は端末の配色設定に合わせ、手動で選んだ配色は `localStorage` に保存します。

### 改行・余白を保つために

本文の改行と余白には、画面幅に合わせた個別の調整があります。HTMLの整形やCSSの共通化では、次の指定を保ちます。

- トップの名前と紹介文は、`h1 span` と `.lead span` で行を分けています。音楽紹介の `.semantic-unit` は語句の途中での折り返しを防ぎ、媒体名の `<br />` は意図した改行を作っています。
- プロフィールと詳細欄は、広い画面では見出し列を140px、列間を24pxに揃えています。620px以下では1列になります。
- 620px以下のリンクカードと「好きなもの」の左右余白は18px、おもちゃ箱の一覧は16pxです。罫線を消す指定と余白を消す指定をまとめないでください。
- 境界ページの本文には、段落番号に応じた強調（`.boundary-text p:nth-child(...)`）があります。段落の追加・分割・移動では、強調する文章がずれないか確認します。
- 隠し演出の文言には、`script.js` がプロフィール項目の順序で指定している箇所があります。項目を並べ替える場合は、通常表示と演出中の両方を確認します。

表示を変更するときは、同じ風景・配色・画面幅で変更前後を比較します。全3ページのライト／ダーク表示を、320・390・768・1280pxと、レイアウトが切り替わる620／621・920／921pxで確認します。横にはみ出していないことに加え、語句の折り返し、カード内の余白、罫線、詳細欄の展開も見ます。

配色の切り替えと再読み込み後の保持、キーボードでの移動、観測点の3回クリックによる演出とEscapeキーでの復帰も確認します。JavaScript無効時の本文・リンクと、追加の風景画像を読み込めない場合の部屋への復帰は、関連する処理を変更した際に確認します。

## Publishing

`main` ブランチが公開元です。変更をpushするとGitHub Pagesへ反映されます。`.nojekyll` は、Jekyllの変換を介さない静的サイトであることを明示しています。

### ChatGPT Sites mirror

[https://profile.x0raki.chatgpt.site](https://profile.x0raki.chatgpt.site) に、同じ3ページ・画像・配色切り替え・隠し演出を一般公開しています。

更新元はこのリポジトリ直下のHTML / CSS / JavaScriptと `assets/` です。Sites側だけを直接編集すると差分が生じるため、両方へ反映する変更は先に更新元へ適用します。

```sh
node scripts/prepare-sites.mjs --origin https://profile.x0raki.chatgpt.site
```

このコマンドは公開対象のファイルだけを `.sites-profile/dist/` へコピーします。本文・デザイン・画像を保持し、Sites版の `og:url` と `og:image` をSitesのURLに合わせます。検索向けの `canonical` はGitHub Pagesを引き続き指します。

`.sites-profile/` はGitHub側のGit管理から除外したSites専用チェックアウトです。`.sites-profile/.openai/hosting.json` に既存Siteの識別子と配信設定を保持し、Sitesの保存先では公開版のソースを履歴管理しています。

準備コマンドだけではSitesの公開内容は変わりません。更新するときは、このチェックアウトを使って既存Siteのソースを同期し、公開アーカイブ付きのバージョンを保存して、そのバージョンを公開します。新しいSiteを作り直す必要はありません。GitHub PagesへのpushとSitesへの公開は別の操作です。

## Public repository policy

このリポジトリには、公開してよい文章、画像、リンクだけを置きます。秘密鍵、APIキー、非公開の連絡先、住所、詳細な生年月日、制作途中の私的資料は含めません。

## Rights

Copyright © 2026 x0raki. All rights reserved.

コード、文章、画像の再利用を許諾するオープンソースライセンスは設定していません。詳しくは [`LICENSE`](./LICENSE) を参照してください。

## Top-page scenes

トップページを開くたびに、部屋・回廊・中庭の3種類から風景を選び、背景色も合わせます。閲覧中の自動切り替えはありません。sessionStorageが利用できる場合、同じタブでは直前の風景を避けます。保存不可でもランダム選択は動作します。JavaScript無効時と追加画像の読み込み失敗時は従来の部屋を表示します。SNSカード画像は従来のまま固定です。

`scene.js` 更新時はトップページの参照クエリも更新してください。追加2画像は組み込みimagegenで生成しました。生成プロンプトは [`assets/scene-prompts.md`](./assets/scene-prompts.md) に記録しています。
