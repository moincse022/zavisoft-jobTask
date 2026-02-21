"use client";

import Image from "next/image";
import bgImage from "../../../public/assets/image/image-14.png";
import img1 from "../../../public/assets/image/Rectangle-1.png";
import img2 from "../../../public/assets/image/Rectangle-2.png";

const Banner = () => {
  return (
    <section className="w-full ">
      {/* Top Heading */}
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

      {/* Banner Container */}
      <div className="relative page-container mx-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Nike Air Max"
          className=" object-cover rounded-[24px] h-[382px] md:h-[750px]"
          priority
        />
        <Image
          src="/assets/image/image 14.png"
          alt="Nike Air Max"
          fill
          className="w-full h-[400px] md:h-[550px] object-cover"
          priority
        />

        {/* Left Vertical Label */}
        <div className="absolute -left-18 bg-[#232321]  top-1/4 -translate-y-1/2 rotate-[-90deg] rounded-tr-lg rounded-br-lg">
          <span className=" text-white text-xs w-[154px]  px-4 py-1 rounded">
            Nike product of the year
          </span>
        </div>

        {/* Bottom Left Content */}
        <div className="flex justify-between">
          <div className="absolute bottom-8 left-8 text-white max-w-md">
            <h2 className="text-[#FFFFFF] text-[24px] md:text-[74px] font-bold ">
              NIKE AIR MAX
            </h2>
            <p className="text-sm md:text-base mb-4 w-[197px] md:w-full">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold transition">
              SHOP NOW
            </button>
          </div>

          {/* Right Side Preview Images */}
          <div className="absolute right-6 bottom-8 flex flex-col gap-4">
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
      </div>
    </section>
  );
};

export default Banner;
