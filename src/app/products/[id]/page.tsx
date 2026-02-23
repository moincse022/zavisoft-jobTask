"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/components/header/Navbar";
import Product from "@/components/products/Product";
import love from "../../../../public/assets/icon/love.svg";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  slug: string;
  images: string[];
}

const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("38");
  const [selectedColor, setSelectedColor] = useState<string>("gray");
  console.log(id);
  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setActiveImage(res.data.images[0]);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log(product);
  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="max-w-[1320px] mx-auto px-4 lg:px-0 py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ================= LEFT SIDE IMAGES ================= */}
          <div>
            {/* ---------- Mobile View ---------- */}
            <div className="lg:hidden">
              <div className="bg-gray-100 rounded-2xl p-6">
                <Image
                  src={activeImage}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-[300px] object-contain"
                />
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      activeImage === img ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`min-w-[80px] bg-gray-100 rounded-xl p-2 border-2 cursor-pointer ${
                      activeImage === img
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      width={100}
                      height={100}
                      className="w-full h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- Desktop View ---------- */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-2">
                {product.images.map((img, index) => {
                  let roundedClass = "";

                  if (index === 0) roundedClass = "rounded-tl-2xl";
                  if (index === 1) roundedClass = "rounded-tr-2xl";
                  if (index === 2) roundedClass = "rounded-bl-2xl";
                  if (index === 3) roundedClass = "rounded-br-2xl";

                  return (
                    <div
                      key={index}
                      className={`bg-gray-100 overflow-hidden ${roundedClass}`}
                    >
                      <Image
                        src={img}
                        alt={product.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE INFO ================= */}
          <div className="lg:sticky lg:top-24 h-fit">
            <button className="inline-flex items-center gap-[10px] px-4 py-3 rounded-[12px] bg-[#4A69E2] text-white text-sm font-medium mb-2">
              New Release
            </button>
            <h1 className="text-2xl lg:text-4xl font-bold uppercase mb-2">
              {product.title}
            </h1>

            <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 mb-6">
              ${product.price}
            </h2>

            {/* COLOR */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Color</p>
              <div className="flex gap-3">
                {["gray", "black", "green"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mb-8">
              <p className="font-semibold mb-2">Size</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
                  ADD TO CART
                </button>
                <button className="w-[48px] h-[48px] bg-black text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center">
                  <Image src={love} alt="" />
                </button>
              </div>

              <button className="w-full bg-[#4A69E2] text-white py-3 rounded-lg hover:opacity-90 transition">
                BUY IT NOW
              </button>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 space-y-3">
              <h3 className="font-semibold text-lg">About the product</h3>
              <p className="text-gray-600 text-sm">{product?.slug}</p>

              <p className="text-gray-600 text-sm">{product.description}</p>

              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free shipping, returns &
                  exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductDetails /> */}
      <Product />
    </>
  );
};

export default ProductDetails;
