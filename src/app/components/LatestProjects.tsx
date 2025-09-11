"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
    subtitle: "IT Parks",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Close on ESC when modal open; restore focus on close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener("keydown", onKey);
      // focus dialog
      requestAnimationFrame(() => dialogRef.current?.focus());
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedImage]);

  const openModal = (img: string, triggerEl: HTMLElement) => {
    lastFocusedRef.current = triggerEl;
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
    // restore focus to the tile button that opened it
    lastFocusedRef.current?.focus();
  };

  return (
    <section
      className="w-full px-4 py-10 bg-white"
      aria-labelledby="latest-projects-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="bg-[#bf852b] text-white p-10 lg:w-1/3 flex flex-col justify-center items-start space-y-6 min-h-[450px]">
          <h2 id="latest-projects-heading" className="text-4xl font-light">
            Our Latest{" "}
            <span className="bg-white text-[#bf852b] px-2 font-semibold">
              PROJECTS
            </span>
          </h2>
          <p
            className="text-7xl font-light font-open-sans"
            aria-describedby="projects-count-sr"
          >
            6
          </p>
          <p id="projects-count-sr" className="sr-only">
            Six of our latest projects
          </p>
          <p className="text-xl">Six of our latest projects</p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-2/3">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeInOut" }}
              className="relative"
            >
              {/* Use a button so it’s focusable and has semantics */}
              <button
                type="button"
                className="group relative overflow-hidden h-60 w-full cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#bf852b]"
                onClick={(e) => openModal(proj.image, e.currentTarget)}
                aria-label={`Open larger view: ${proj.title} – ${proj.subtitle}`}
              >
                <span className="absolute inset-0">
                  <Image
                    src={proj.image}
                    alt={`${proj.title} – ${proj.subtitle}`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </span>

                {/* gradient overlay */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0"
                  style={{
                    background:
                      "linear-gradient(rgba(255,255,255,0.2) 70%, #bf852b)",
                  }}
                />

                {/* caption */}
                <span className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10">
                  <span className="text-lg font-semibold">{proj.title}</span>
                  <span className="text-sm font-open-sans">
                    {proj.subtitle}
                  </span>
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Dialog */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          tabIndex={-1}
          ref={dialogRef}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 outline-none"
          onClick={closeModal}
        >
          {/* stop propagation so clicking the content doesn't close */}
          <div
            className="relative w-[90%] h-[80%] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 rounded-full px-3 py-1.5 bg-white/90 text-gray-900 text-sm font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close preview"
            >
              Close
            </button>

            <Image
              src={selectedImage}
              alt="Enlarged project image"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
