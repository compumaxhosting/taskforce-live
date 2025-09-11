"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";
import Header from "./Header";
import Link from "next/link";

const heroImages = ["/office1.jpg", "/office2.jpg", "/office3.jpg"];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const total = heroImages.length;

  // advance slide
  const nextSlide = useCallback(
    () => setCurrentImage((prev) => (prev + 1) % total),
    [total]
  );

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // keyboard support for the dot controls container
  const onDotsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setCurrentImage((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <div className="relative w-full font-sans">
      {/* Header with background */}
      <div className="relative z-20 bg-[#eef9f9]">
        <Header />
      </div>

      {/* Hero Section below header */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 md:px-14 py-10">
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
            <button
              type="button"
              className="mt-6 border-[3px] border-white text-white px-10 py-3 hover:bg-white hover:text-yellow-500 transition-all shadow-lg"
            >
              Taskforce Interiors
            </button>
          </Link>
        </div>
      </section>

      {/* Image Switch Indicators (Accessible) */}
      <nav
        aria-label="Hero slide controls"
        className="absolute top-[calc(50%+36px)] right-6 z-20"
      >
        <div
          role="group"
          aria-label="Select hero slide"
          className="flex flex-col gap-2"
          tabIndex={0}
          onKeyDown={onDotsKeyDown}
        >
          {heroImages.map((_, idx) => {
            const isActive = idx === currentImage;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentImage(idx)}
                className={clsx(
                  "w-3 h-3 rounded-full border border-white cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-white/70",
                  isActive ? "bg-white" : "bg-white/50"
                )}
                aria-label={`Go to slide ${idx + 1} of ${total}`}
                aria-pressed={isActive}
                title={`Slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </nav>

      {/* Features Section (kept commented) */}
      {/*
      <div className="px-4 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10 place-items-center sm:place-items-start">
          ...
        </div>
      </div>
      */}
    </div>
  );
}
