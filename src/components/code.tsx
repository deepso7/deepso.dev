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
      langs: ["javascript", "typescript", "rust"],
    });
  }

  return highlighter;
};

const detectLanguage = (className?: string, code?: string): BundledLanguage => {
  if (className) {
    const match = className.match(/language-(\w+)/);
    if (match) {
      const lang = match[1];
      if (lang === "rust") return "rust";
      if (lang === "javascript" || lang === "js") return "javascript";
      return "typescript";
    }
  }

  if (code) {
    if (
      code.includes("fn ") ||
      code.includes("impl ") ||
      code.includes("pub struct")
    )
      return "rust";
    if (
      code.includes("interface ") ||
      (code.includes(": ") && code.includes("=>"))
    )
      return "typescript";
  }

  return "typescript";
};

export const Code = async ({ code, className, lang, ...rest }: CodeProps) => {
  const detectedLang = lang || detectLanguage(className, code);

  const html = (await getHighlighter()).codeToHtml(code, {
    lang: detectedLang,
    themes: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  });

  return (
    <div
      className={`my-6 overflow-x-auto rounded-lg border border-border bg-muted/50 dark:bg-card [&_pre]:m-0 [&_pre]:py-3 [&_pre]:px-4 [&_pre]:bg-transparent [&_pre]:text-[0.8125rem] [&_pre]:leading-[1.5] [&_code]:font-mono [&_code]:text-[0.8125rem] [&_code]:leading-[1.5] ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
};
