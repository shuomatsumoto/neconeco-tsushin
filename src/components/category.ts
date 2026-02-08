export type Category = "しんぶん" | "自然と科学" | "文化と芸術" | "せいかつ" | "研究室" | "雑記";

export const categoryMeta: Record<Category, { slug: string; icon: string }> = {
  "しんぶん": { slug: "shimbun", icon: "📰" },
  "自然と科学": { slug: "science", icon: "🪴" },
  "文化と芸術": { slug: "culture", icon: "🎞️" },
  "せいかつ": { slug: "life", icon: "🍲" },
  "研究室": { slug: "lab", icon: "📎" },
  "雑記": { slug: "zatsuki", icon: "✍️" },
};

export function toYMD(dateStr: string) {
  return dateStr;
}
