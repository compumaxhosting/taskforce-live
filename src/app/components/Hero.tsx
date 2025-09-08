"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import Header from "./Header";
import Link from "next/link";
// import { FaBuilding, FaHospital, FaToolbox, FaHandshake } from "react-icons/fa";

const heroImages = ["/office1.jpg", "/office2.jpg", "/office3.jpg"];

// const features = [
//   { label: "Office Interiors", icon: FaBuilding },
//   { label: "Hospital Projects", icon: FaHospital },
//   { label: "Turnkey Solutions", icon: FaToolbox },
//   { label: "Corporate Trust", icon: FaHandshake },
// ];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full font-sans">
      {/* Header with background */}
      <div className="relative z-20 bg-[#eef9f9]">
        <Header />
      </div>

      {/* Hero Section below header */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 md:px-14 py-10 ">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImages[currentImage]}
            alt="Hero background"
            fill
            className="object-cover object-center brightness-75"
            priority
            sizes="100vw"
          />
        </div>

        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-light leading-tight drop-shadow font-grotesk">
            We Make Your <span className="text-yellow-500 block">Space</span>
            Better
          </h1>
          <Link href="/aboutus">
            <button className="mt-6 border-[3px] border-white text-white px-10 py-3 hover:bg-white hover:text-yellow-500 transition-all shadow-lg">
              Taskforce Interiors
            </button>
          </Link>
        </div>
      </section>

      {/* Image Switch Indicators */}
      <div className="absolute top-[calc(50%+36px)] right-6 flex flex-col gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={clsx(
              "w-3 h-3 rounded-full border border-white cursor-pointer transition-all",
              idx === currentImage ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>

      {/* Features Section */}
      {/* <div className="px-4 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10 place-items-center sm:place-items-start">
          {features.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-4 hover:bg-white/60 rounded-md transition"
            >
              <div className="w-10 h-10 min-w-[40px] border-2 border-white flex items-center justify-center rounded flex-shrink-0">
                <Icon className="text-yellow-700 w-5 h-5" />
              </div>
              <span className="text-xl text-gray-800 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
