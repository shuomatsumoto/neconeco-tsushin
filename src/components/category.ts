export type Category = "雑記" | "分析" | "創作" | "紹介";

export const categoryMeta: Record<Category, { slug: string; icon: string }> = {
  雑記: { slug: "zatsuki", icon: "🗒️" },
  分析: { slug: "analysis", icon: "🪓" },
  創作: { slug: "creation", icon: "🪄" },
  紹介: { slug: "shokai", icon: "🗞️" },
};

export function toYMD(dateStr: string) {
  return dateStr;
}