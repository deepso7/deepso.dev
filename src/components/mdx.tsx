import { Link } from "waku";

import { getAnchor } from "@/lib/get-anchor";

import { Code } from "./code";

export const components = {
  h1: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h1
        id={id}
        className="text-4xl font-bold mt-8 mb-4 text-foreground scroll-mt-20"
        {...rest}
      >
        <a href={`#${id}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </h1>
    );
  },
  h2: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h2
        id={id}
        className="text-3xl font-bold mt-8 mb-4 text-foreground scroll-mt-20"
        {...rest}
      >
        <a href={`#${id}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h3
        id={id}
        className="text-2xl font-semibold mt-6 mb-3 text-foreground scroll-mt-20"
        {...rest}
      >
        <a href={`#${id}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </h3>
    );
  },
  h4: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h4
        id={id}
        className="text-xl font-semibold mt-4 mb-2 text-foreground scroll-mt-20"
        {...rest}
      >
        <a href={`#${id}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </h4>
    );
  },
  h5: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h5
        id={id}
        className="text-lg font-semibold mt-4 mb-2 text-foreground scroll-mt-20"
        {...rest}
      >
        <a href={`#${id}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </h5>
    );
  },
  h6: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h6
        id={id}
        className="text-base font-semibold mt-4 mb-2 text-foreground scroll-mt-20"
        {...rest}
      >
        <a href={`#${id}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </h6>
    );
  },
  p: ({ children, ...rest }: any) => {
    return (
      <p className="my-4 text-foreground leading-7" {...rest}>
        {children}
      </p>
    );
  },
  strong: ({ children, ...rest }: any) => {
    return (
      <strong className="font-semibold text-foreground" {...rest}>
        {children}
      </strong>
    );
  },
  em: ({ children, ...rest }: any) => {
    return (
      <em className="italic text-foreground" {...rest}>
        {children}
      </em>
    );
  },
  a: ({ href, children, ...rest }: any) => {
    const classNames =
      "text-primary hover:text-primary/80 underline underline-offset-4 transition-colors";

    if (href.startsWith("/")) {
      return (
        <Link to={href} className={classNames} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...rest }: any) => {
    return (
      <ul className="my-4 ml-6 list-disc [&>li]:mt-2 text-foreground" {...rest}>
        {children}
      </ul>
    );
  },
  ol: ({ children, ...rest }: any) => {
    return (
      <ol
        className="my-4 ml-6 list-decimal [&>li]:mt-2 text-foreground"
        {...rest}
      >
        {children}
      </ol>
    );
  },
  li: ({ children, ...rest }: any) => {
    return (
      <li className="leading-7" {...rest}>
        {children}
      </li>
    );
  },
  code: ({ children, ...rest }: any) => {
    return (
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium text-foreground"
        {...rest}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...rest }: any) => {
    const code = children?.props?.children || "";
    const className = children?.props?.className || "";

    return <Code code={code} className={className} {...rest} />;
  },
  blockquote: ({ children, ...rest }: any) => {
    return (
      <div className="my-4">
        <blockquote
          className="border-l-4 border-primary bg-muted/50 py-4 px-6 rounded-r-lg"
          {...rest}
        >
          <div className="mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="64px"
              height="64px"
              className="size-4 fill-current text-primary"
            >
              <path d="M 64 6 C 32 6 6 32 6 64 C 6 96 32 122 64 122 C 96 122 122 96 122 64 C 122 32 96 6 64 6 z M 64 12 C 92.7 12 116 35.3 116 64 C 116 92.7 92.7 116 64 116 C 35.3 116 12 92.7 12 64 C 12 35.3 35.3 12 64 12 z M 64 30 A 9 9 0 0 0 64 48 A 9 9 0 0 0 64 30 z M 64 59 C 59 59 55 63 55 68 L 55 92 C 55 97 59 101 64 101 C 69 101 73 97 73 92 L 73 68 C 73 63 69 59 64 59 z" />
            </svg>
            <div className="font-semibold text-foreground">Note</div>
          </div>
          <div className="text-muted-foreground *:my-2 [&>*:last-child]:mb-0">
            {children}
          </div>
        </blockquote>
      </div>
    );
  },
  hr: () => {
    return <hr className="my-8 border-border" />;
  },
  table: ({ children, ...rest }: any) => {
    return (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full border-collapse" {...rest}>
          {children}
        </table>
      </div>
    );
  },
  thead: ({ children, ...rest }: any) => {
    return (
      <thead className="border-b border-border" {...rest}>
        {children}
      </thead>
    );
  },
  tbody: ({ children, ...rest }: any) => {
    return (
      <tbody className="[&>tr:last-child]:border-0" {...rest}>
        {children}
      </tbody>
    );
  },
  tr: ({ children, ...rest }: any) => {
    return (
      <tr
        className="border-b border-border transition-colors hover:bg-muted/50"
        {...rest}
      >
        {children}
      </tr>
    );
  },
  th: ({ children, ...rest }: any) => {
    return (
      <th
        className="h-12 px-4 text-left align-middle font-semibold text-foreground [&:has([role=checkbox])]:pr-0"
        {...rest}
      >
        {children}
      </th>
    );
  },
  td: ({ children, ...rest }: any) => {
    return (
      <td
        className="p-4 align-middle text-foreground [&:has([role=checkbox])]:pr-0"
        {...rest}
      >
        {children}
      </td>
    );
  },
  img: ({ src, alt, ...rest }: any) => {
    return (
      <img
        src={src}
        alt={alt}
        className="my-6 rounded-lg border border-border"
        {...rest}
      />
    );
  },
  sup: ({ children, ...rest }: any) => {
    return (
      <sup className="text-xs" {...rest}>
        {children}
      </sup>
    );
  },
  sub: ({ children, ...rest }: any) => {
    return (
      <sub className="text-xs" {...rest}>
        {children}
      </sub>
    );
  },
  del: ({ children, ...rest }: any) => {
    return (
      <del className="line-through text-muted-foreground" {...rest}>
        {children}
      </del>
    );
  },
  ins: ({ children, ...rest }: any) => {
    return (
      <ins className="underline decoration-primary" {...rest}>
        {children}
      </ins>
    );
  },
  mark: ({ children, ...rest }: any) => {
    return (
      <mark className="bg-accent text-accent-foreground rounded px-1" {...rest}>
        {children}
      </mark>
    );
  },
  kbd: ({ children, ...rest }: any) => {
    return (
      <kbd
        className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground"
        {...rest}
      >
        {children}
      </kbd>
    );
  },
};
