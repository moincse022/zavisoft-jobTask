"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export default function CategorySlider() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://api.escuelajs.co/api/v1/categories",
        );
        setCategories(res.data.slice(0, 6));
      } catch (err) {
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="bg-black py-20 text-white text-center">
        Loading categories...
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-black py-20 text-red-500 text-center">
        {error}
      </section>
    );
  }

  return (
    <section className="page-container bg-gradient-to-r from-black to-zinc-900 pt-16 pl-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
          CATEGORIES
        </h2>

        <div className="flex gap-3  pr-8">
          <button className="prev-btn bg-zinc-700 text-white p-2 rounded-md hover:bg-zinc-600 transition">
            <ChevronLeft size={18} />
          </button>
          <button className="next-btn bg-zinc-700 text-white p-2 rounded-md hover:bg-zinc-600 transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="rounded-tl-[48px] overflow-hidden h-[500px] md:h-auto">
        <Swiper
          modules={[Navigation]}
          speed={700}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: {
              direction: "vertical",
              slidesPerView: 2,
            },
            768: {
              direction: "horizontal",
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#ECEEF0] overflow-hidden relative group hover:shadow-lg transition duration-300">
                {/* Image */}
                <div className="h-64 flex items-center justify-center bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Content */}
                <div className="p-6 flex justify-between items-end">
                  <h3 className="font-bold text-lg tracking-wide">
                    {item.name.toUpperCase()}
                  </h3>

                  <button className="bg-black text-white p-2 rounded-md hover:bg-zinc-800 transition">
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
