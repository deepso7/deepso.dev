import { createHighlighter, Highlighter, BundledLanguage } from "shiki";

import { CopyButton } from "./code-copy-button";

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

  const highlighter = await getHighlighter();

  await highlighter.loadLanguage(lang as BundledLanguage);

  const html = highlighter.codeToHtml(code, {
    lang,
    theme: "vitesse-dark",
  });

  return (
    <div
      className="group relative my-6 overflow-x-auto rounded-lg border border-border font-mono text-sm [&_pre]:p-4"
      {...rest}
    >
      <CopyButton code={code} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
