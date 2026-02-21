"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="page-container  mt-16">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10 mt-16">
        <h2
          className="
    font-[var(--font-rubik)]
    font-semibold
    text-[24px] md:text-[74px]
    leading-[95%]
    tracking-[0%]
    uppercase
    text-[#232321]
  "
        >
          DON’T MISS OUT <br /> NEW DROPS
        </h2>
        <button
          className="
    flex items-center justify-center gap-1
    h-[48px]
    px-[32px]
    py-[8px]
    rounded-[8px]
    bg-blue-600
    text-white
    font-semibold
    text-sm
    hover:bg-blue-700
    transition
  "
        >
          SHOP NEW DROPS
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => {
          const imageUrl = product.images?.[0]?.startsWith("http")
            ? product.images[0]
            : "/fallback.png";

          return (
            <div
              key={product.id}
              className="bg-[#F4F4F4] p-4 rounded-[24px] group transition duration-300"
            >
              {/* Image Box */}
              <div className="relative bg-[#ECECEC] rounded-[28px] p-6 h-[260px] flex items-center justify-center">
                {/* New Badge */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  New
                </span>

                <Image
                  src={imageUrl}
                  alt={product.title}
                  width={220}
                  height={220}
                  className="object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[18px] font-bold uppercase text-[#232321] leading-snug">
                {product.title}
              </h3>

              {/* Button */}
              <button className="mt-5 w-full bg-[#232321] text-white h-[48px] rounded-[10px] text-sm font-semibold transition hover:opacity-90">
                VIEW PRODUCT -{" "}
                <span className="text-[#F6C90E]">${product.price}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
