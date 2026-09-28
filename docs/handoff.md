# 別のPCで作業を続けるためのメモ

TODO の一覧は [next-steps.md](./next-steps.md) にあります。このファイルは、環境の作り方と、このプロジェクトで決めたルールをまとめたものです。

## 0. 離れる前にやること

別のPCから見えるのは、GitHub に**プッシュ済みのコミットだけ**です。未コミットの変更(`git status` に出るもの)は、このPCにしか無いので、必ずコミットしてプッシュしておく。

```bash
git status
git add <ファイル名>
git commit -m "メッセージ"
git push origin develop
```

作業は `develop` ブランチで行い、`main` は安定版として使う。別のPCに戻ったら、最初に最新を取る。

```bash
git checkout develop
git pull origin develop
```

## 1. 環境を作る

リポジトリ: `git@github.com:komataku1234-cmd/space-website.git`(GitHub に SSH キーの登録が必要)

```bash
git clone git@github.com:komataku1234-cmd/space-website.git
cd space-website
git checkout develop
pnpm install
pnpm dev
```

- Node.js 22、pnpm(corepack で有効化)
- `.devcontainer/` があるので、VS Code の Dev Containers 拡張機能で「Reopen in Container」すれば、Node 22 と pnpm の準備と `pnpm install` まで自動で行われる(`postCreateCommand`)
- 開発サーバーは `http://localhost:5173`。`vite.config.ts` の `server` 設定(`host: true`、`usePolling: true`)は、コンテナの外のブラウザから見るために必要。消さない
- `.npmrc` は `shamefully-hoist=true`
- CSS の変更が反映されない時は、`pnpm dev` を止めて `rm -rf node_modules/.vite` してから起動し直す

主な技術: React 19 / TypeScript / Vite 8 / React Router 7(`react-router-dom`)/ Tailwind CSS 4(`@tailwindcss/vite`)

スクリプト: `pnpm dev`、`pnpm build`(`tsc -b && vite build`)、`pnpm lint`(oxlint)

## 2. リポジトリに入っていないもの

- **Figma のデザインファイル**: `.gitignore` の `*.fig` で意図的に除外している(Frontend Mentor の注意書きにより、GitHub に上げない)。Figma の URL もこのリポジトリには書いていない。別のPCでは、Figma のアカウントから開く
- **`AGENTS.md` / `CLAUDE.md`**: 今のリポジトリには入っていない(メンター役のルールを書いたファイル)。別のPCでも同じ進め方をしたい場合は、元のファイルを持っていく
- **Claude の記憶ファイル**: `~/.claude/projects/` の下にあり、このPCにしか無い。次の「AI との進め方」を、別のPCの Claude に最初に伝えると同じ動きになる
- **`.claude/settings.local.json`**: ローカル設定なのでコミットしない

## 3. AI との進め方

- 日本語で話す。中級者向けのメンター役で、完成コードを丸ごと渡さず、考え方とトレードオフを説明する
- コードの例は `...` で省略せず、全部書く(そのままコピペするため)
- 保存してから話しかけるので、「保存しましたか?」と聞かずに、直接ファイルを読む
- `pnpm` などのコマンドは、AI 側では実行できない環境がある。こちらで実行して、結果を貼る
- AI が画面を確認するには「Claude in Chrome」拡張機能を使う。Figma のドメインは開けないので、Figma の数値はこちらで確認して伝える

## 4. Figma の仕様メモ

フレーム幅: モバイル 375 / タブレット 768 / デスクトップ 1440

色は3色だけ(不透明度を変えて使い分ける)。

| 名前 | 値 | Tailwind |
|---|---|---|
| blue-900 | `#0B0D17` | `bg-blue-900`(`@theme` で登録済み) |
| blue-300 | `#D0D6F9` | `text-blue-300`(`@theme` で登録済み) |
| white | `#FFFFFF` | `text-white` |

フォント: Bellefair(見出し、`font-serif` として登録済み)、Barlow / Barlow Condensed(本文・ナビ・ラベル。読み込み・登録は未着手。フォント名は Figma で要確認)

文字サイズのプリセット(px)。「継承」は、そのブレークポイント専用の上書きがなく、デスクトップと同じ値。

| プリセット | デスクトップ | タブレット | モバイル |
|---|---|---|---|
| preset-1 | 144 | 継承 | 80 |
| preset-2 | 96 | 80 | 56 |
| preset-3 | 56 | 40 | 24 |
| preset-4 | 32 | 24 | 18 |
| preset-5 | 28(Bold) | 20 | 継承 |
| preset-6 | 28 | 継承 | 16 |
| preset-7 | 14 | 継承 | 継承 |
| preset-8 | 16 | 継承 | 14 |
| preset-9 | 18(行間180%) | 16(行間180%) | 15(行間180%) |

## 5. このプロジェクトで決めたルール

構成:

- `src/App.tsx`: ルート定義。`Layout` の中に、`Home`(index)/ `destination` / `crew` / `technology` をネスト
- `src/Layout.tsx`: `<Nav />` と `<Outlet />`。`Nav` は `absolute` で背景の上に重ねる
- `src/component/`: 各ページ(`Home` / `Destination` / `Crew` / `Technology`)
- `src/assets/`: 画像。`starter-code/data.json` がデータの元(`starter-code/` はそのまま残している)

Tailwind:

- **モバイルファースト**。接頭辞なしがモバイル、`md:` が 768px 以上、`lg:` が 1440px 以上
- `lg` の標準は 1024px だが、`index.css` の `@theme` で `--breakpoint-lg: 90rem`(1440px)に上書きしている。消さない
- v4 では、`mx-`・`p-`・`gap-`・`w-` などは**どんな整数でも使える**(`ml-35` = 140px)。4で割り切れない値は `w-[327px]` のように角括弧で書く
- フォントサイズは名前付き(`text-2xl` など)か、`text-[80px]` で直接指定する

背景画像:

- `index.css` に `.home-hero` / `.destination-hero` / `.crew-hero` / `.technology-hero` を定義(画像の切り替えだけ。768px と 1440px でメディアクエリ)
- JSX 側で `min-h-dvh bg-cover bg-center bg-no-repeat px-6` を付ける

データと画像の切り替え:

- 選択中の項目は `useState` で持ち、`data.xxx.find((d) => d.name === state)` で探して表示する
- 選択のUIは `<input type="radio">` + `<label>`。同じ `name` でグループ化し、`checked={state === "値"}` を付ける。見た目を消す時は `appearance-none` か `sr-only`
- 画像は `import.meta.glob<string>('../assets/xxx/*.png', { eager: true, import: 'default' })` を**コンポーネントの外**に書き、ファイル名を組み立てて引く(`image-${name.toLowerCase().replaceAll(' ', '-')}.png`)
- Technology の画像切り替えは `<picture>` + `<source media="(min-width: 768px) and (max-width: 1439px)">`(モバイルとデスクトップは portrait、タブレットだけ landscape)

## 6. ハマったところ(同じミスを避けるため)

- **文字色を指定しないと黒になり、暗い背景で見えない**(Tailwind の preflight)。新しい要素には `text-white` などを付ける
- タイプミスのクラス(`lg:ext-left`、`md-6`、`lg:-0` など)は、エラーにならず**黙って無視される**。効かない時は、まずクラス名を疑う
- テンプレートリテラルでクラスをつなぐ時は、単語の間の半角スペースを忘れない(`hover:border-r-2${...}` → `hover:border-r-2 ${...}`)
- `display: flex` の要素は、幅いっぱいに広がるブロック。`mx-auto` では中央に来ないので、`justify-center` を使う。`text-center` は flex の子供の位置には効かない
- `<picture>` は初期値が `inline` なので、`-mx-6` などのマージンを効かせるには `block` が必要
- `items-*`(親が子供全員を揃える)と `self-*`(子供が自分だけ揃える)、`justify-*`(横方向の並べ方)を混同しない
- 画像のはみ出しは、`object-cover` の切り取りか、高さ未指定で巨大になっているのが原因のことが多い
