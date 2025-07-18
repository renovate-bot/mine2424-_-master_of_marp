# Master of Marp

**究極のMarpプレゼンテーションフレームワーク**

[English Version](../../README.md)

モダンなプレゼンテーションデザインガイドライン（2025年版）に従った包括的なMarpプレゼンテーションテンプレートシステムです。複数のソースからのベストプラクティスと厳格なデザインルールを組み合わせ、プロフェッショナルでアクセシブル、視覚的に魅力的なプレゼンテーションを作成します。

## 特徴

- 🎨 **複数のテーマ**: Base、Minimal、Vibrant、Startupテーマ
- 📐 **2025年デザインガイドライン**: 6×6ルールとモダンなタイポグラフィ基準を実装
- 🤖 **Claude Code統合**: AI支援スライド作成のためのカスタムコマンドとルール
- 🛠️ **ユーティリティスクリプト**: ビルド、ウォッチ、サーブ、検証など
- 📱 **レスポンシブデザイン**: 16:9ワイドスクリーン形式に最適化
- 🌏 **国際化対応**: 完全な日本語フォントサポート
- ✅ **検証ツール**: プレゼンテーションがベストプラクティスに従っていることを確認
- 🚀 **スタートアップピッチ対応**: 投資家向けデッキ用の専門テンプレートと検証

## クイックスタート

### 前提条件

- Node.js 24.4.1以上
- pnpm（推奨）またはnpm

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd master_of_marp

# 依存関係をインストール
pnpm install
```

### 最初のプレゼンテーションを作成

```bash
# インタラクティブなプレゼンテーション作成ツール
npm run new

# または手動でsrc/presentations/に作成
cp src/templates/basic.md src/presentations/my_presentation.md

# スタートアップピッチの場合
./scripts/marp-startup new simple
```

### ビルドとプレビュー

```bash
# 単一のプレゼンテーションをビルド
npm run build src/presentations/my_presentation.md

# 変更を監視して自動再ビルド
npm run watch

# ライブリロード付き開発サーバーを起動
npm run dev

# すべてのプレゼンテーションをビルド
npm run build:all
```

## プロジェクト構造

```
master_of_marp/
├── .github/workflows/    # CI/CD自動化
├── scripts/             # ビルドとユーティリティスクリプト
├── src/                 # ソースファイル
│   ├── templates/       # プレゼンテーションテンプレート
│   └── presentations/   # あなたのプレゼンテーション
├── themes/              # CSSテーマ
│   ├── base/           # デフォルトテーマ
│   └── custom/         # 追加テーマ
├── assets/             # 画像、フォント、アイコン
├── config/             # 設定ファイル
├── docs/               # ドキュメント
└── .claude/            # Claude Codeルールとコマンド
```

## デザインガイドライン

### 6×6ルール
- スライドあたり最大6つの箇条書き
- 箇条書きあたり最大6単語
- 明確性と可読性を促進

### タイポグラフィ基準
- 見出し：最小40pt
- コンテンツ：最小28pt（24pt未満は禁止）
- フォントは最大2-3種類に制限

### コンテンツ原則
- スライドごとに1つの主要なアイデア
- 戦略的な余白の使用
- 完全な文章よりキーワード
- 関連するテキストの近くに画像を配置

## 利用可能なテーマ

### Baseテーマ
プロフェッショナルなスタイリング、最適化された間隔、包括的なユーティリティクラスを持つデフォルトテーマ。

```yaml
theme: base
```

### Minimalテーマ
控えめなスタイリングでコンテンツに焦点を当てたクリーンでミニマリストなデザイン。

```yaml
theme: minimal
```

### Vibrantテーマ
ダイナミックなプレゼンテーションのためのカラフルでグラデーション豊かなテーマ。

```yaml
theme: vibrant
```

### Startupテーマ
投資家向けピッチデッキ専用テーマ。56pt最小フォントサイズとピッチ特有のコンポーネント。

```yaml
theme: startup
```

## スクリプトとコマンド

### シェルスクリプト（ターミナルツール）

グローバルCLIアクセスをインストール：
```bash
./scripts/install-marp-cli.sh
```

インストール後、どこからでも以下のコマンドを使用可能：

- `marp new [name]` - 新しいプレゼンテーションを作成
- `marp build <file>` - HTML/PDFにビルド
- `marp watch` - 自動再ビルド
- `marp serve` - プレビューサーバー起動
- `marp dev` - 開発モード（watch + serve）
- `marp validate` - プレゼンテーションを検証
- `marp list` - 全プレゼンテーションをリスト
- `marp open <file>` - ブラウザで開く
- `marp clean` - ビルドディレクトリをクリーン
- `marp-quick` - クリップボード/入力からプレゼンテーションを作成
- `marp-ai` - AI支援プレゼンテーション生成ツール
- `marp-startup` - スタートアップピッチデッキ作成・検証ツール

### NPMスクリプト
- `npm run build <file>` - 単一のプレゼンテーションをビルド
- `npm run build:all` - すべてのプレゼンテーションをビルド
- `npm run export:pdf` - PDFにエクスポート
- `npm run export:pptx` - PowerPointにエクスポート

### 開発
- `npm run watch` - ファイル変更を監視
- `npm run serve` - プレビューサーバーを起動
- `npm run dev` - ウォッチ + サーブ（開発モード）

### ユーティリティ
- `npm run new` - インタラクティブに新しいプレゼンテーションを作成
- `npm run validate` - ルールに対してプレゼンテーションを検証
- `npm run optimize:images` - assets/内の画像を最適化

## Claude Code統合

このテンプレートには、AI支援プレゼンテーション作成のためのClaude Codeとの特別な統合が含まれています。

### カスタムコマンド

- `/marp-new` - 新しいプレゼンテーションを作成
- `/marp-slide` - 単一のスライドを生成
- `/marp-validate` - プレゼンテーションを検証
- `/marp-convert` - コンテンツをMarp形式に変換

### ルールファイル

`.claude/CLAUDE.md`ファイルには、プレゼンテーションの作成や編集時にClaude Codeが従うべき包括的なルールが含まれています。

## 高度な機能

### コンテナコンポーネント

```markdown
::: note
重要な情報をハイライト
:::

::: alert info
スタイリング付き情報アラート
:::

::: columns
::: column
左カラムのコンテンツ
:::
::: column
右カラムのコンテンツ
:::
:::
```

### 特殊なスライドクラス

```markdown
<!-- _class: title -->
# タイトルスライド

<!-- _class: section -->
# セクション区切り

<!-- _class: dark -->
# ダークテーマスライド
```

## 検証

ベストプラクティスに従っているか確認するために検証を実行：

```bash
npm run validate

# 自動修正付き
npm run validate -- --fix
```

## 貢献

貢献を歓迎します！以下を確認してください：
1. 既存のコードスタイルに従う
2. 新機能のテストを追加
3. ドキュメントを更新
4. 提出前に検証を実行

## ライセンス

MITライセンス - 詳細はLICENSEファイルを参照

## リソース

- [Marp公式ドキュメント](https://marp.app/)
- [プレゼンテーションデザインガイドライン](design-guidelines.md)
- [スタートアップピッチガイド](startup-guide.md)
- [Claude Codeルール](../../.claude/CLAUDE.md)
- [スタートアップピッチルール](../../.claude/CLAUDE_STARTUP.md)
- [シェルスクリプトドキュメント](shell-scripts.md)