"use client";

import Image from "next/image";
import bgImage from "../../../public/assets/image/image-14.png";
import img1 from "../../../public/assets/image/Rectangle-1.png";
import img2 from "../../../public/assets/image/Rectangle-2.png";

const Banner = () => {
  return (
    <section className="w-full mt-10">
      {/* Top Heading */}
      <div className="w-full flex justify-center">
        <h1
          className="
    font-[var(--font-rubik)]
    font-bold
    uppercase
    leading-[100%]
    text-center
    text-[50px]
    sm:text-[80px]
    md:text-[140px]
    lg:text-[200px]
    xl:text-[223.5px]
  "
        >
          <span className="text-black">DO IT </span>
          <span className="text-blue-600">RIGHT</span>
        </h1>
      </div>

      {/* Banner Container */}
      <div className="relative max-w-[1320px] mx-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Nike Air Max"
          className="w-full h-[400px] md:h-[550px] object-cover"
          priority
        />
        <Image
          src="/assets/image/image 14.png"
          alt="Nike Air Max"
          fill
          className="w-full h-[400px] md:h-[550px] object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Left Vertical Label */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-[-90deg]">
          <span className="bg-green-600 text-white text-xs px-3 py-1 rounded">
            Nike product of the year
          </span>
        </div>

        {/* Bottom Left Content */}
        <div className="absolute bottom-8 left-8 text-white max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">NIKE AIR MAX</h2>
          <p className="text-sm md:text-base mb-4">
            Nike introducing the new air max for everyone's comfort
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold transition">
            SHOP NOW
          </button>
        </div>

        {/* Right Side Preview Images */}
        <div className="absolute right-6 bottom-8 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-1 shadow-lg">
            <Image
              src={img1}
              alt="Preview 1"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
          <div className="bg-white rounded-xl p-1 shadow-lg">
            <Image
              src={img2}
              alt="Preview 2"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
