AI が励ましの言葉をくれるサイトです。Gemini との連携を試すために作ってみました。

Vercel で公開してみました。→ [デモページ](https://praise-app-topaz.vercel.app/)

## 技術

- [Next.js 16](https://nextjs.org/)
- [React 19.2](https://ja.react.dev/)
- [Node.js 24](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- 楽しむ心

## 環境

Node.js をインストールした環境で、開発サーバを動作させてください。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## プロジェクトについて

Gemini との連携を試すために作ってみました。

Gemini のモデルは、gemini-2.5-flash を使用しています（無料枠）。

## 課題

- 拡張の余地あり？キャラクターを選択できるようにするなど？
- 画像を用意したかったです。

## 参考サイト

- [Gemini API キーを使用する  |  Google AI for Developers](https://ai.google.dev/gemini-api/docs/api-key?hl=ja)
- [Next.js で Gemini API を動かす最小限のセットアップ #GeminiAPI - Qiita](https://qiita.com/bisketoriba/items/d3ca75e41ed9992aaff1)
- [Next.JS で Gemini とチャットしてみる](https://zenn.dev/296u/articles/fe1a64b695bc85)
