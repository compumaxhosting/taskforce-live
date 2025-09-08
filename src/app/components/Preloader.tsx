"use client";

import { useEffect, useState, useRef } from "react";

export default function LuxuryVideoPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false); // screen size check
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ Skip instantly if screen < 600px
    if (window.innerWidth <= 600) {
      setIsAllowed(false);
      setIsVisible(false);
      return;
    }
    setIsAllowed(true);

    // ✅ Auto-hide after 7 seconds
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
        containerRef.current.style.transform = "translateY(10px)";
      }
      setTimeout(() => setIsVisible(false), 500); // match transition
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !isAllowed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition:
          "opacity 400ms ease-out, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Video Preloader */}
      <video
        id="preloader-video"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/pln.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
