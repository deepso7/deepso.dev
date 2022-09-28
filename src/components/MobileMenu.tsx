import { FC, Fragment, ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import cn from "classnames";

import { NavObj } from "./NavBar";
import styles from "styles/mobile-menu.module.css";

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={cn(
            styles.burger,
            "inline-flex justify-center rounded-md border border-zinc-700 text-sm font-medium shadow-sm  transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#F6F6F6] focus:ring-offset-2 focus:ring-offset-gray-100"
          )}
          aria-label="menu"
        >
          {({ open }) => (
            <>
              <MenuIcon data-hide={open} />
              <CrossIcon data-hide={!open} />
            </>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-zinc-700 rounded-md border border-zinc-700 bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {NavObj.map(item => (
              <DropdownMenuItem
                href={item.href}
                disabled={item.disabled}
                key={item.text}
              >
                {item.text}
              </DropdownMenuItem>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

type Props = {
  href: string;
  disabled?: boolean;
  children: ReactNode;
};

const DropdownMenuItem: FC<Props> = ({ href, disabled = false, children }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Menu.Item disabled={disabled}>
      <Link href={href}>
        <a
          className={cn(
            active ? "bg-orange-200 dark:bg-zinc-700" : "",
            "block px-4 py-2 text-sm text-[#F6F6F6]"
          )}
        >
          {children}
        </a>
      </Link>
    </Menu.Item>
  );
};

const MenuIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-900 dark:text-gray-100"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        d="M3.02637 6.10352C2.47437 6.10352 2.02637 6.55152 2.02637 7.10352C2.02637 7.65552 2.47437 8.10352 3.02637 8.10352H21.0264C21.5784 8.10352 22.0264 7.65552 22.0264 7.10352C22.0264 6.55152 21.5784 6.10352 21.0264 6.10352H3.02637ZM3.02637 11.1035C2.47437 11.1035 2.02637 11.5515 2.02637 12.1035C2.02637 12.6555 2.47437 13.1035 3.02637 13.1035H21.0264C21.5784 13.1035 22.0264 12.6555 22.0264 12.1035C22.0264 11.5515 21.5784 11.1035 21.0264 11.1035H3.02637ZM3.02637 16.1035C2.47437 16.1035 2.02637 16.5515 2.02637 17.1035C2.02637 17.6555 2.47437 18.1035 3.02637 18.1035H21.0264C21.5784 18.1035 22.0264 17.6555 22.0264 17.1035C22.0264 16.5515 21.5784 16.1035 21.0264 16.1035H3.02637Z"
        fill="#D1D2D3"
      />
    </svg>
  );
};

const CrossIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default MobileMenu;
