import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => (
  <div className="">
    <NavBar />
    <div className="mx-auto max-w-4xl px-6 md:py-14">
      <h1 className="bg-gradient-to-r from-[#FFDBFB] via-[#B28DFF] to-[#AEC0FF] bg-clip-text font-rotterin text-4xl text-transparent md:text-7xl">
        Deepanshu Singh
      </h1>
      <h2 className="py-3 text-sm md:px-2 md:text-xl">
        <span className="text-[#D1D2D3]">Lead Developer at </span>
        <span className="font-extrabold text-[#E6E6E6]">
          <a href="https://huddle01.com/" target="_blank">
            Huddle01
          </a>
        </span>
      </h2>
    </div>
  </div>
);

export default Home;
