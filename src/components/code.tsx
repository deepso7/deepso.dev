import { createHighlighter, Highlighter, BundledLanguage } from "shiki";

type CodeProps = {
  code: string;
  className?: string;
  lang?: string;
};

let highlighter: Highlighter | undefined = undefined;

const getHighlighter = async () => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["vitesse-dark", "vitesse-light"],
      langs: [],
    });
  }

  return highlighter;
};

export const Code = async ({ code, className, ...rest }: CodeProps) => {
  const lang = className?.split("language-")[1];

  if (!lang) throw new Error("No language detected");

  (await getHighlighter()).loadLanguage(lang as BundledLanguage);

  const html = (await getHighlighter()).codeToHtml(code, {
    lang,
    theme: "vitesse-dark",
  });

  return (
    <div
      className="my-6 overflow-x-auto rounded-lg border border-border [&_pre]:p-4 font-mono text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
};
