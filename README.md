# ねこねこ通信（Astro）

## 開発コマンド

| Command | 用途 |
| --- | --- |
| `npm install` | 依存関係のインストール |
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run preview` | ビルド結果のローカル確認 |

## 主要構成

- `src/pages/index.astro`: トップページ（記事ブロック、カレンダー、ニュース/お知らせ/予定）
- `src/components/HomeArticleBlock.astro`: トップ記事ブロック（先頭1件 + 残りグリッド）
- `src/components/Calendar.astro`: カレンダー表示
- `src/components/NoticeList.astro`: ニュース/お知らせ/予定の共通表示
- `src/styles/global.css`: 共通スタイル（カード系プリミティブ含む）
- `src/pages/date/[ymd].astro`: 日付ページ

## データ運用ルール（JSON）

### `src/data/news.json`
- 用途: トップの「ニュース」、日付ページの「ニュース」
- 形式:
```json
[
  { "date": "2026-02-18", "title": "..." }
]
```

### `src/data/notices.json`
- 用途: トップの「お知らせ」
- 形式:
```json
[
  { "date": "2026-02-18", "title": "...", "href": "https://..." }
]
```

### `src/data/schedules.json`
- 用途: トップの「予定」
- 形式:
```json
[
  { "date": "3月中旬", "title": "..." }
]
```

### `src/data/memorials.json`
- 用途: カレンダー上の記念日マーク、日付ページの「記念日」
- 形式:
```json
[
  { "date": "02-12", "title": "毎年の記念日" },
  { "date": "2026-02-18", "title": "単発の記念日" }
]
```

## 日付フォーマット規約

- 厳密日付: `YYYY-MM-DD`
  - 例: `2026-02-18`
- 年次繰り返し（記念日専用）: `MM-DD`
  - 例: `02-12`
- 予定は自由記述可
  - 例: `3月中旬`, `未定`

## 表示ロジックの注意

- `NoticeList` の `recentDays` を指定すると、`YYYY-MM-DD` の項目のみが「直近N日」で表示される。
- 現在、トップのニュース/お知らせは `recentDays={7}`。
- 予定（自由記述日付）は `recentDays` を使わない運用を推奨。
