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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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

      {/* Error State */}
      {error && (
        <div className="text-center text-red-500 font-semibold py-10">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-[#F4F4F4] rounded-2xl p-4"
            >
              <div className="bg-gray-300 h-48 rounded-xl mb-4"></div>
              <div className="bg-gray-300 h-4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 rounded w-2/3 mb-4"></div>
              <div className="bg-gray-300 h-10 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.slice(0, 4).map((product) => {
            const imageUrl = product.images?.[0]?.startsWith("http")
              ? product.images[0]
              : "/fallback.png";

            return (
              <div
                key={product.id}
                className="group bg-[#F4F4F4] rounded-2xl p-3 sm:p-4 flex flex-col justify-between"
              >
                {/* Image Box */}
                <div className="relative bg-[#ECECEC] rounded-2xl p-4 aspect-square flex items-center justify-center overflow-hidden">
                  <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-3 py-1 font-medium rounded-tl-xl rounded-br-xl">
                    New
                  </span>

                  <Image
                    src={imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>

                <h3 className="mt-4 text-sm sm:text-base md:text-xl font-bold uppercase text-[#232321] line-clamp-2">
                  {product.title}
                </h3>

                <Link href={`/products/${product.id}`}>
                  <button className="mt-4 w-full bg-[#232321] text-white py-2  rounded-lg text-[10px] md:text-sm font-semibold hover:opacity-90 transition">
                    VIEW PRODUCT -{" "}
                    <span className="text-[#F6C90E]">${product.price}</span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Product;
