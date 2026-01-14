import { MDXContent } from "@content-collections/mdx/react";
import { allWritings } from "content-collections";
import { Link } from "waku";
import { PageProps } from "waku/router";

import { components } from "@/components/mdx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "@/components/ui/home";

export default async function WritingPage({
  slug,
}: PageProps<"/writing/[slug]">) {
  const writing = allWritings.find((data) => data.slug === slug);

  if (!writing) return <div>Not Found</div>;

  return (
    <>
      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={
                <Link to="/">
                  <HomeIcon size={16} />
                </Link>
              }
            />
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{writing.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="w-full max-w-none">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            {writing.title}
          </h1>
          {writing.description && (
            <p className="text-lg text-muted-foreground">
              {writing.description}
            </p>
          )}
          {writing.date && (
            <time className="text-sm text-muted-foreground">
              {new Date(writing.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>
        <div className="prose prose-lg max-w-none">
          <MDXContent code={writing.mdx} components={components} />
        </div>
      </article>
    </>
  );
}

export const getConfig = async () => {
  const paths = allWritings.map((data) => data.slug);

  return {
    render: "static",
    staticPaths: paths,
  } as const;
};
