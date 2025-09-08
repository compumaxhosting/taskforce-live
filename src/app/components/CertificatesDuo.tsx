"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const RAW_NAMES = [
  "Occupational Health and Safety.jpg",
  "Quality Management System.jpg",
];

// convert to URL-safe paths but keep the **exact** filenames on disk
const IMAGES = RAW_NAMES.map((n) => `/certificate/${encodeURIComponent(n)}`);

function useIsSmall() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsSmall(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return isSmall;
}

export default function CertificatesDuo() {
  const isSmall = useIsSmall();

  // lightbox
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  // small-screen slider state
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % IMAGES.length);
  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  // touch swipe (small only)
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
    startX.current = null;
  };

  return (
    <div className="relative w-full select-none">
      {/* Desktop/Tablet: 2 static cards */}
      {!isSmall ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IMAGES.map((src, i) => (
            <div key={src} className="p-3">
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
                    sizes="(min-width:1024px) 50vw, 50vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    priority={i < 2}
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      ) : (
        // Small screens: simple 1-at-a-time slider
        <div className="relative overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div
            className={clsx(
              "flex transition-transform duration-500 ease-out"
            )}
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {IMAGES.map((src) => (
              <div key={src} className="w-full shrink-0 p-3">
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
                      sizes="100vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* arrows (small only) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              className="pointer-events-auto m-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="pointer-events-auto m-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* dots */}
          <div className="mt-2 flex justify-center gap-2">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={clsx(
                  "h-2 w-2 rounded-full ring-1 ring-black/10",
                  i === index ? "bg-gray-800" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

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
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div
            className="relative w-[95vw] max-w-6xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={lightboxSrc} alt="" fill className="object-contain rounded-xl" priority />
          </div>
        </div>
      )}
    </div>
  );
}
