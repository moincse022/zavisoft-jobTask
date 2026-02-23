"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../../public/assets/icon/Logo.svg";
import footerlogo from "../../../public/assets/icon/footer-icon.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <section className=" page-container bg-[#e9e9e7] pt-12 md:pt-16 pb-16 md:pb-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* ================= Newsletter Section ================= */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 md:rounded-t-[40px] px-6 sm:px-10 md:px-12 py-10 md:py-16 overflow-hidden">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                JOIN OUR KICKSPLUS <br className="hidden sm:block" /> CLUB & GET
                15% OFF
              </h2>

              <p className="text-white/80 mt-3 text-sm sm:text-base">
                Sign up for free! Join the community.
              </p>

              {/* Input */}
              <div className="flex  sm:flex-row mt-6 gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 w-full sm:w-[260px] rounded-xl border border-white bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                />
                <button className="bg-black text-white px-6 py-2 rounded-xl">
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Right Logo */}
            <div className="relative flex justify-start md:justify-end">
              <Image
                src={footerlogo}
                alt="Footer Logo"
                className="w-[140px] sm:w-[180px] md:w-[220px]"
              />
              <div className="absolute -top-3 md:-top-4 right-28 md:-right-4 bg-yellow-400 rounded-full w-6 h-6 flex justify-center items-center text-sm font-bold">
                +
              </div>
            </div>
          </div>
        </div>

        {/* ================= Footer Bottom ================= */}
        <div className="relative bg-[#232321] text-white rounded-[30px] md:rounded-[40px] px-6 sm:px-10 md:px-12 py-8 md:py-30 overflow-hidden -mt-8 z-10">
          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 mb-10">
            {/* About */}
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-4">
                About us
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                covered with our exclusive collections and latest drops.
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

          {/* Big Background Logo */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none flex justify-center z-100">
            <Image
              src={logo}
              alt="Big Logo"
              className="w-[400px] sm:w-[700px] lg:w-[1000px] text-[#fff]"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm py-4 text-gray-600">
        © All rights reserved
      </p>
    </section>
  );
}
