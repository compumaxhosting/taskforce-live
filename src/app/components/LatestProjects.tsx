"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Healthcare",
    subtitle: "75+ Hospitals",
    image: "/images/hospitals.jpg",
  },
  {
    title: "Corporate office fit out",
    subtitle: "Multiple Projects",
    image: "/images/office.jpg",
  },
  {
    title: "Government institutions",
    subtitle: " IT Parks",
    image: "/images/software.jpg",
  },
  {
    title: "University fit out",
    subtitle: "Corporate Projects",
    image: "/images/data.jpg",
  },
  {
    title: "Hospitality",
    subtitle: "Premium Spaces",
    image: "/images/office1.jpg",
  },
  {
    title: "Social lobby",
    subtitle: "Multi-storey Buildings",
    image: "/images/acp.jpg",
  },
];

export default function LatestProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // ✅ type fixed

  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="bg-[#bf852b] text-white p-10 lg:w-1/3 flex flex-col justify-center items-start space-y-6 min-h-[450px]">
          <h2 className="text-4xl font-light">
            Our Latest{" "}
            <span className="bg-white text-[#bf852b] px-2 font-semibold">
              PROJECTS
            </span>
          </h2>
          <p className="text-7xl font-light font-open-sans">6</p>
          <p className="text-xl">of our latest projects</p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-2/3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden h-60 cursor-pointer"
              onClick={() => setSelectedImage(proj.image)} // ✅ Works now
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeInOut" }}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover transform group-hover:scale-110 transition duration-500 ease-in-out "
              />
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(rgba(255,255,255,0.2) 70%, #bf852b )",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-sm font-open-sans">{proj.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] h-[80%]">
            <Image
              src={selectedImage}
              alt="Full View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
