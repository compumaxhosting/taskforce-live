"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

const RAW_NAMES = [
  "ALDO GREENGUARD.jpg",
  "ALDO ISO 9001 2015.jpg",
  "ALDO ISO 14001 2015.jpg",
  "ALDO ISO 45001 2018.jpg",
  "ALDO QVA COMPLIANCE.jpg",
 
];

// convert to URL-safe paths but keep the **exact** filenames on disk
const IMAGES = RAW_NAMES.map((n) => `/certificate/${encodeURIComponent(n)}`);

function useSlidesPerView() {
  const [spv, setSpv] = useState(1);

  useEffect(() => {
    const calc = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) return 3; // lg and up
      if (window.matchMedia("(min-width: 768px)").matches) return 2; // md
      return 1; // sm
    };
    const set = () => setSpv(calc());
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  return spv;
}

export default function Certificates() {
  const slidesPerView = useSlidesPerView();

  // triple the list for seamless looping; start on the middle block
  const base = IMAGES;
  const slides = useMemo(() => [...base, ...base, ...base], [base]);
  const middleStart = base.length;

  const [index, setIndex] = useState(middleStart);
  const [instant, setInstant] = useState(false); // disable anim when snapping back
  const [isHover, setIsHover] = useState(false);

  const intervalRef = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  // Autoplay (pause on hover)
  useEffect(() => {
    if (isHover) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(next, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, isHover, slidesPerView]);

  // Keep index in the middle block for true infinite feel
  useEffect(() => {
    const total = base.length;
    const low = total; // first index of the middle block
    const high = total * 2 - 1; // last index of the middle block
    if (index < low || index > high) {
      // snap into the middle block without transition
      const normalized = total + (((index % total) + total) % total);
      setInstant(true);
      const id = requestAnimationFrame(() => {
        setIndex(normalized);
        // re-enable transition on the next frame
        requestAnimationFrame(() => setInstant(false));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [index, base.length]);

  // Lightbox
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  // translate distance: each step moves 100/spv percent
  const step = 100 / slidesPerView;
  const translate = -(index * step);

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Track */}
      <div className="overflow-hidden">
        <div
          className={clsx(
            "flex will-change-transform",
            instant
              ? "transition-none"
              : "transition-transform duration-500 ease-out"
          )}
          style={{
            transform: `translateX(${translate}%)`,
          }}
        >
          {slides.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className={clsx(
                "p-3 shrink-0",

                "w-full md:w-1/2 lg:w-1/3"
              )}
            >
              <button
                type="button"
                onClick={() => setLightboxSrc(src)}
                className="group block w-full h-full focus:outline-none"
                aria-label="Open certificate"
              >
                <div className="relative w-full pb-[70%] overflow-hidden rounded-xl border bg-[#eef9f9] border-gray-200 shadow-sm">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    priority={i < slidesPerView} // tiny perf hint
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          className="pointer-events-auto m-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
          aria-label="Previous"
        >
          {/* left arrow */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto m-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
          aria-label="Next"
        >
          {/* right arrow */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Lightbox Modal */}
      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/5"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Stop overlay click from closing when clicking the image */}
          <div
            className="relative w-[95vw] max-w-6xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt=""
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
