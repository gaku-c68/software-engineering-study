# ソフトウェア開発勉強会

大学生向けのソフトウェア開発勉強会の教材サイトです。Web、モバイル、AR・VR、AI、IoT、インフラなどの幅広い分野に触れ、参加者自身がソフトウェアを開発できるようになることを目指します。講義中の閲覧と講義後の自習の両方に利用します。

現在はサイトの土台と、プログラミング言語の違いと使い分けを扱う初回授業ページを用意しています。教材の内容は今後追加します。

## 技術構成

VitePress / Markdown / GitHub Pages / GitHub Actions。バックエンド、データベース、ログイン機能はありません。

## ローカルで使う

Node.js 24 LTSとnpmを使用します（`.nvmrc`を用意しています）。

```sh
# nvmを使用する場合
nvm install
nvm use

npm ci
npm run docs:dev
```

起動後に表示されるURL（通常は `http://localhost:5173/software-engineering-study/`）を開きます。

```sh
# ビルド（リンク切れも検証）
npm run docs:build

# ビルド済みサイトを確認
npm run docs:preview
```

プレビューは通常 `http://localhost:4173/software-engineering-study/` で確認できます。生成物は `docs/.vitepress/dist/` です。

## ファイル構成

```text
.github/workflows/deploy.yml  # PRのビルド検証とPagesへのデプロイ
docs/                        # 公開するMarkdown
  .vitepress/config.mts      # サイト設定、ナビゲーション、サイドバー
  index.md                   # トップページ
  about.md                   # 勉強会概要
  programming-languages.md   # 初回授業：プログラミング言語の違いと使い分け
AGENTS.md                    # Codex向けの作業方針
```

## 教材ページを追加する

1. `docs/` にMarkdownを追加します。教材が増えたら `docs/web/` など分野ごとのディレクトリに整理できます。
2. ページの先頭に日本語の見出し（`# ページ名`）を書き、内容を追加します。
3. `docs/.vitepress/config.mts` の `themeConfig.sidebar` にリンクを追加します。主要な入口は `nav` にも追加します。
4. 内部リンクは `/about` のように `docs/` を起点に記述します。リポジトリ名をリンクに直書きする必要はありません。画像などの配置と参照は [VitePressのアセット処理](https://vitepress.dev/guide/asset-handling) を参照してください。
5. `npm run docs:build` とプレビューで表示、リンク、モバイル幅のメニューを確認し、Pull Requestを作成します。

`docs/` 以下のページは公開対象です。機密情報や個人情報を置かないでください。

## GitHub Pagesの初回設定

リポジトリの管理権限で、以下を設定してください。

1. **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にします。
2. **Settings → Actions → General** で、ワークフローと使用するActionsの実行が許可されていることを確認します。
3. この変更を `main` にマージします。**Actions → Deploy VitePress site to Pages** の成功を確認します。必要に応じて `main` を選び **Run workflow** から再実行できます。
4. `github-pages` Environmentに承認ルールが設定されている場合は、デプロイを承認してください。

公開先：<https://gaku-c68.github.io/software-engineering-study/>

PRとmainへのpushでビルドし、mainのpushまたはmainからの手動実行でのみデプロイします。PRからはデプロイしません。デプロイジョブにのみ `pages: write` と `id-token: write` を付与します。追加のアクセストークンは不要です。

GitHub Pagesの `base` は `/software-engineering-study/` に設定しています。リポジトリ名や公開先を変える場合は `docs/.vitepress/config.mts` の `base`、GitHubへのリンク、本READMEのURLを更新してください。

### デプロイに失敗した場合

`build` ジョブが成功しているのに `deploy` ジョブで `404 Not Found` が発生する場合は、GitHub Pagesが有効になっていない可能性があります。リポジトリの管理者が次を確認してください。

1. **Settings → Pages → Build and deployment → Source** が **GitHub Actions** になっていること
2. **Settings → Actions → General** でActionsの実行が許可されていること
3. `github-pages` Environmentに承認待ちや制限がないこと

設定後、**Actions → Deploy VitePress site to Pages → Run workflow** から `main` を選んで再実行できます。
