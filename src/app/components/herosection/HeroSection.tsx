"use client";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "THE TOUCH OF",
    subtitle: "TASK FORCE INTERIORS",
    description:
      "An organization overseen by individuals with extensive experience in civil engineering, interior design, and the management of turnkey projects.",
  },
  {
    id: 2,
    title: "THE STYLE OF",
    subtitle: "MODERN ARCHITECTURE",
    description: "Blending elegance and functionality for future-ready spaces.",
  },
  {
    id: 3,
    title: "THE POWER OF",
    subtitle: "BOLD DESIGN",
    description: "Turning visions into structures with creative excellence.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[65vh] md:min-h-[80vh] max-h-[800px] bg-black text-white overflow-hidden flex flex-col md:pt-12 lg:pt-0">
      {/* Main Content */}
      <div
        className="flex-1 flex flex-col lg:flex-row relative px-2
  md:max-w-3xl md:mx-auto
  lg:max-w-full lg:mx-0
"
      >
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col justify-center py-12 md:py-0 z-10">
          <HeroText
            id={slide.id}
            title={slide.title}
            subtitle={slide.subtitle}
            description={slide.description}
          />
        </div>

        {/* Right: Image Content */}
        <div className="w-full lg:w-1/2 relative">
          <HeroImage subtitle={slide.subtitle} />
        </div>

        {/* Social Media Icons - Desktop (Left) */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
          {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
            <Link
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-[#ffda08] hover:text-black transition"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="w-full h-16 md:h-20 flex items-center justify-between z-20 px-12">
        {/* Left Half - Yellow Background */}
        <div className="w-1/2 h-full bg-[#ffda08] flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="bg-[#ffda08] text-white p-2 rounded-full hover:scale-110 transition"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} className="md:w-9 md:h-9" />
          </button>
        </div>

        {/* Right Half - Black Background */}
        <div className="w-1/2 h-full bg-black flex items-center justify-center">
          <button
            onClick={handleNext}
            className="bg-black text-white p-2 rounded-full hover:scale-110 transition"
            aria-label="Next slide"
          >
            <ArrowRight size={24} className="md:w-9 md:h-9" />
          </button>
        </div>
      </div>
    </section>
  );
}
