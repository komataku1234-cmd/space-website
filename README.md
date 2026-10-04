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

![Home ページ(デスクトップ)](./screenshot.jpg)

### Links

- ソリューション URL: [GitHub](https://github.com/komataku1234-cmd/space-website)
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
Tailwind CSSを初めて使ったがある程度理解することができた。モバイル画面から作成したほうがよさそう。
このような簡単なデザインであればTailwind CSSの使い勝手がいいと判断できた。MUIもあるため使用理由を明確にしておきたい。


### Continued development
CSSの理解と作成に時間がかかる。
figmaを使いこなせていない。フォントサイズや配置について完全に模倣できたとは言えない。
themeを多く使ってないため、画面ごとに設定しているためフォントサイズがずれている可能性を作ってしまった。

### Useful resources
claude codeを主に使っている。サイトはTailwind CSSの公式サイトなども見ているが、英語のため結局AIを通しての活用をしている。

### AI Collaboration

このプロジェクトでは、Claude Code を使用しました。
今回はAIにコードを書かせる行為を禁止されているため、相談やわからないことをAIには聞いているが実際にコードを書き、調整も自分で行っているため時間がかなりかかった。コードを理解できるのであれば、AIでコーディングしてもらうのは全然ありだと思った。自分の意見をAIに伝えるための言語力は必要だと実感した。

## Author

- Frontend Mentor - [@ここにユーザー名を追加](https://www.frontendmentor.io/profile/yourusername)
- GitHub - [komataku1234-cmd](https://github.com/komataku1234-cmd)
