import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
  customMeta?: Record<string, string>;
}

const Container: FC<Props> = ({ children, customMeta }) => {
  const router = useRouter();

  const meta: Record<string, string> = {
    title: "Deepso - Developer, Engineer, Otaku.",
    description: `Full Stack developer, Cyber Security enthusiast.`,
    image: "https://deepso.dev/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://deepso.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://deepso.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Deepso.dev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@deepso7" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <NavBar />
      <main className="min-h-screen bg-custom-black">
        <div className="mx-auto max-w-4xl px-6 py-6 md:py-14">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Container;
