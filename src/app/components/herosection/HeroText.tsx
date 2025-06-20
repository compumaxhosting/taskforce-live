"use client";
import { motion } from "framer-motion";

interface HeroTextProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroText({
  id,
  title,
  subtitle,
  description,
}: HeroTextProps) {
  return (
    <div className="relative z-10 max-w-4xl">
      {/* Decorative background behind text */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-no-repeat bg-contain bg-left-top md:bg-left bg-[url('/shape-01.png')]"></div>

      <motion.div
        key={id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full space-y-2 sm:space-y-3 md:space-y-4"
      >
        <p className="text-[#ffda08] uppercase tracking-[0.6rem] text-md sm:text-base md:text-lg font-semibold font-oswald">
          Welcome To
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight font-oswald">
          {title}
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-stroke-white leading-snug sm:leading-tight font-oswald">
          {subtitle === "TASK FORCE INTERIORS" ? (
            <>
              <span className="block">TASK FORCE</span>
              <span className="block">INTERIORS</span>
            </>
          ) : (
            subtitle.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))
          )}
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-full sm:max-w-md text-justify">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
