"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import kicks from "../../../public/assets/icon/kicks.svg";
import userIcon from "../../../public/assets/icon/User.svg";
import searchIcon from "../../../public/assets/icon/Search.svg";
export default function Navbar() {
  const [cartCount] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, title: "New Drops 🔥", href: "#" },
    { id: 2, title: "Men", href: "#" },
    { id: 3, title: "Women", href: "#" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay — slides down from top */}
      <div
        className={`fixed inset-x-0 top-0 z-100 bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link href="/">
            <Image
              src={kicks}
              alt="Kicks Logo"
              className="w-[110px] md:w-[128px] h-[20px] md:h-[32px]"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 text-lg font-semibold text-gray-800 hover:text-black hover:bg-gray-50 rounded-xl transition"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Search bar inside mobile menu */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
            <Image src={searchIcon} alt="User" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Navbar */}
      <header className="w-full mt-6  relative z-50">
        <div className="page-container  bg-[#FAFAFA] rounded-2xl px-6 h-16 flex items-center justify-between shadow-sm">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors duration-150"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              {/* Replace with your <Image src={kicks} ... /> if you have the SVG */}
              <Image
                src={kicks}
                alt="Kicks Logo"
                className="w-[110px] md:w-[128px] h-[20px] md:h-[32px]"
                priority
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search — desktop only */}
            <button className="hidden md:flex p-2 rounded-xl hover:bg-gray-100 transition">
              <Image src={searchIcon} alt="User" className="w-6 h-6" />
            </button>

            {/* User Icon */}
            <button className="p-2 rounded-xl hover:bg-gray-100 transition">
              <Image src={userIcon} alt="User" className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              {cartCount >= 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FFA52F] text-black text-[10px] font-bold rounded-full w-6 h-6 flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
