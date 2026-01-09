import { allWritings } from "content-collections";
import { PageProps } from "waku/router";

export default async function WritingPage({
  slug,
}: PageProps<"/writing/[slug]">) {
  const writing = allWritings.find((data) => data.slug === slug);

  if (!writing) return <div>Not Found</div>;

  return (
    <div>
      <h1>{writing.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: writing.content }} />
    </div>
  );
}

export const getConfig = async () => {
  const paths = allWritings.map((data) => data.slug);

  return {
    render: "static",
    staticPaths: paths,
  } as const;
};
