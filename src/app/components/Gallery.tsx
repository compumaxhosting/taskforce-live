"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Hospital Interior Design",
    category: "Healthcare",
    image: "/projects/apollo7.jpeg",
  },
  {
    title: "Premium Office Interiors",
    category: "Hospitality",
    image: "/office2.jpg",
  },
  {
    title: "Data Center Solutions",
    category: "Corporate IT",
    image: "/projects/ideacorp-8.jpg", 
  },
  {
    title: "Atrium & Cladding Work",
    category: "Commercial",
    image: "/projects/imax2.jpeg",
  },
  {
    title: "Showroom Design",
    category: "Residential",
    image: "/gallery/gallery5.png",
  },
  {
    title: "BPO & Software Centers",
    category: "Corporate",
    image: "/projects/astra2.jpeg",
  },
  {
    title: "False Ceiling Works",
    category: "Specialization",
    image: "/projects/spe.jpg",
  },
  {
    title: "Modular Furniture",
    category: "Custom Mill work / Furniture",
    image: "/projects/ahrar3.jpg",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-[#eef9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-10 text-center">
          Our Project <span className="text-yellow-600">GALLERY</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-md w-[270px] h-[400px] cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={270}
                height={320}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(rgba(255,255,255,0.1) 50%, #03201f)",
                }}
              />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                <span className="bg-yellow-600 text-base px-2 py-1 rounded-sm mb-2 inline-block font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Image Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full mx-4">
              <Image
                src={selectedImage}
                alt="Preview"
                width={1000}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full text-lg"
                onClick={(e) => {
                  e.stopPropagation(); // prevent modal from closing
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
