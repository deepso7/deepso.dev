"use client";

import React from "react";
import Link from "next/link";

import { useWindowSize } from "usehooks-ts";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { width } = useWindowSize();

  const items = React.useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    []
  );

  const isMobile = width ? width < 768 : true;

  return (
    <nav className="flex flex-col align-stretch justify-center gap-5 border-b-zinc-800 md:flex-row md:items-center md:justify-between md:border-none md:py-4 mx-auto w-full text-zinc-100">
      <div className="flex flex-row justify-between md:hidden">
        <button
          className="cursor-pointer p-3 rounded-lg text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HamburgerMenuIcon />
        </button>
      </div>

      {(isOpen || !isMobile) && (
        <ul className="flex flex-col align-start gap-4 md:flex-row md:items-center md:gap-7">
          {items.map(({ label, href }) => (
            <li
              key={label}
              className="text-md font-normal leading-6 md:text-lg md:font-bold md:leading-7"
            >
              <Link href={href} className="animation-underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
