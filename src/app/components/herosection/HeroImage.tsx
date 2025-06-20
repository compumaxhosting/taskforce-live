"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageProps {
  subtitle: string;
}

export default function HeroImage({ subtitle }: HeroImageProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center md:justify-end">
      {/* Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center md:justify-end z-0 pointer-events-none"
      >
        <div className="relative w-[380px] h-[380px] sm:w-[450px] sm:h-[420px] md:w-[500px] md:h-[460px]">
          <Image
            src="/bg-hero-img.png"
            alt={subtitle}
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Slide Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full max-w-[280px] h-[200px] sm:h-[280px] md:h-[350px] z-10"
      ></motion.div>
    </div>
  );
}
