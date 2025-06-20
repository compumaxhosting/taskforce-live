"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading || !isClient) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative text-center space-y-6 w-full px-4 sm:px-0">
        {/* Spiral SVG */}
        <div
          id="spiral"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 400, height: 400 }}
        >
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 200 }).map((_, i) => {
              const DOT_RADIUS = 2;
              const MARGIN = 2;
              const DURATION = 3;
              const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
              const CENTER = 200;
              const MAX_RADIUS = CENTER - MARGIN - DOT_RADIUS;

              const idx = i + 0.5;
              const frac = idx / 200;
              const r = Math.sqrt(frac) * MAX_RADIUS;
              const theta = idx * GOLDEN_ANGLE;
              const x = CENTER + r * Math.cos(theta);
              const y = CENTER + r * Math.sin(theta);
              const begin = `${frac * DURATION}s`;

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={DOT_RADIUS}
                  fill="#fff"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values={`${DOT_RADIUS * 0.5};${DOT_RADIUS * 1.5};${
                      DOT_RADIUS * 0.5
                    }`}
                    dur={`${DURATION}s`}
                    begin={begin}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur={`${DURATION}s`}
                    begin={begin}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
                  />
                </circle>
              );
            })}
          </svg>
        </div>

        {/* Orbiting Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="orbit-container scale-[0.6] sm:scale-100">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="orbit-dot"
                style={{
                  transform: `rotate(${i * 45}deg) translate(80px)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Logo */}
        <Image
          src="/logo-only3.png"
          alt="Loading Logo"
          width={150}
          height={80}
          className="mx-auto z-10 sm:w-[210px] sm:h-[120px] w-[150px] h-[80px]"
          priority
        />
      </div>
    </div>
  );
}
