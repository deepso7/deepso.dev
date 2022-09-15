import { FC } from "react";

const NavBar: FC = () => {
  return (
    <nav className="relative mx-auto flex w-full max-w-full items-center gap-10 bg-[#14141499] py-8 px-16">
      <h1 className="font-rotterin text-4xl text-custom-sky1">Deepso.dev</h1>
      <ul className="mt-2 flex gap-6">
        <li className="font-inter text-sm text-custom-sky1">Home</li>
        <li className="font-inter text-sm text-custom-sky1">Blogs</li>
        <li className="font-inter text-sm text-custom-sky1">Snippets</li>
        <li className="font-inter text-sm text-custom-sky1">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
