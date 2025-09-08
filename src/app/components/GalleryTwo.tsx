"use client";

import { useState } from "react";
import Image from "next/image";
import ProcessManufacturing from "./ProcessManufacturing";
import Certificates from "./certificates";
import { Award } from "lucide-react";

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

export default function GalleryTwo() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + products.length) % products.length);
    }
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % products.length);
    }
  };

  return (
    <div className="px-6 py-12 bg-white">
      {/* Content Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-5xl text-gray-800 mb-6">
          <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">
            Manufacturing Excellence at
          </span>
          <span className="text-black">Task Force Interiors</span>
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg font-open-sans text-justify ">
          At <strong> [Task Force Interiors]</strong>, our in-house
          manufacturing capability is the backbone of our turnkey delivery
          model. By operating fully integrated facilities, we ensure{" "}
          <strong> complete control over quality, timelines, and costs,</strong>{" "}
          giving our clients a seamless experience from design to execution.
        </p>
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
            Our Facilities &amp; Capabilities
          </h3>

          <ul className="list-disc list-inside text-gray-700 leading-relaxed md:text-justify space-y-2 font-open-sans">
            <li>
              <strong>Modular Furniture Production –</strong> Precision-built
              workstations, partitions, storage solutions, and customized
              furniture tailored to modern corporate, healthcare, and
              hospitality environments.
            </li>
            <li>
              <strong>Plywood &amp; Laminates Unit –</strong> In-house
              production of plywood, laminates, and allied finishes, ensuring
              consistency, durability, and superior finishing across projects.
            </li>
            <li>
              <strong>Advanced Machinery –</strong> CNC cutting, edge-banding,
              press machines, and automated finishing lines to achieve scale,
              accuracy, and efficiency.
            </li>
            <li>
              <strong>Custom Solutions –</strong> Ability to design and
              manufacture bespoke elements that align with project-specific
              aesthetics and functionality.
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          {/* Our People */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
              Our People
            </h3>
            <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
              Over <strong>500+ skilled professionals</strong> across carpentry,
              finishing, and allied trades bring craftsmanship and expertise
              into every piece produced. Their skill, combined with modern
              technology, allows us to deliver both volume-driven orders and
              high-end customized requirements with equal excellence.
            </p>
          </div>

          {/* In-House Manufacturing Advantage */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
              The Advantage of In-House Manufacturing
            </h3>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed md:text-justify space-y-2 font-open-sans">
              <li>
                <strong>Consistency in Quality –</strong> Uniform standards
                across projects
              </li>
              <li>
                <strong>Time Efficiency –</strong> Reduced dependency on
                external vendors ensures faster turnaround
              </li>
              <li>
                <strong>Cost Control –</strong> Optimized procurement and
                production processes
              </li>
              <li>
                <strong>Flexibility –</strong> Agile to meet unique project
                specifications and timelines
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
              AtTask Force Interiors, manufacturing is not just a support
              function — it is a <strong>strategic advantage </strong> that
              empowers us to deliver projects with{" "}
              <strong> speed, precision, and unmatched value.</strong>
            </p>
            <div className="space-y-4 pt-6">
              <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-[#c28b2c]">
                <Award className="w-6 h-6 text-[#c28b2c]" />
                Our Certifications
              </h3>
              <Certificates />
            </div>
          </div>

          <ProcessManufacturing />
        </div>
      </div>
      <div className="max-full mx-auto mb-12">
        <div className="aspect-video">
          <video
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
            poster="/videos/video-thumbnail.png"
          >
            <source src="/videos/videoone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

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
            <div className="absolute inset-0 bg-yellow-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
