# ねこねこ通信（Astro）

日記、分析、翻訳、研究、小説、系譜ノートをまとめて扱う個人サイトです。
`ねこねこ通信` と `ねこねこ研究所` を同じ Astro プロジェクト内で運用しています。

## 開発コマンド

| Command | 用途 |
| --- | --- |
| `npm install` | 依存関係のインストール |
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run preview` | ビルド結果のローカル確認 |

## コンテンツ構成

### Collections

- `src/content/posts`: 通信本体の記事。雑記や分析などを含む
- `src/content/translation`: 翻訳
- `src/content/research`: 研究ノート
- `src/content/novel`: 小説・創作
- `src/content/genealogy`: 系譜ノート

共通 frontmatter のスキーマは `src/content/config.ts` で定義しています。

### Templates

テンプレートは collection の外に置いています。

- `src/templates/content/posts.md`
- `src/templates/content/translation.md`
- `src/templates/content/research.md`
- `src/templates/content/novel.md`

新規作成時はこれらを複製して使います。

## 主要ページ

- `src/pages/index.astro`: 通信トップ。記事と `board.json` を月単位のタイムラインとして表示
- `src/pages/all.astro`: 記事一覧
- `src/pages/search.astro`: 全 collection 横断検索
- `src/pages/study/index.astro`: 研究所トップ。翻訳と研究を束ねて表示
- `src/pages/date/[ymd].astro`: 実際に記事・ボード・記念日がある日だけ生成する日付ページ

## 主要データ

### `src/data/board.json`

トップと日付ページに出す短文ログ。

```json
[
  {
    "date": "2026-03-22",
    "comment": "今日は天気が穏やか。窓を開けると、外から線香が匂う。"
  }
]
```

### `src/data/memorials.json`

日付ページの記念日表示用。

```json
[
  { "date": "02-12", "title": "毎年の記念日" },
  { "date": "2026-02-18", "title": "単発の記念日" }
]
```

### その他の JSON

- `src/data/plans.json`: 計画メモ
- `src/data/music-board.json`
- `src/data/study-board.json`
- `src/data/novel-board.json`
- `src/data/genealogy-board.json`
- `src/data/literature-philosophy-board.json`

用途が増えたら、対応ページ側の参照箇所も合わせて更新します。

## 日付フォーマット規約

- 厳密日付: `YYYY-MM-DD`
- 年次繰り返し: `MM-DD`

`board.json` と各 collection の `date` は、原則として `YYYY-MM-DD` を使う前提です。
