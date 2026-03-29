import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const novels = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/novels" }),
  schema: z.object({
    title: z.string(),           // 章タイトル
    workTitle: z.string(),       // 作品タイトル
    workSlug: z.string(),        // 作品スラッグ (URLに使用)
    chapterNumber: z.number(),   // 章番号
    synopsis: z.string().optional(), // あらすじ (第1章のみ)
    genre: z.array(z.string()).optional(),
    publishedAt: z.coerce.date(),
    status: z.enum(["complete", "wip"]).default("complete"),
    featured: z.boolean().optional().default(false), // 注目作品フラグ（第1章のみに付与）
  }),
});

export const collections = { novels };
