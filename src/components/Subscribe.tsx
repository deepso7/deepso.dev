import NextImage from "next/future/image";

const Subscribe: React.FC = () => (
  <div className="relative py-28">
    <NextImage
      src="/subscribe-bg.png"
      alt=""
      width={100}
      height={100}
      className="sle absolute top-1/2 left-1/2 z-[1] w-full -translate-x-1/2 -translate-y-1/2"
    />
    <div className="relative z-10 mt-7 flex flex-col gap-8 rounded-3xl bg-[#181A20CC] py-14 px-24 backdrop-blur-md">
      <div>
        <h3 className="font-rotterin text-3xl text-[#F6F6F6]">
          Subscribe to the Newsletter
        </h3>
        <p className="text-[#D1D2D3]">
          Get emails from me about web3, tech and much more!
        </p>
      </div>

      <div className="flex justify-between">
        <input
          type="text"
          className="w-3/4 rounded-xl border-none bg-[#2D3747] px-3 text-[#D1D2D3] placeholder:text-[#667085] focus:outline-none"
          placeholder="eg. john@gmail.com"
        />
        <button className="rounded-xl bg-[#2D3747] px-8 py-3 font-bold text-[#D1D2D3]">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Subscribe;
