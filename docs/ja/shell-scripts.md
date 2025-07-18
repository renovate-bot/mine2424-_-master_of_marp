# シェルスクリプトドキュメント

このプロジェクトには、ターミナルから完全にMarpプレゼンテーションを操作できる強力なシェルスクリプトが含まれています。

## インストール

グローバルコマンドを作成するためにインストールスクリプトを実行：

```bash
./scripts/install-marp-cli.sh
```

これにより：
1. `/usr/local/bin`または`~/.local/bin`にシンボリックリンクを作成
2. 必要に応じてディレクトリをPATHに追加
3. 追加ツール（marp-quick、marp-ai）をインストール（要求された場合）

## メインCLIツール：`marp`

`marp`コマンドは、すべてのプレゼンテーションタスクの包括的なインターフェースを提供します。

### コマンド

#### `marp new [name]`
インタラクティブに新しいプレゼンテーションを作成。

```bash
marp new "第4四半期売上レビュー"
```

機能：
- タイトル、テーマ、テンプレートのインタラクティブなプロンプト
- オプションの日付プレフィックス付き自動ファイル名生成
- 作成後にデフォルトエディタで開く

#### `marp build <file> [--pdf]`
プレゼンテーションをHTMLおよびオプションでPDFにビルド。

```bash
marp build src/presentations/my_slides.md
marp build src/presentations/my_slides.md --pdf
```

#### `marp watch [file]`
変更を監視して自動再ビルド。

```bash
marp watch  # すべてのファイルを監視
marp watch src/presentations/specific.md  # 特定のファイルを監視
```

#### `marp serve`
ライブリロード付きプレビューサーバーを起動。

```bash
marp serve
# サーバーはhttp://localhost:3000で起動
```

#### `marp dev`
開発モードを起動（watch + serveの組み合わせ）。

```bash
marp dev
```

#### `marp validate [file] [--all]`
デザインルールに対してプレゼンテーションを検証。

```bash
marp validate  # 現在のディレクトリ
marp validate src/presentations/my_slides.md  # 特定のファイル
marp validate --all  # すべてのプレゼンテーション
```

#### `marp list`
メタデータ付きですべてのプレゼンテーションをリスト。

```bash
marp list
# 出力:
# 📁 src/presentations/のプレゼンテーション:
#   • 20250718_quarterly_review.md (更新: 2025-07-18 14:30, サイズ: 2.1K)
#   • technical_overview.md (更新: 2025-07-17 09:15, サイズ: 3.5K)
```

#### `marp open <file>`
プレゼンテーションをビルドしてブラウザで開く。

```bash
marp open src/presentations/my_slides.md
```

#### `marp export <file>`
インタラクティブに複数の形式にエクスポート。

```bash
marp export src/presentations/my_slides.md
# HTML、PDF、オプションでPowerPointにエクスポート
```

#### `marp clean`
ビルドディレクトリをクリーン。

```bash
marp clean
```

## クイック作成ツール：`marp-quick`

クリップボード、入力、またはファイルから自動フォーマットでプレゼンテーションを作成。

### 使用方法

```bash
marp-quick
```

### 機能

1. **複数の入力ソース**：
   - クリップボード（任意のソースから貼り付け）
   - 直接入力/貼り付け
   - ファイル入力

2. **自動フォーマット**：
   - 6×6ルールを自動適用
   - 長い段落を箇条書きに変換
   - コンテンツを適切なスライドに分割
   - 適切なMarp構造を追加

3. **スマート変換**：
   - 見出しを検出してスライド区切りを作成
   - スライドごとの箇条書きを制限
   - 長い箇条書きを切り詰め

### ワークフロー例

1. ドキュメントやウェブページからテキストをコピー
2. `marp-quick`を実行
3. ソースとして「クリップボード」を選択
4. プレゼンテーションタイトルを入力
5. テーマを選択
6. フォーマットされたプレゼンテーションを自動生成

## AI統合ツール：`marp-ai`

AI支援を使用してプレゼンテーションを生成（Claude Codeまたは他のAIツールと連携）。

### 使用方法

```bash
marp-ai
```

### 機能

1. **プロンプト生成**：
   - AIツール用の詳細なプロンプトを作成
   - すべてのフォーマット要件を含む
   - プレゼンテーションタイプと構造を指定

2. **統合オプション**：
   - プロンプトをクリップボードにコピー
   - プロンプトをファイルに保存
   - AI応答を直接貼り付け
   - 組み込みテンプレートを使用

3. **プレゼンテーションタイプ**：
   - ビジネス/エグゼクティブ
   - 技術/開発者
   - 教育/トレーニング
   - セールス/マーケティング
   - 一般/情報提供

### Claude Codeとのワークフロー

1. `marp-ai`を実行
2. トピックを入力
3. プレゼンテーションタイプを選択
4. 「プロンプトをクリップボードにコピー」を選択
5. Claude Codeに貼り付け
6. AI応答をコピー
7. `marp-ai`を再度実行して応答を貼り付け

## 環境変数

スクリプトは以下の環境変数を尊重します：

- `EDITOR`：優先テキストエディタ（デフォルト：nano）
- `PORT`：プレビュー用サーバーポート（デフォルト：3000）

## ヒントとコツ

### エイリアス

より迅速なアクセスのためにシェル設定に追加：

```bash
alias mp='marp'
alias mpn='marp new'
alias mpd='marp dev'
alias mpb='marp build'
alias mpv='marp validate'
```

### Gitとの統合

プレゼンテーションを検証するpre-commitフックを作成：

```bash
#!/bin/bash
# .git/hooks/pre-commit
marp validate --all || exit 1
```

### バッチ操作

複数のプレゼンテーションを処理：

```bash
# すべてのプレゼンテーションをビルド
for file in src/presentations/*.md; do
    marp build "$file" --pdf
done

# 特定のパターンを検証
find src -name "*2025*.md" -exec marp validate {} \;
```

### カスタムテンプレート

`src/templates/`に独自のテンプレートを作成して使用：

```bash
cp src/templates/my_custom.md src/presentations/new_pres.md
marp build src/presentations/new_pres.md
```

## トラブルシューティング

### コマンドが見つからない

インストール後に`marp`コマンドが見つからない場合：

1. シンボリックリンクの存在を確認：
   ```bash
   ls -la /usr/local/bin/marp
   # または
   ls -la ~/.local/bin/marp
   ```

2. ディレクトリがPATHにあることを確認：
   ```bash
   echo $PATH
   ```

3. シェル設定をリロード：
   ```bash
   source ~/.bashrc  # または ~/.zshrc
   ```

### 権限の問題

権限エラーが発生した場合：

```bash
# 代わりにユーザーディレクトリを使用
mkdir -p ~/.local/bin
./scripts/install-marp-cli.sh
```

### スクリプトエラー

詳細な出力を表示するためにデバッグモードを有効化：

```bash
bash -x ./scripts/marp build src/presentations/test.md
```

## 高度な使用方法

### カスタムテーマ

任意のコマンドでカスタムテーマを使用：

```bash
marp new "私のプレゼンテーション" --theme custom/mytheme
```

### CI/CD統合

GitHub Actionsまたは他のCI/CDで使用：

```yaml
- name: プレゼンテーションを検証
  run: |
    npm install
    ./scripts/marp validate --all
    
- name: すべてのプレゼンテーションをビルド
  run: |
    ./scripts/marp build --all --pdf
```

### Docker使用

コンテナ化された使用のためのDockerfileを作成：

```dockerfile
FROM node:24.4.1
WORKDIR /app
COPY . .
RUN npm install
RUN chmod +x scripts/*
CMD ["./scripts/marp", "serve"]
```