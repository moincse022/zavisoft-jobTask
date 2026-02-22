"use client";

import Image from "next/image";
import bgImage from "../../../public/assets/image/image-14.png";
import img1 from "../../../public/assets/image/Rectangle-1.png";
import img2 from "../../../public/assets/image/Rectangle-2.png";

const Banner = () => {
  return (
    <section className="w-full">
      {/* ================= HERO HEADING ================= */}
      <div className="page-container flex justify-center">
        <h1
          className="
      font-rubik
      font-bold
      uppercase
      leading-[100%]
      text-center

      text-[60px] 
      md:text-[223.5px]

      max-w-[354px]
      md:max-w-[1318px]
         whitespace-nowrap
    "
        >
          <span className="text-[#232321]">DO IT </span>
          <span className="text-[#4A69E2]">RIGHT</span>
        </h1>
      </div>

      {/* ================= BANNER ================= */}
      <div className="page-container relative  overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full px-2  h-[382px] md:h-[750px]">
          <Image
            src={bgImage}
            alt="Nike Air Max"
            fill
            priority
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Left Vertical Label (Desktop Only) */}
        <div className=" absolute left-4 md:left-13 top-[60%] md:top-1/3 -translate-y-1/2 -rotate-90 origin-left">
          <div className="bg-[#232321] px-6 py-2  rounded-b-lg">
            <span className="text-white text-sm font-medium whitespace-nowrap">
              Nike product of the year
            </span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-6  left-6 md:bottom-16 md:left-12 text-white max-w-[250px] md:max-w-[600px]">
          <h2 className="font-rubik font-bold text-[24px] md:text-[74px] leading-[100%] mb-3">
            NIKE AIR MAX
          </h2>

          <p className="text-[12px] md:text-[16px] mb-4 md:mb-6">
            Nike introducing the new air max for everyone's comfort
          </p>

          <button className="bg-[#4A69E2] hover:bg-blue-700 transition px-4 md:px-8 py-2 md:py-3 rounded-lg text-xs md:text-base font-semibold">
            SHOP NOW
          </button>
        </div>

        {/* Right Preview Images */}
        <div className="absolute right-6 md:right-16 bottom-8 md:bottom-14 flex flex-col gap-4">
          <div className="border-[#E7E7E3]  p-1 shadow-lg">
            <Image
              src={img1}
              alt="Preview 1"
              className="w-16 h-16 md:w-20 md:h-20 object-cover border-[1px] rounded-[8px]"
            />
          </div>
          <div className="border-[#E7E7E3]  p-1 shadow-lg">
            <Image
              src={img2}
              alt="Preview 2"
              className="w-16 h-16 md:w-20 md:h-20 object-cover  border-[1px] rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
