"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Image - Responsive sizing */}
      <motion.div
        className="absolute right-0 top-0 z-0 w-full md:w-[800px] h-[300px] md:h-[600px]"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/bg-hero-img.png"
          alt="Background Shape"
          layout="fill"
          className="object-contain opacity-20"
          priority
        />
      </motion.div>

      {/* Content Container - Responsive padding and layout */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Feature Image - Responsive behavior */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl overflow-hidden shadow-lg w-full h-[300px] sm:h-[400px] md:h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src="/img2.JPG"
              alt="Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content - Responsive spacing and typography */}
        <div className="space-y-4 sm:space-y-6">
          {/* ABOUT US heading with logo */}
          <div className="text-[#ffda08] font-semibold flex items-center gap-2 font-oswald">
            <Image
              src="/logo-only3.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain w-10 h-10 md:w-[60px] md:h-[60px]"
            />
            <span className="text-lg md:text-xl tracking-wider">ABOUT US</span>
          </div>

          {/* Main Heading - Responsive font sizes */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white font-oswald">
            TASK FORCE INTERIORS <br className="hidden sm:block" />
            <span className="text-white text-stroke-white">
              DESIGN SERVICE
            </span>
          </h2>

          {/* First Paragraph */}
          <p className="text-base sm:text-lg text-white max-w-xl">
            TASK FORCE INTERIOR (P) LTD. is an organization overseen by
            individuals with extensive experience in civil engineering, interior
            design, and the management of turnkey projects.
          </p>

          {/* Second Paragraph */}
          <p className="text-white text-base sm:text-lg max-w-xl">
            Analyze the available space and develop efficient floor plans that
            maximize functionality, flow, and utilization of the area.
          </p>

          {/* Feature List - Responsive grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 text-base sm:text-lg font-semibold text-[#ffda08] font-oswald">
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Interior Design
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Execution as per
              Visualization
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Banquet Hall Design
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Room Space Planning
            </div>
          </div>

          {/* Signature */}
          <div className="flex items-center gap-4 pt-4 sm:pt-6">
            <div>
              <p className="font-bold text-lg sm:text-xl">Syed Adil</p>
              <p className="text-sm text-gray-400">Design Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}