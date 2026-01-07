import { Link } from "waku";

import { getAnchor } from "@/lib/get-anchor";

import { Code } from "./code";

export const components = {
  h2: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h2 id={id} className="" {...rest}>
        <a href={`#${id}`}>{children}</a>
      </h2>
    );
  },
  h3: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h3 id={id} className="" {...rest}>
        <a href={`#${id}`}>{children}</a>
      </h3>
    );
  },
  h4: ({ children, ...rest }: any) => {
    const id = getAnchor(children);

    return (
      <h4 id={id} className="" {...rest}>
        <a href={`#${id}`}>{children}</a>
      </h4>
    );
  },
  p: ({ children, ...rest }: any) => {
    return (
      <p className="" {...rest}>
        {children}
      </p>
    );
  },
  strong: ({ children, ...rest }: any) => {
    return (
      <b className="" {...rest}>
        {children}
      </b>
    );
  },
  em: ({ children, ...rest }: any) => {
    return (
      <i className="" {...rest}>
        {children}
      </i>
    );
  },
  a: ({ href, children, ...rest }: any) => {
    const classNames = "";

    if (href.startsWith("/")) {
      <Link to={href} className={classNames} {...rest}>
        {children}
      </Link>;
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
      <ul className="" {...rest}>
        {children}
      </ul>
    );
  },
  ol: ({ children, ...rest }: any) => {
    return (
      <ol className="" {...rest}>
        {children}
      </ol>
    );
  },
  code: ({ children, ...rest }: any) => {
    return (
      <span className="" {...rest}>
        {children}
      </span>
    );
  },
  pre: ({ children, ...rest }: any) => {
    return <Code code={children.props.children} className="" {...rest} />;
  },
  blockquote: ({ children, ...rest }: any) => {
    return (
      <div className="">
        <blockquote className="" {...rest}>
          <div className="mb-1 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="64px"
              height="64px"
              className="size-3.5 fill-current text-white"
            >
              <path d="M 64 6 C 32 6 6 32 6 64 C 6 96 32 122 64 122 C 96 122 122 96 122 64 C 122 32 96 6 64 6 z M 64 12 C 92.7 12 116 35.3 116 64 C 116 92.7 92.7 116 64 116 C 35.3 116 12 92.7 12 64 C 12 35.3 35.3 12 64 12 z M 64 30 A 9 9 0 0 0 64 48 A 9 9 0 0 0 64 30 z M 64 59 C 59 59 55 63 55 68 L 55 92 C 55 97 59 101 64 101 C 69 101 73 97 73 92 L 73 68 C 73 63 69 59 64 59 z" />
            </svg>
            <div className="">Note</div>
          </div>
          <div className="*:text-sm! *:text-white/60! last:*:mb-0! sm:*:text-base!">
            {children}
          </div>
        </blockquote>
      </div>
    );
  },
  hr: () => {
    return <hr className="" />;
  },
};
