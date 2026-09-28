# 次にやること (2026-09-27 時点)

別のPCで続ける場合は、先に [handoff.md](./handoff.md)(環境の作り方とルール)を読む。

## 現状

- Home / Destination / Crew: 実装済み。見た目の細部調整が残っている
- Technology: 骨組み・画像の切り替え・丸ボタンまで。デスクトップのレイアウトが未完成
- 未コミットの変更: `index.html`(Bellefair の link)、`src/App.tsx`(technology ルート)、`src/index.css`(technology-hero / font-serif)、`src/component/Technology.tsx`、`src/component/Destination.tsx`(空行のみ)

## 1. Technology (最優先)

- [ ] 外側の flex(20行目)が `flex lg:flex-row` のままで、モバイルも横並びになっている → `flex flex-col lg:flex-row`
- [ ] デスクトップで画像が右端に寄らず、テキストと重なっている → 画像に `lg:ml-auto lg:shrink-0` と幅・高さ(Figma の値)、親に `lg:items-center lg:gap-*`
- [ ] テキストブロックが中央揃えのまま → `lg:items-start lg:text-left`
- [ ] 画像の `-mx-6` はモバイル/タブレットの画面端いっぱい用。デスクトップで右端に届く挙動が Figma と合っているか確認
- [ ] タブレット・モバイルの Figma 数値(画像の高さ、文字サイズ、余白)を反映
- [ ] 不要な外側の `<div>`(17行目)とコメントアウトの行(11行目)を削除

## 2. 全ページ共通の見た目

- [ ] フォント: Bellefair は読み込み済みだが、`font-serif` が Home の "SPACE" / EXPLORE、Destination の天体名、Crew の名前・役職にまだ付いていない
- [ ] Barlow(本文)と Barlow Condensed(ナビ・ラベル)が未読み込み → `index.html` に追加して `@theme` に `--font-sans` / `--font-condensed` を登録
- [ ] Nav: "00 HOME" のように番号を付ける(モバイルのオーバーレイ、デスクトップの両方)、文字サイズ、letter-spacing
- [ ] Nav のモバイルメニュー4箇所にある `hover:border-r-2${isActive ...}` のスペース抜けを修正
- [ ] Page Title: 「02」とテキストの間隔、letter-spacing、サイズ(各ページ)
- [ ] 3ブレークポイント(375 / 768 / 1440)で4ページを目視確認(DevTools のデバイスツールバー)

## 3. Crew

- [ ] ドット(ラジオ)にアクセシブルな名前がない → `<span className="sr-only">Douglas Hurley</span>` を label 内に入れる
- [ ] ドットの見た目(10px の円、gap 8 / 16px、非アクティブは薄く)
- [ ] Explanation を `flex flex-col justify-between` にして、ドットを下へ寄せる
- [ ] 画像サイズ(モバイル / タブレット / デスクトップ)を Figma で再確認

## 4. アクセシビリティ

- [ ] キーボードのフォーカスが見えない(Destination のタブ、Crew のドット、Technology の丸ボタンは input を隠しているため) → label に `focus-within:outline` などを付ける
- [ ] Destination のラジオを `<fieldset>` + `<legend>`(sr-only)でグループ化
- [ ] ページごとの `<title>`(今はすべて "workspace")と favicon(Vite のまま。`src/assets/favicon-32x32.png` がある)
- [ ] 各ページの `h1` が1つだけか確認

## 5. コード品質

- [ ] `(d: any)` をやめて `data.json` の型を定義する
- [ ] 同じ `data.xxx.find(...)` を何度も書いているので、`const current = ...` に1回だけまとめる
- [ ] 未使用ファイルの整理: `src/App.css`(どこからも import されていない)、`public/icons.svg`(参照なし)
- [ ] `Layout.tsx` の import 横にある日本語コメントを削除
- [ ] `Home.tsx` の関数名 `Homepage` → `Home`、`src/component/` → `src/pages/`(最初に決めた方針)
- [ ] 存在しない URL 用の 404 ルート
- [ ] `pnpm lint` と `pnpm build` を実行してエラーを確認(ビルドは `tsc -b` を通すので型エラーも出る)

## 6. 公開準備

- [ ] `develop` にコミット → PR → `main` へマージ
- [ ] README を `README-template.md` ベースで書き直す(スクリーンショット、学んだこと、AI との協業)
- [ ] デプロイ(Vercel / Netlify / GitHub Pages のどれか)。React Router を使っているので、`/destination` などに直接アクセスしても動くための設定(SPA のリライト)が必要
- [ ] ライブ URL を README に追加
