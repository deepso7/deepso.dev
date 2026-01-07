import { compile } from "@mdx-js/mdx";
import { readdir, readFile } from "node:fs/promises";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export const getPostPaths = async (folder: string) => {
  const blogPaths: Array<string> = [];
  const blogFileNames: Array<string> = [];

  const mdxFiles = await readdir(folder);

  mdxFiles.forEach((fileName) => {
    if (fileName.endsWith(".mdx")) {
      blogFileNames.push(fileName);
    }
  });

  console.log({ blogFileNames });

  for await (const fileName of blogFileNames) {
    const path = `${folder}/${fileName}`;
    const source = await readFile(path, "utf8");
    const mdx = await compile(source, {
      jsx: true,
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    });

    console.log({ mdx, val: mdx.value });
    // const frontmatter = mdx.frontmatter as { slug: string };
    // blogPaths.push(frontmatter.slug);
  }

  return blogPaths;
};
