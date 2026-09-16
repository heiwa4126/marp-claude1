# スライドディレクティブ

Marp のスライドごとのディレクティブ（`<!-- _directive: value -->`）。
先頭に `_` がつくものはそのスライドのみに適用される。

## ページ番号

- タイトルスライドなど特定のページでページ番号を非表示にする:

  ```markdown
  <!-- _paginate: skip -->
  ```

- スライド全体でページ番号を非表示にするには Front Matter で `paginate` を省略するか `false` に設定する。

## クラス指定

スライドにクラスを付与してカスタム CSS を適用する:

```markdown
<!-- _class: title -->
<!-- _class: invert -->
```

複数クラスはスペース区切り: `<!-- _class: title invert -->`

## 背景画像

```markdown
<!-- _backgroundImage: url('./images/bg.png') -->
<!-- _backgroundColor: #1a1a2e -->
```

## 適用パターン

タイトルスライドの典型構成（ページ番号なし・カスタムクラス）:

```markdown
<!-- _class: title -->
<!-- _paginate: skip -->

# スライドタイトル
```
