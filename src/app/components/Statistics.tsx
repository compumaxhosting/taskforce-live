"use client";

import React, { useEffect, useRef, useState } from "react";

export default function StatisticsSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = countRef.current; // Save current ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCount();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node); // Use the saved node
      }
    };
  }, [hasAnimated]);

  const startCount = () => {
    let start = 0;
    const end = 100;
    const duration = 2000; // total duration in ms
    const intervalTime = duration / end;

    const counter = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, intervalTime);
  };

  return (
    <section className="bg-[url('/funfact-bg.png')] bg-cover bg-center bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mb-10">
          <h6 className="text-[#ffda08] text-xl uppercase tracking-widest font-semibold mb-2">
            Statistics
          </h6>
          <h2 className="font-oswald text-3xl md:text-[60px] font-semibold leading-[70px] uppercase text-gray-900">
            Well-established and{" "}
            <span className="text-[#ffda08]">Experienced</span>
          </h2>
        </div>

        <div className="w-full">
          <div className="text-left">
            <div
              ref={countRef}
              className="text-[80px] md:text-[100px] font-extrabold text-gray-300 leading-none"
            >
              {count}
              <span className="text-gray-400 align-top text-[60px]">%</span>
            </div>
            <h3 className="text-xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">
              Task Force Interiors
            </h3>
            <p className="text-gray-700 max-w-full text-xl">
              We possess a distinguished history of accomplishing diverse
              projects, ranging from the interior design of premium offices and
              showrooms to software hubs, BPOs, and data centers. With over 75
              successfully completed hospital projects in India and Bangladesh
              combined, our expertise extends widely. We specialize in crafting
              atriums, along with ACP and glass cladding for high-rise
              structures in Hyderabad and other prominent urban centers. Our
              esteemed clientele includes multinational corporations and
              corporate entities who entrust us for our proven proficiency.
              Furthermore, our portfolio boasts interiors for over 38 hospitals
              across India, underscoring our adaptability and unwavering
              dedication to excellence across various sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
