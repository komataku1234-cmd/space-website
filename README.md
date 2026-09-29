# Frontend Mentor - 宇宙旅行ウェブサイト ソリューション

これは [Frontend Mentor の宇宙旅行ウェブサイトチャレンジ](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) のソリューションです。

## 目次

- [概要](#overview)
  - [チャレンジ内容](#the-challenge)
  - [スクリーンショット](#screenshot)
  - [リンク](#links)
- [制作プロセス](#my-process)
  - [使用技術](#built-with)
  - [学んだこと](#what-i-learned)
  - [今後の課題](#continued-development)
  - [参考にしたリソース](#useful-resources)
  - [AIとの協業](#ai-collaboration)
- [作者](#author)

## Overview

### The challenge

ユーザーができること:

- デバイスの画面サイズに応じて、各ページ(Home / Destination / Crew / Technology)の最適なレイアウトを表示する
- ページ上のすべてのインタラクティブ要素のホバー状態を確認する
- 各ページを閲覧し、タブ・ドット・番号ボタンを切り替えて新しい情報(惑星・乗組員・技術解説)を確認する

### Screenshot

<!-- ここにスクリーンショットを追加してください。ブラウザで `pnpm dev` を実行し、右クリック→「スクリーンショットを撮る」(Firefox)などで撮影し、`screenshot.jpg` として保存してから、下の行のコメントを外してください。 -->
<!-- ![](./screenshot.jpg) -->

### Links

- ソリューション URL: [ここにソリューションURLを追加](https://your-solution-url.com)
- ライブサイト URL: [ここにライブサイトURLを追加](https://your-live-site-url.com)

## My process

### Built with

- セマンティックな HTML5 マークアップ(`<nav>`, `<dl>`, `<hr>`, ラジオボタン + `<label>` によるタブ/ページネーション)
- [React](https://reactjs.org/) 19 + TypeScript
- [React Router](https://reactrouter.com/) 7 によるルーティング(ネストしたルート、`Outlet`)
- [Tailwind CSS](https://tailwindcss.com/) v4(`@theme` によるカスタムブレークポイント・カラー・スペーシング)
- [Vite](https://vitejs.dev/) 8
- モバイルファーストのワークフロー(375 / 768 / 1440px)
- `import.meta.glob` による画像の動的読み込み、`<picture>` によるブレークポイントごとの画像切り替え

### What I learned

<!--
このプロジェクトで得た学びを、自分の言葉で書いてください。例えば:
- React Router のネストしたルート・Outlet の仕組み
- text-align/mx-auto(要素自身の位置)と justify-content(flexの子供の位置)の違い
- Tailwind v4 の動的スペーシング(整数ならどんな値でも calc() で計算される)
- position: absolute/fixed とレイヤーの重なり(z-index)
- import.meta.glob を使った、実行時に決まる画像パスの扱い方
コードサンプルを添えると、自分自身の理解の定着にも、読む人にも伝わりやすくなります。
-->

### Continued development

<!-- まだ完全に習得できていない概念や、今後さらに磨きをかけたいテクニックを書いてください。例えば: アクセシビリティ(キーボードフォーカスの可視化、fieldset/legend)、フォント設定の一貫性、TypeScriptの型定義(any を使わない)など。 -->

### Useful resources

<!-- チャレンジ中に役立ったリソースのリストに置き換えてください。例えば MDN、Tailwind CSS のドキュメント、web.dev など。 -->

### AI Collaboration

このプロジェクトでは、Claude Code を使用しました。

<!--
以下、自分の言葉で書き足してください。例えば:
- どんな場面で使ったか(デバッグ、Tailwindのクラスの意味の確認、レイアウトの原因調査、Figmaの数値をもとにしたスタイリングなど)
- 完成コードをもらうのではなく、コードは自分で書き、考え方やトレードオフの説明を受ける形で進めた、といった協業のスタイル
- うまくいったこと・うまくいかなかったこと
-->

## Author

- Frontend Mentor - [@ここにユーザー名を追加](https://www.frontendmentor.io/profile/yourusername)
- GitHub - [komataku1234-cmd](https://github.com/komataku1234-cmd)
