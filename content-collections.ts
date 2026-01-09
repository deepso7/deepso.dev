import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { z } from "zod";

const writing = defineCollection({
  name: "writing",
  directory: "src/writing",
  include: "**/*.mdx",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    });

    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [writing],
});
