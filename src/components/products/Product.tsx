"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="page-container px-4 sm:px-6 lg:px-16 py-10 bg-[#F9F9F9]">
      {/* Heading */}
      <div className="flex flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8">
        <h2 className="font-bold text-[21px] md:text-[60px] lg:text-[74px] leading-[110%] uppercase text-[#232321]">
          DON’T MISS OUT
          <br className="hidden md:block" />
          NEW DROPS
        </h2>

        <button className="self-start sm:self-auto h-[42px] sm:h-[48px] px-4 sm:px-6 rounded-lg bg-blue-600 text-white font-semibold text-[11px] sm:text-sm whitespace-nowrap hover:bg-blue-700 transition">
          SHOP NEW DROPS
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.slice(0, 4).map((product) => {
          const imageUrl = product.images?.[0]?.startsWith("http")
            ? product.images[0]
            : "/fallback.png";

          return (
            <div
              key={product.id}
              className="group bg-[#F4F4F4] rounded-2xl p-2 md:p-3 sm:p-4 flex flex-col justify-between  "
            >
              {/* Image Box */}
              <div className="relative bg-[#ECECEC] rounded-2xl p-4 sm:p-6 aspect-square flex items-center justify-center overflow-hidden">
                {/* Badge */}
                <span className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] sm:text-xs px-3 py-1 font-medium rounded-tl-xl rounded-br-xl">
                  New
                </span>

                <Image
                  src={imageUrl}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full "
                />
              </div>
              {/* Title */}
              <h3 className="mt-4 text-[13px] sm:text-[16px] md:text-[24px] font-bold uppercase text-[#232321] leading-snug line-clamp-2">
                {product.title}
              </h3>
              {/* Button */}{" "}
              <Link href={`/products/${product.id}`}>
                <button className="mt-4  cursor-pointer w-full bg-[#232321] text-white py-2 sm:py-3 rounded-lg text-[12px] sm:text-sm font-semibold hover:opacity-90 transition">
                  {" "}
                  VIEW PRODUCT -{" "}
                  <span className="text-[#F6C90E]">${product.price}</span>{" "}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
