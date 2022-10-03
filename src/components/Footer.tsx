import useSWR from "swr";
import NextImage from "next/future/image";
import NextLink from "next/link";

import fetcher from "../lib/fetcher";
import { ExternalLink, NavObj } from "./NavBar";
import { Github, Twitter } from "./Icons";

const Footer = () => (
  <footer>
    <hr className="bottom-4 w-full border-[#292C35]" />
    <NowPlaying />
    <div className="flex items-start justify-between md:items-center">
      <ul className="flex flex-col gap-8 md:mt-2 md:flex-row md:gap-12">
        {NavObj.map(item => (
          <li key={item.href}>
            <NextLink href={item.href}>
              <a className="font-bold text-[#A7A9AC]">
                <span>{item.text}</span>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-8">
        <ExternalLink href="https://github.com/deepso7">
          <Github />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/deepso7">
          <Twitter />
        </ExternalLink>
      </div>
    </div>
  </footer>
);

type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>("/api/spotify/now-playing", fetcher);

  return (
    <div className="mb-8 mt-5 flex w-full flex-row-reverse items-center space-x-0 md:flex-row md:space-x-2">
      {data?.songUrl ? (
        <NextImage
          src={data.albumImageUrl}
          width="32"
          height="32"
          className="rounded-sm"
          alt={data.album}
        />
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9921 10.6591C15.1823 8.39653 8.8981 8.1885 5.26118 9.29232C4.67712 9.46958 4.05949 9.13975 3.88258 8.55587C3.70555 7.97143 4.0349 7.35425 4.6194 7.1767C8.79434 5.90945 15.7346 6.15418 20.1205 8.7577C20.6458 9.06961 20.8181 9.74804 20.5068 10.2725C20.1951 10.7978 19.5161 10.9709 18.9921 10.6591ZM18.8673 14.0102C18.6 14.4439 18.033 14.58 17.5998 14.3136C14.4236 12.3612 9.58029 11.7956 5.82258 12.9363C5.33528 13.0835 4.82057 12.8088 4.67255 12.3224C4.52573 11.8351 4.80062 11.3213 5.28704 11.1732C9.57969 9.87055 14.9161 10.5015 18.5642 12.7433C18.9973 13.0101 19.1337 13.5775 18.8673 14.0102ZM17.4211 17.2285C17.2087 17.5768 16.7553 17.6859 16.4082 17.4736C13.6327 15.7773 10.1394 15.3943 6.02529 16.334C5.62884 16.4249 5.23372 16.1764 5.14331 15.78C5.0525 15.3837 5.29999 14.9885 5.69732 14.8981C10.1995 13.8688 14.0614 14.3118 17.1767 16.2154C17.524 16.4276 17.6334 16.8813 17.4211 17.2285ZM12.0008 0.181208C5.47332 0.181208 0.181641 5.47278 0.181641 12.0001C0.181641 18.5282 5.47332 23.8193 12.0008 23.8193C18.5283 23.8193 23.8198 18.5282 23.8198 12.0001C23.8198 5.47278 18.5283 0.181208 12.0008 0.181208Z"
            fill="#1ED760"
          />
        </svg>
      )}
      <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
        {data?.songUrl ? (
          <a
            className="capsize max-w-max truncate font-medium  text-gray-800 dark:text-gray-200"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="capsize font-medium text-gray-800 dark:text-gray-200">
            Not Playing
          </p>
        )}
        <span className="capsize mx-2 hidden text-gray-500 dark:text-gray-300 sm:block">
          {" – "}
        </span>
        <p className="capsize max-w-max truncate text-gray-500 dark:text-gray-300">
          {data?.artist ?? "Spotify"}
        </p>
      </div>
    </div>
  );
};
export default Footer;
