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

## 後で調整しやすい場所

- 主要ボタン: `index.html` の `.primary-links`
- 下部リンク一覧: `script.js` の `links`
- 自己紹介文: `index.html` の `.lead` と `.sublead`
- OGP画像: `assets/threshold-room.png`

カクヨムURLは `https://kakuyomu.jp/users/x0raki` として置いています。違う場合は `index.html` と `script.js` の該当URLだけ差し替えれば大丈夫です。
