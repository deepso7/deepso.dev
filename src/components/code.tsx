import { createHighlighter, Highlighter } from "shiki";

type CodeProps = {
  code: string;
};

let highlighter: Highlighter | undefined = undefined;

const getHighlighter = async () => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["vitesse-dark", "vitesse-light"],
      langs: ["javascript", "typescript"],
    });
  }

  return highlighter;
};

export const Code = async ({ code, ...rest }: CodeProps) => {
  const html = (await getHighlighter()).codeToHtml(code, {
    lang: "typescript",
    theme: "vitesse-dark",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
};
