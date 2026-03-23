export type StudySeriesMeta = {
  slug: string;
  title: string;
  summary: string;
  thumbnail?: string;
  startedAt?: string;
  nextUpdate?: string;
  status?: "planned" | "ongoing" | "completed";
  concept: {
    title: string;
    summary: string;
    body: string[];
    plans?: string[];
  };
};

export const studySeriesList: StudySeriesMeta[] = [
  {
    slug: "japanese-feminist-literature",
    title: "日本のフェミニズム文学",
    summary:
      "日本のフェミニズム文学について、その潮流と展開を分析しつつ追う。",
    thumbnail: "/images/thumbs/plate.jpg",
    startedAt: "2026-03-23",
    nextUpdate: "2026-04-20",
    status: "on-going",
    concept: {
      title: "構想書",
      summary:
        "日本語圏のフェミニズム文学を、作品読解、翻訳、周辺資料の検討を通じて、複数のセリーとして組み立てていく。",
      body: [
        "この研究シリーズでは、日本語圏のフェミニズム文学を一つの固定的な流派としてではなく、時代ごとの争点や文体の差異を含んだ運動として追う。",
        "批評だけでなく、翻訳、引用、創作的応答もセリーに含め、読むことと書くことの往復運動そのものを研究の形式にする。",
      ],
      plans: [
        "最初期に扱う作家・作品群を仮決定する",
        "読解セリーと翻訳セリーの往復の仕方を決める",
        "研究の節目ごとに中間整理のセリーを書く",
      ],
    },
  },
];

export const studySeriesMap = new Map(
  studySeriesList.map((series) => [series.slug, series] as const)
);
