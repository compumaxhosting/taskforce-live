"use client";

import React, { useEffect, useRef, useState } from "react";

export type MapVideoProps = {
  /**
   * Public path to the video (place your file in /public/videos and use e.g. "/videos/TASK-FRC.mp4").
   */
  src?: string;
  /** Optional poster image under /public (e.g. "/videos/poster.jpg"). */
  poster?: string;
  /** Merge extra classes onto the outer container (e.g. sizing). */
  className?: string;
  /** Show native controls (off by default since component autoplays muted). */
  controls?: boolean;
  /**
   * How to fit the video inside the square box. Use 'contain' to avoid cropping (default),
   * or 'cover' to fill the square completely.
   */
  fit?: "contain" | "cover";
  /** Accessible label for screen readers. */
  ariaLabel?: string;
};

export default function MapVideo({
  src = "/videos/TASK-FRC.mp4",
  poster,
  className = "",
  controls = false,
  fit = "contain",
  ariaLabel = "Map animation video",
}: MapVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Autoplay/pause based on visibility & user motion preference
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    io.observe(el);

    const tryPlay = () => {
      if (!el) return;
      if (!prefersReducedMotion && isInView) {
        el.play().catch(() => {
          // Some browsers block autoplay; swallow error silently.
        });
      } else {
        el.pause();
      }
    };

    tryPlay();

    return () => {
      io.disconnect();
    };
    // Re-run when visibility state flips
  }, [isInView]);

  // If the user manually focuses the video, ensure it's ready
  const handleFocus = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  };

  return (
    <figure
      className={[
        // Square, responsive, rounded card feel
        "relative w-full aspect-square rounded-2xl overflow-hidden bg-black/90 ring-1 ring-black/10 shadow-lg",
        // Fallback for projects without Tailwind aspect-ratio plugin
        // (modern Tailwind includes aspect-square; the inline style ensures 1:1 regardless)
        className,
      ].join(" ")}
      style={{ aspectRatio: "1 / 1" }}
    >
      <video
        ref={videoRef}
        className={[
          "absolute inset-0 h-full w-full",
          fit === "cover" ? "object-cover" : "object-contain",
          // Neutral background behind letterboxing when using object-contain
          "bg-black",
        ].join(" ")}
        src={src}
        poster={poster}
        playsInline
        muted
        loop
        // Autoplay is allowed when muted; we still guard with IntersectionObserver above
        autoPlay
        controls={controls}
        preload="metadata"
        aria-label={ariaLabel}
        onFocus={handleFocus}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional subtle gradient overlay for readability if you place text on top later */}
      {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
    </figure>
  );
}
