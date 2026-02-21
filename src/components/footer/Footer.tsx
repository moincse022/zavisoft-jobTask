"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../../public/assets/icon/Logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="page-container bg-[#e9e9e7] pt-16 pb-20">
      <div className="max-w-[1320px] mx-auto px-[60px]">
        {/* Newsletter Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-[40px] px-12 py-16 overflow-hidden">
          <div className="flex justify-between items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-white text-4xl font-bold leading-snug">
                JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
              </h2>

              <p className="text-white/80 mt-3">
                Sign up for free! Join the community.
              </p>

              {/* Input */}
              <div className="flex mt-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 w-[260px] rounded-l-md outline-none"
                />
                <button className="bg-black text-white px-6 rounded-r-md">
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Right Big Logo */}
            <h1 className="text-white/80 text-[120px] font-extrabold tracking-wide">
              KICKS<span className="text-yellow-400">+</span>
            </h1>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative bg-[#232321] text-white rounded-[40px] px-12 py-48 overflow-hidden -mt-8 z-10">
          {/* Columns */}
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {/* About */}
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-4">
                About us
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-4">
                Follow us
              </h3>
              <div className="flex gap-4 text-gray-400">
                <Facebook size={18} />
                <Instagram size={18} />
                <Twitter size={18} />
              </div>
            </div>
          </div>

          {/* Huge Background Text */}
          <h1 className="absolute bottom-[-40px] left-0 text-white/5 text-[200px] font-extrabold tracking-wide select-none z-30">
            <Image src={logo} alt="" className="w-[1262px] mx-[29px]" />
          </h1>
        </div>
      </div>
    </section>
  );
}
