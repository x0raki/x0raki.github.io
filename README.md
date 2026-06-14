# x0raki.github.io

らきむぼん / 間間闇の公開プロフィールページです。

X のプロフィールに貼る入口として、Notion の公開ページよりも軽く、選び抜いた情報だけを見せる想定で作っています。

## 構成

- `index.html`: ページ本体
- `style.css`: 見た目
- `script.js`: リンク一覧の描画
- `assets/threshold-room.png`: OGP画像兼ヒーロー背景

## ローカル確認

```sh
python3 -m http.server 4173
```

ブラウザで開きます。

```text
http://127.0.0.1:4173/
```

## 公開

GitHub Pages のユーザーサイトとして使う場合は、このディレクトリを `x0raki.github.io` リポジトリにします。

公開URLは以下を想定しています。

```text
https://x0raki.github.io/
```

GitHub 側では `Settings > Pages` を開き、`Deploy from a branch`、`main`、`/ (root)` を選びます。

## 公開前チェック

- ローカルパスや一時ファイルを含めない
- 秘密鍵、APIキー、個人の連絡先、住所、詳細な生年月日を含めない
- 追加する画像は公開してよいものだけにする
- `.DS_Store` やログファイルは `.gitignore` に任せる

## 後で調整しやすい場所

- 代表作リンク: `index.html` の `#writing`
- 下部リンク一覧: `script.js` の `links`
- 自己紹介文: `index.html` の `.lead`
- 好きなもの: `index.html` の `#likes`
- OGP画像: `assets/threshold-room.png`
