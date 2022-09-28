import type { NextPage } from "next";
import NextImage from "next/future/image";

import Button from "../components/Button";
import Container from "../components/Container";
import FeatureCard from "../components/FeatureCard";
import SnippetCard from "../components/SnippetCard";
import Subscribe from "../components/Subscribe";

const Home: NextPage = () => (
  <Container>
    <div>
      <div className=" flex w-full flex-col-reverse items-start md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="max-w-xl">
          <h1 className="bg-gradient-to-r from-[#FFDBFB] via-[#B28DFF] to-[#AEC0FF] bg-clip-text pb-2 font-rotterin text-4xl text-transparent md:text-7xl">
            Deepanshu Singh
          </h1>
          <h2 className="py-1 text-sm md:px-2 md:text-xl">
            <span className="text-[#D1D2D3]">Lead Developer at </span>
            <span className="font-extrabold text-[#E6E6E6]">
              <a href="https://huddle01.com/" target="_blank">
                Huddle01
              </a>
            </span>
          </h2>
          <p className="text-sm text-[#D1D2D3] md:px-2 md:text-base">
            Experienced Back End Developer with a demonstrated history of
            working in the internet industry. Skilled in Back-End Web
            Development, Computer Security, Typescript, and Node.js. Strong
            engineering professional with pursuing Bachelor of Technology -
            BTech focused on Cyber/Computer Forensics and Counterterrorism from
            VIT Bhopal University.
          </p>
        </div>
        <div className="w-40 md:w-[300px]">
          <NextImage
            src="/hero.png"
            alt="hero"
            width={300}
            height={300}
            className="select-none object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <h2 className="pt-16 font-rotterin text-3xl text-[#F7F7F7]">
          Featured Posts
        </h2>
        <FeatureCard gradient="from-[#7EAEFF] to-[#FCA6E9]" />
        <FeatureCard gradient="from-[#B0D9FF] to-[#3BB4E1]" />
        <FeatureCard gradient="from-[#E8CDFF] to-[#FFA6AB]" />
        <Button text="Read all Blogs" />
      </div>

      <div className="flex flex-col space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="pt-16 font-rotterin text-3xl text-[#F7F7F7]">
            Popular Snippets
          </h2>
          <p className="text-[#D1D2D3]">
            These are just some of the popular snippets from my collection which
            have been my go-to for plenty of projects.
          </p>
        </div>
        <div className="flex flex-col space-y-7 md:flex-row md:space-y-0 md:space-x-6">
          <SnippetCard gradient="from-[#D5DAF0] to-[#296EDF]" />
          <SnippetCard gradient="from-[#A1FF8B] to-[#3F93FF]" />
          <SnippetCard gradient="from-[#FFCBA0] via-[#DD5789] to-[#9B5BE6]" />
        </div>
        <Button text="View all Snippets" />
      </div>

      <Subscribe />
    </div>
  </Container>
);

export default Home;
