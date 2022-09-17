import React, { FC, ReactNode } from "react";
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

const NavBar: FC = () => {
  return (
    <div className="bg-[#14141499]">
      <nav className="relative mx-auto flex w-full max-w-7xl  items-center justify-between py-3 px-8 md:py-8 md:px-16">
        <div className="flex items-center space-x-10">
          <h1 className="cursor-pointer font-rotterin text-4xl text-custom-sky1">
            Deepso.dev
          </h1>
          <ul className="mt-2 hidden gap-6 md:flex">
            <li className="cursor-pointer font-inter text-sm text-custom-sky1">
              Home
            </li>
            <li className="cursor-pointer font-inter text-sm text-custom-sky1">
              Blogs
            </li>
            <li className="cursor-pointer font-inter text-sm text-custom-sky1">
              Snippets
            </li>
            <li className="cursor-pointer font-inter text-sm text-custom-sky1">
              Contact
            </li>
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
