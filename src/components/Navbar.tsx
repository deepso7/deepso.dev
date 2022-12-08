import React from "react";
import Link from "next/link";

// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
// import { useRouter } from "next/router";

const Navbar = () => {
  // const router = useRouter();
  // const [isOpen, setIsOpen] = React.useState(false);

  const items = React.useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    []
  );

  // React.useEffect(() => {
  //   const handleClose = () => {
  //     setIsOpen(false);
  //   };

  //   router.events.on("routeChangeComplete", handleClose);
  // }, [router]);

  return (
    <nav className="flex flex-col align-stretch justify-center gap-5 border-b-zinc-800 md:flex-row md:items-center md:justify-between md:border-none md:py-4 mx-auto w-full text-zinc-100">
      {/* <div className="flex flex-row justify-between  md:hidden">
        <button
          className="cursor-pointer p-3 rounded-lg text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HamburgerMenuIcon />
        </button>
      </div> */}

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
    </nav>
  );
};

export default Navbar;
