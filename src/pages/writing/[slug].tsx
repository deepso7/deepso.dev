import { PageProps } from "waku/router";

import { getPostPaths } from "@/lib/get-file";

export default async function WritingPage({
  slug,
}: PageProps<"/writing/[slug]">) {
  console.log({ slug });

  return <div>Writing Page</div>;
}

export const getConfig = async () => {
  const blogPaths = await getPostPaths("./private/writing");

  console.log({ blogPaths });

  return {
    render: "static",
    staticPaths: ["hi"],
  } as const;
};
