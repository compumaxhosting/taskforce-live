"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "CNC Processing Center CENTATEQ P-100",
    src: "/gallery/1.jpg",
  },
  { id: 2, name: "SAWTEQ-B-500 Beam Saw", src: "/gallery/2.jpg" },
  { id: 3, name: "EDGETEQ S-300 Edge Banding3", src: "/gallery/3.jpg" },
  { id: 4, name: "DRILLTEQ Drilling", src: "/gallery/4.jpg" },
  { id: 5, name: "CNC Laser Cutting Machine", src: "/gallery/5.jpg" },
  {
    id: 6,
    name: "Felder K700S Sliding Table Panel Saw Machine",
    src: "/gallery/6.jpg",
  },
  { id: 7, name: "Manual Edge Banding Machine", src: "/gallery/7.jpg" },
  { id: 8, name: "OptiDrill Three Head Boring", src: "/gallery/8.jpg" },
  { id: 9, name: "Post Forming machine-j5100", src: "/gallery/9.jpg" },
  { id: 10, name: "Four Sided Moulder", src: "/gallery/10.png" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + products.length) % products.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % products.length);
  };

  return (
    <div className="px-6 py-12 bg-white">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <div
            key={product.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md"
            onClick={() => openImage(i)}
          >
            <Image
              src={product.src}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold px-2 text-center">
                {product.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full px-4 flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition select-none"
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* Image */}
            <Image
              src={products[selectedIndex].src}
              alt={products[selectedIndex].name}
              width={1200}
              height={900}
              className="max-h-[80vh] object-contain rounded shadow-xl select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition select-none"
              aria-label="Next Image"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-white text-5xl font-bold leading-none p-2 hover:text-yellow-400 transition select-none"
              aria-label="Close Image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
