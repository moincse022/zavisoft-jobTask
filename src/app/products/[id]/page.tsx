"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/components/header/Navbar";

import Product from "@/components/products/Product";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("gray");

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

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="page-container py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE - IMAGES */}
          {/* LEFT SIDE - IMAGES */}
          <div>
            {/* 🔹 Mobile View (Single Image) */}
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
            </div>

            {/* 🔹 Desktop View (Gallery Layout) */}
            <div className="hidden lg:block">
              {/* Main Image */}
              <div className="bg-gray-100 rounded-2xl p-6 mb-4">
                <Image
                  src={activeImage}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-[400px] object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`cursor-pointer rounded-xl p-2 bg-gray-100 border-2 ${
                      activeImage === img
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      width={150}
                      height={150}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PRODUCT INFO */}
          <div>
            <h1 className="text-4xl font-bold mb-3 uppercase">
              {product.title}
            </h1>

            <h2 className="text-2xl font-semibold text-blue-600 mb-6">
              ${product.price}
            </h2>

            {/* COLOR OPTION */}
            <div className="mb-6">
              <p className="font-semibold mb-2">COLOR</p>
              <div className="flex gap-4">
                {["gray", "black", "green"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* SIZE OPTION */}
            <div className="mb-8">
              <p className="font-semibold mb-2">SIZE</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium ${
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

            <p className="text-gray-600 mb-8">{product.description}</p>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Product />
    </>
  );
};

export default ProductDetails;
