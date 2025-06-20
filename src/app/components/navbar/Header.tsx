"use client";
import { useState } from "react";
import Image from "next/image";
import QuotePopup from "../QuotePopup";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import StickyHeader from "./StickyHeader"; // 👈 Add this line
import { Menu } from "lucide-react";

export default function Header() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <>
      <StickyHeader /> {/* 👈 Sticky header appears when scrolling */}
      <header className="relative z-50 border-b-[0.5px] border-white/10 bg-black">


        <div className="group relative flex h-16 md:h-20 items-center justify-between bg-black text-white">
          {/* Background hover effect */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slide" />

          {/* Yellow Button (hidden on mobile) */}
          <div className="bg-[#ffda08] h-full w-20 hidden lg:flex items-center justify-center">
            <button
              className="text-white font-bold cursor-pointer"
              onClick={() => setShowQuote(true)}
              aria-label="Open quote popup"
            >
              <Menu size={28} /> {/* Hamburger icon */}
            </button>
          </div>
          {/* Main content */}
          <div className="flex w-full items-center justify-between px-4 md:px-8 z-10">
            <div className="flex items-center space-x-2">
              <Link href="/" aria-label="Go to home">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={280}
                  height={100}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Mobile Navigation Toggle */}
            <MobileNav />
          </div>
        </div>

        {/* Popup Component */}
        <QuotePopup isOpen={showQuote} onClose={() => setShowQuote(false)} />
      </header>
    </>
  );
}
