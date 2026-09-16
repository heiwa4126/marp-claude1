---
marp: true
theme: default
paginate: true
style: |
  section {
    font-family: 'Segoe UI', 'Noto Sans JP', sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 80px;
    padding-right: 80px;
  }
  section.title {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: #e0e0e0;
  }
  section.title h1 {
    font-size: 2.4em;
    color: #e2b96f;
    margin-bottom: 0.2em;
  }
  section.title p {
    color: #b0b8c8;
    font-size: 1.05em;
  }
  h2 {
    color: #0f3460;
    border-bottom: 3px solid #e2b96f;
    padding-bottom: 0.2em;
  }
  code {
    background: #f0f4f8;
    border-radius: 4px;
    padding: 0.1em 0.4em;
  }
  pre {
    background: #1e1e2e;
    color: #cdd6f4;
    border-radius: 8px;
    padding: 1em;
  }
  .highlight {
    background: #fff3cd;
    border-left: 4px solid #e2b96f;
    padding: 0.5em 1em;
    border-radius: 0 6px 6px 0;
  }
---

<!-- _class: title -->
<!-- _paginate: skip -->

# Claude Code for VSCode

**Anthropic の公式 AI コーディングアシスタント**
VSCode 拡張機能で始める AI ペアプログラミング

2026 年 9 月

---

## Claude Code とは

Anthropic が開発する **AI コーディングアシスタント**。

- ターミナル CLI・VSCode 拡張・Web アプリで利用可能
- コードの作成・バグ修正・リファクタリングをエージェントが自律実行
- ファイル読み書き、コマンド実行、Git 操作まで対応

**VSCode 拡張では...**

| 機能             | 内容                                 |
| ---------------- | ------------------------------------ |
| チャット         | エディタ内で直接 Claude と対話       |
| インライン編集   | 選択範囲を指示するだけで書き換え     |
| エージェント実行 | ファイル変更・ビルド・テストを自動化 |

---

## インストール方法

### 1. VSCode Marketplace からインストール

VSCode の拡張機能パネル (`Ctrl+Shift+X`) で **「Claude Code」** を検索してインストール。

### 2. Anthropic アカウントを連携

```
コマンドパレット (Ctrl+Shift+P)
→ "Claude Code: Sign In"
→ ブラウザで Anthropic アカウントを認証
```

### 3. モデルを選択

- **Claude Sonnet 5**（推奨）— 速度と性能のバランス
- **Claude Opus 5** — 最高性能・複雑タスク向け
- **Claude Haiku 4.5** — 軽量・高速応答

---

## 主な機能 ① チャット & インライン編集

### チャットパネル

サイドバーの Claude アイコンから会話形式でコード相談。
開いているファイルのコンテキストを自動で参照。

### インライン編集（`Ctrl+I` / `Cmd+I`）

コードを選択 → ショートカットキー → 指示を入力するだけ。

```typescript
// 選択して「型を追加して」と指示 → Claude が自動で修正
function add(a: number, b: number): number {
	return a + b;
}
```

---

## 主な機能 ② エージェント & ファイル操作

Claude Code の最大の特徴は **エージェント機能**。
単一の指示から複数ファイルにまたがる変更を自律実行。

### できること

- 複数ファイルの一括読み取り・編集
- `bun install` / `bun test` などのコマンド実行
- Git ステータス確認・コミットメッセージ作成
- エラーを検知して自動で修正を試みる

### 使い方

チャットで自然言語で指示するだけ：

> 「`src/api/` 以下のすべての fetch 呼び出しにエラーハンドリングを追加して」

---

## 主な機能 ③ Skills & カスタマイズ

`.claude/` ディレクトリにプロジェクト固有の設定を置ける。

### CLAUDE.md — プロジェクト指示書

`.claude/CLAUDE.md` に置くだけで Claude が毎回読み込む。

```markdown
- Use Bun instead of Node.js
- Always write tests with bun:test
```

### Skills（スラッシュコマンド）

`.claude/skills/` にマークダウンを置くと `/skill-name` で呼び出せる。

```
/code-review  /deploy  /creating-marp-slides
```

---

## 活用シーン

### 新機能の開発

既存コードを理解させてから実装を依頼。
コンテキストを踏まえた一貫性のあるコードを生成。

### コードレビュー & リファクタリング

> 「この関数の複雑度を下げて、テストも書いて」

### ドキュメント作成

コードから JSDoc、README、スライド資料まで自動生成。

### デバッグ支援

エラーメッセージを貼るだけで原因特定から修正まで対応。

> **ポイント**: 曖昧な指示でも動くが、具体的な指示ほど精度が上がる

---

## まとめ

### Claude Code for VSCode の強み

- **エディタを離れずに** AI と協働できる
- **エージェント機能**でファイル横断の複雑なタスクも自動化
- **CLAUDE.md / Skills** でチーム共通のワークフローを標準化
- **複数モデル**を用途で使い分け可能

### 始めるには

1. VSCode Marketplace から「Claude Code」をインストール
2. Anthropic アカウントでサインイン（無料プランあり）
3. `Ctrl+I` でインライン編集を試してみる

**公式ドキュメント**: https://claude.ai/code

_Claude Code for VSCode — AI ペアプログラミングの新しいスタンダード_
