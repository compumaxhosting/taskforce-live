"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import projects, { Project } from "../data/projects";

export default function PortFolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Row ref for horizontal scroll + helpers
  const scrollRowRef = useRef<HTMLDivElement | null>(null);
  const [atEnd, setAtEnd] = useState(false);

  // Track if we're at the end so we can wrap to start
  useEffect(() => {
    const row = scrollRowRef.current;
    if (!row) return;
    const checkEnd = () => {
      const { scrollLeft, clientWidth, scrollWidth } = row;
      const threshold = 16;
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - threshold);
    };
    checkEnd();
    row.addEventListener("scroll", checkEnd, { passive: true });
    window.addEventListener("resize", checkEnd);
    return () => {
      row.removeEventListener("scroll", checkEnd);
      window.removeEventListener("resize", checkEnd);
    };
  }, []);

  // Scroll by one card width (+ gap). Wrap to start if at end.
  const scrollToNext = useCallback(() => {
    const row = scrollRowRef.current;
    if (!row) return;

    const firstCard = row.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 300;

    // read the horizontal gap applied via Tailwind's gap-*
    const gapStr = (
      getComputedStyle(row).columnGap ||
      getComputedStyle(row).gap ||
      "0"
    ).replace("px", "");
    const gap = Number.parseFloat(gapStr) || 0;

    // if we're at the end, wrap back to start
    const { scrollLeft, clientWidth, scrollWidth } = row;
    const threshold = 16;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - threshold;

    if (isAtEnd) {
      row.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      row.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  }, []);

  const currentImages = useMemo(() => {
    return projects.find((p) => p.name === selectedProject)?.images || [];
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

  // Keyboard controls for the lightbox
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
      <div className="relative">
        <div
          ref={scrollRowRef}
          className="
            flex overflow-x-auto gap-4 pb-4
            pl-4 pr-4
          "
          aria-label="Scrollable list of projects"
        >
          {projects.map((project: Project) => (
            <div
              key={project.name}
              className="relative cursor-pointer flex-shrink-0 w-[300px]"
              onClick={() => {
                setSelectedProject(project.name);
                setLightboxIndex(null);
              }}
              role="button"
              aria-label={`Open ${project.name}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedProject(project.name);
                  setLightboxIndex(null);
                }
              }}
            >
              <div className="w-full h-[200px] relative rounded overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 80vw, 300px"
                />
                <div className="absolute bottom-0 w-full bg-yellow-600/80 text-white text-sm font-bold text-center py-1">
                  {project.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only Next button BELOW the row (desktop unchanged) */}
        <div className="md:hidden flex justify-center mb-2">
          <button
            type="button"
            onClick={scrollToNext}
            className="mt-1 inline-flex items-center gap-1 rounded-full bg-black/80 text-white text-sm font-medium px-4 py-2 shadow-md backdrop-blur-sm hover:bg-black/90 active:scale-[0.98] transition"
            aria-label={atEnd ? "Back to start" : "Next project"}
          >
            {atEnd ? "Back to start" : "Next project"} →
          </button>
        </div>
      </div>

      {/* Display Images of Selected Project (grid appears BELOW the button) */}
      {selectedProject && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {currentImages.map((img: string, idx: number) => (
            <div
              key={img}
              className="relative rounded overflow-hidden cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
              role="button"
              aria-label={`Open image ${idx + 1} of ${selectedProject}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIndex(idx);
              }}
            >
              <div className="relative w-full h-[200px] rounded overflow-hidden">
                <Image
                  src={img}
                  alt={`${selectedProject} image ${idx + 1}`}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 w-full bg-yellow-600/80 text-white text-xs text-center py-1">
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button */}
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
            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-4 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80"
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* Main */}
            <Image
              src={currentImages[lightboxIndex]}
              alt="Expanded"
              width={1200}
              height={800}
              className="max-h-[80vh] object-contain rounded border-4 border-gray-200 shadow-lg"
              onClick={(e) => e.stopPropagation()}
              priority
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-4 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80"
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
