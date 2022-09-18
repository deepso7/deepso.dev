import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "styles/mobile-menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "absolute flex flex-col bg-gray-100 dark:bg-gray-900",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/">
              <a className="ml-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/snippet">
              <a className="flex w-auto pb-4">Snippet</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/contact">
              <a className="flex w-auto pb-4">Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
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
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
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
}
