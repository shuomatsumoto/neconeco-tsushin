import { defineCollection, z } from "astro:content";

const entrySchema = z.object({
  title: z.string(),
  summary: z.string().max(200).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  kind: z.enum(["article", "note"]).optional(),
  category: z.string().min(1).optional(),
  series: z.string().min(1).optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  locked: z.boolean().default(false),
  lockPasscode: z.string().min(1).optional(),
  thumbnail: z.string().optional(),
  supportUrl: z.string().url().nullable().optional(),
  translationAuthor: z.string().min(1).optional(),
  originalAuthor: z.string().min(1).optional(),
  sourceTitle: z.string().min(1).optional(),
  sourceUrl: z.string().url().optional(),
  sourceNote: z.string().min(1).optional(),
});

const post = defineCollection({
  type: "content",
  schema: entrySchema,
});

const translation = defineCollection({
  type: "content",
  schema: entrySchema,
});

const research = defineCollection({
  type: "content",
  schema: entrySchema,
});

const novel = defineCollection({
  type: "content",
  schema: entrySchema,
});

export const collections = {
  posts: post,
  translation,
  research,
  novel,
};
