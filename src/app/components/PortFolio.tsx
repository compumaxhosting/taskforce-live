"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import projects, { Project } from "../data/projects";

export default function PortFolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImages = useMemo(() => {
    return projects.find((proj) => proj.name === selectedProject)?.images || [];
  }, [selectedProject]);

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + currentImages.length) % currentImages.length
    );
  }, [lightboxIndex, currentImages]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % currentImages.length);
  }, [lightboxIndex, currentImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  return (
    <div className="w-full p-4">
      {/* Scrollable Projects Row */}
      <div className="flex overflow-x-auto gap-4 pb-4">
        {projects.map((project: Project) => (
          <div
            key={project.name}
            className="relative cursor-pointer flex-shrink-0"
            onClick={() => {
              setSelectedProject(project.name);
              setLightboxIndex(null);
            }}
          >
            <div className="w-[300px] h-[200px] relative rounded overflow-hidden">
              <Image
                src={project.cover}
                alt={project.name}
                fill
                className="object-cover rounded"
              />
              <div className="absolute bottom-0 w-full bg-yellow-600 bg-opacity-80 text-white text-sm font-bold text-center py-1">
                {project.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display Images of Selected Project */}
      {selectedProject && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((img: string, idx: number) => (
            <div
              key={img}
              className="relative rounded overflow-hidden cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <div className="relative w-full h-[200px] rounded overflow-hidden">
                <Image
                  src={img}
                  alt={`${selectedProject} image ${idx + 1}`}
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute bottom-0 w-full bg-yellow-600 bg-opacity-80 text-white text-xs text-center py-1">
                  {selectedProject}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Close Button in Top-Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white text-5xl font-bold hover:text-yellow-400 z-50"
            aria-label="Close"
          >
            ×
          </button>

          <div className="relative max-w-5xl w-full px-4 flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* Main Image */}
            <Image
              src={currentImages[lightboxIndex]}
              alt="Expanded"
              width={1200}
              height={800}
              className="max-h-[80vh] object-contain rounded border-4 border-gray-200 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
              aria-label="Next Image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
