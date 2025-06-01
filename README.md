![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11.7.3-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![vapi-ai/web](https://img.shields.io/badge/%40vapi--ai%2Fweb-2.3.0-8E44AD?style=for-the-badge)

# インタビュープラットフォームのデモサイト
![](./ホーム画面.png)
![](./インタビュー画面.png)
***
JavaScript MasteryというYouTubeチャンネルの[AI音声面接プラットフォーム作成動画](https://youtu.be/8GK8R77Bd7g?si=xNlHZAY8_9nU_n7i)を見ながら作成しました。AIを用いて面接対策をするもので、GeminiとVapi（音声AIエージェント）を用いて、インタビュー内容・レベル・質問の数を設定・作成、インタビュー実施、フィードバックの作成ができるサービスです。作成した面接内容やフィードバックはFirebaseに保存してあります。

## デモページ

https://interview-platform-mock.vercel.app/

### デモ用認証情報
メールアドレス：testuser@gml.com
<br />
パスワード：testuser

※ 「Start an Interview」ボタン押下 → 「Call」ボタン押下 → AI音声アシスタントと会話 → インタビューを作成完了

## 機能一覧
- 認証（/sign-in, /sign-up）
  - ログイン
  - ログアウト
  - 新規登録
- インタビュー作成ページ（/interview）
  - vapiを用いたインタビュー内容構築機能
- インタビューページ（/interview/[id]）
  - AIとのインタビュー練習機能
  - 評価作成機能（音声対話を切ると生成される）
- 振り返りページ（/interview/[id]/feedback）
  - 評価表示

## パッケージ
### フレームワーク・ライブラリ
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)  
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

### スタイリング・UI
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### フォーム・バリデーション
![React Hook Form](https://img.shields.io/badge/ReactHookForm-7.54-EF4444?style=for-the-badge&logo=reacthookform&logoColor=white)  
![Zod](https://img.shields.io/badge/Zod-3.24-4B5563?style=for-the-badge)

### 日付操作・ユーティリティ
![Day.js](https://img.shields.io/badge/Day.js-1.11.13-F97316?style=for-the-badge)  
![clsx](https://img.shields.io/badge/clsx-2.1.1-6366F1?style=for-the-badge)  
![CVA](https://img.shields.io/badge/CVA-0.7.1-4F46E5?style=for-the-badge)  

### AI・外部サービス
![Firebase](https://img.shields.io/badge/Firebase-11.7.3-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)  
![Firebase Admin](https://img.shields.io/badge/Firebase--Admin-13.4.0-F57C00?style=for-the-badge)  
![ai](https://img.shields.io/badge/AI-4.3.16-22D3EE?style=for-the-badge)  
![ai-sdk/google](https://img.shields.io/badge/%40ai--sdk%2Fgoogle-1.2.18-0EA5E9?style=for-the-badge)  
![vapi-ai/web](https://img.shields.io/badge/%40vapi--ai%2Fweb-2.3.0-8E44AD?style=for-the-badge)