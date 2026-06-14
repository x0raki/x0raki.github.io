# x0raki.github.io

らきむぼん / 間間闇の公開プロフィールサイトです。

X などのプロフィールから訪れた人に向けて、創作、Webツール、好きなもの、各種リンクへの入口をまとめています。

Site: https://x0raki.github.io/

## Overview

- 静的なプロフィールページです。
- GitHub Pages で公開しています。
- フレームワークは使わず、HTML / CSS / JavaScript だけで構成しています。
- 詳しい好きなものや過去プロフィールは、ページ内から公開Notionへつないでいます。

## Files

- `index.html`: ページ本体
- `style.css`: レイアウト、タイポグラフィ、ビジュアル表現
- `script.js`: 下部リンク一覧の描画
- `assets/threshold-room.png`: ヒーロー背景、OGP画像

## Local Preview

```sh
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

## Update Notes

- 代表作リンクは `index.html` の `#writing` を編集します。
- プロフィール本文は `index.html` の `.hero` と `#profile` を編集します。
- 好きなものは `index.html` の `#likes` を編集します。
- 下部リンク一覧は `script.js` の `links` を編集します。
- `script.js` を更新したときは、`index.html` 末尾の `script.js?v=...` も上げます。

## Public Repository Notes

このリポジトリは公開リポジトリです。

- 秘密鍵、APIキー、連絡先、住所、詳細な生年月日などは置きません。
- 画像やリンクは公開してよいものだけを含めます。
- コードと画像の再利用は現時点では想定していません。
