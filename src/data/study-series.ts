export type StudySeriesMeta = {
  slug: string;
  title: string;
  summary: string;
  thumbnail?: string;
  startedAt?: string;
  nextUpdate?: string;
  status?: "planned" | "ongoing" | "completed";
};

export const studySeriesList: StudySeriesMeta[] = [
  {
    slug: "japanese-feminist-literature",
    title: "日本のフェミニズム文学",
    summary:
      "日本のフェミニズム文学について、その潮流と展開を分析しつつ追う。",
    thumbnail: "/images/thumbs/purple.jpg",
    startedAt: "2026-03-23",
    nextUpdate: "2026-04-20",
    status: "ongoing",
  },
];

export const studySeriesMap = new Map(
  studySeriesList.map((series) => [series.slug, series] as const)
);
