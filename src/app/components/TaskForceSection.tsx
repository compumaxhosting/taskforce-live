"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { id: 1, src: "/task-force.jpg", alt: "Task Force Interior" },
  { id: 2, src: "/working-background.JPG", alt: "Working Background" },
  { id: 3, src: "/b3-copy.jpg", alt: "Nature of Work Undertaken" },
];

export default function TaskForceSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      {/* Moving background shape */}
      <div
        className="absolute top-[61%] left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/bg-hero-img.png')",
          backgroundRepeat: "repeat-x",
          animation: "slidetwo 40s linear infinite",
          opacity: 0.25,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left content (STATIC) */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-oswald text-3xl font-bold text-white uppercase leading-normal">
              Task FORCE INTERIOR (P) LTD.
            </h2>
            <p className="text-xl mt-3 text-white leading-relaxed">
              Task Force Interior (P) Ltd. is led by seasoned professionals with
              extensive expertise in civil engineering and interior design,
              prioritizing the efficient management of turnkey projects.
            </p>

            <h2 className="font-oswald text-3xl font-bold text-[#ffda08] uppercase leading-normal">
              WORKING BACKGROUND
            </h2>
            <p className="text-xl mt-3 text-white leading-relaxed font-openSans">
              Our company boasts a strong history of delivering successful
              projects, spanning upscale office and showroom interior
              decoration, software centers, BPOs, and data centers. We excel in
              crafting atriums and providing ACP and glass cladding for
              multi-storey buildings in Hyderabad and other major cities. Our
              clientele includes multinational corporations and corporate
              entities, testament to their trust in our expertise. Furthermore,
              our portfolio extends to completing interiors for over
              thirty-eight hospitals across India, highlighting our versatility
              and unwavering commitment to excellence across diverse sectors.
            </p>

            <h2 className="font-oswald text-3xl font-bold text-white uppercase leading-normal">
              NATURE OF WORK UNDERTAKEN
            </h2>
            <p className="text-xl mt-3 text-white leading-relaxed">
              Our specialization encompasses a comprehensive array of services,
              spanning false ceiling installation, flooring solutions, cladding,
              furnishing, carpentry, electrical work, painting, polishing, and
              partitioning utilizing diverse materials. Additionally, we excel
              in manufacturing MS furniture, casting, railings, and bespoke
              designer items tailored to our clients&apos; specifications.
              Furthermore, our capabilities extend to the construction of
              skylight atriums for exterior spaces and domes to enhance building
              connectivity.
            </p>
          </div>

          {/* Right image (DYNAMIC) */}
          <div className="lg:w-1/2">
            <Image
              key={images[currentImageIndex].id}
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={800}
              height={500}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] object-cover rounded shadow-md transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes slidetwo {
          from {
            background-position: 1920px 0;
          }
          to {
            background-position: 0 0;
          }
        }
      `}</style>
    </section>
  );
}
