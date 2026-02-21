"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "LIFESTYLE SHOES",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000",
  },
  {
    id: 2,
    title: "BASKETBALL SHOES",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000",
  },
  {
    id: 3,
    title: "RUNNING SHOES",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
  },
];

export default function CategorySlider() {
  return (
    <section className=" page-container bg-gradient-to-r from-black to-zinc-900 pt-[90px]">
      {/* Heading */}
      <div className=" flex items-center justify-between">
        <h2 className="text-white text-4xl font-bold tracking-wide ml-[60px]">
          CATEGORIES
        </h2>

        <div className="flex gap-3 mr-[60px]">
          <button className="prev-btn bg-zinc-700 text-white p-2 rounded-md cursor-pointer">
            <ChevronLeft size={18} />
          </button>
          <button className="next-btn bg-zinc-700 text-white p-2 rounded-md cursor-pointer">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="rounded-tl-[48px] overflow-hidden mt-[100px] ml-[60px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0.5}
          slidesPerView={2}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-200  overflow-hidden relative group">
                {/* Image */}
                <div className="h-80 flex items-center justify-center bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Content */}
                <div className="p-6 flex justify-between items-end">
                  <h3 className="font-bold text-lg tracking-wide">
                    {item.title}
                  </h3>

                  <button className="bg-black text-white p-2 rounded-md">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
