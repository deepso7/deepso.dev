import NextImage from "next/future/image";

const Subscribe: React.FC = () => (
  <div className="relative py-28">
    <NextImage
      src="/subscribe-bg.png"
      alt=""
      width={500}
      height={500}
      className="absolute top-1/2 left-1/2 z-[1] hidden w-full -translate-x-1/2 -translate-y-1/2 md:block"
    />
    <NextImage
      src="/subscribe-bg-mob.png"
      alt=""
      width={100}
      height={100}
      className="absolute top-0 z-[1] w-full md:hidden"
    />
    <div className="relative z-10 flex flex-col gap-8 rounded-3xl bg-[#181A20CC] py-24 px-8 backdrop-blur-md md:mt-7 md:py-14 md:px-24">
      <div>
        <h3 className="font-rotterin text-3xl text-[#F6F6F6]">
          Subscribe to the Newsletter
        </h3>
        <p className="text-[#D1D2D3]">
          Get emails from me about web3, tech and much more!
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <input
          type="text"
          className="h-12 rounded-lg border-none bg-[#2D3747] px-3 text-[#D1D2D3] placeholder:text-[#667085] focus:outline-none md:h-auto md:w-3/4 md:rounded-xl"
          placeholder="eg. john@gmail.com"
        />
        <button className="rounded-lg bg-[#2D3747]  px-8 py-3 font-bold text-[#D1D2D3] md:rounded-xl">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Subscribe;
