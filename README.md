# marp-claude1

- [「スライド作って」で本当にスライドができる — Marp × Claude Code 実践ガイド #ClaudeCode - Qiita](https://qiita.com/toku345/items/11158328ca098957ff27)
- [toku345/marp-slides: Marp を使用したスライド作成・管理プロジェクト](https://github.com/toku345/marp-slides)

を Claude Code on VSCode で試してみるテスト。

ClaudeもSKILLもよくわかってないので、動かしてみるところから始める。

## 完成品

[slides/claude-code-vscode.md](slides/claude-code-vscode.md)

## 準備

```sh
mkdir marp-claude1
cd marp-claude1
bun init # blank プロジェクトを選択する
bun add -D markdownlint-cli @marp-team/marp-cli
```

[toku345/marp-slides](https://github.com/toku345/marp-slides)
の`.claude/`ディレクトリと
`scripts/`ディレクトリを
そっくりコピー。

run-scripts をマージ。

VSCode 拡張の

- anthropic.claude-code
- marp-team.marp-vscode

いれる。

Claude Code に

`使える skills と subagent を列挙して`

と聞いて、Subagent Types に

- slide-builder - スライドビルド・PDF/HTML/PPTX 出力
- slide-creator - 新しい Marp スライドの作成
- slide-reviewer - スライドのレビュー・表示崩れ検出

があるのを確認。

さらに
`/creating-marp-slide`
を聞く (動作確認。たぶん自動で読む)。

## 作成

で、
`Claude Code for VSCode について8ページのスライドを作成して`
で出来たのが
[slides/claude-code-vscode.md](slides/claude-code-vscode.md)

> ブラウザが利用できないため PNG 出力は失敗しました。

> 視覚的確認: 未実施（WSL 環境でブラウザが起動できず PNG 出力不可）

などと言われる。たしかにプレビューすると
若干ハミ出してる。

修正箇所を教えてもらって手で調整した。
あとタイトルページのページ番号を取り除いてもらって、
SKILL などに反映してもらった。
