import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

import { Github, Twitter } from "./Icons";

const ExternalLink: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const NavItem: FC<{ href: string; text: string }> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive ? "bg-[#1C1E24] text-[#E6E6E6]" : "text-[#A7A9AC] ",
          "rounded-lg px-4 py-2 transition-all hover:bg-[#282828]"
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
};

const NavObj = [
  { href: "/", text: "Home" },
  { href: "/blog", text: "Blog" },
  { href: "/snippet", text: "Snippet" },
];

const NavBar: FC = () => {
  return (
    <div className="bg-[#14141499]">
      <nav className="relative mx-auto flex w-full max-w-7xl  items-center justify-between py-3 px-8 md:py-8 md:px-16">
        <div className="flex items-center space-x-10">
          <h1 className="cursor-pointer font-rotterin text-4xl text-custom-sky1">
            Deepso.dev
          </h1>
          <ul className="mt-2 hidden gap-2 md:flex">
            {NavObj.map(item => (
              <li key={item.href}>
                <NavItem href={item.href} text={item.text} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <ExternalLink href="https://github.com/deepso7">
            <Github />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/deepso7">
            <Twitter />
          </ExternalLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
