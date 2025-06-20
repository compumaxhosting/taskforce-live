"use client";

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Mr. Farruk Ali Khan",
    title: "MANAGING DIRECTOR",
    image: "/farruk.png",
  },
  {
    name: "Mr. Abid Ali Khan",
    title: "CEO",
    image: "/abid.jpeg",
  },
  {
    name: "Mr. Kashif Ali Khan",
    title: "DIRECTOR",
    image: "/kashif.png",
  },
];

export default function TeamSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="our-team" className="pb-20 px-4 bg-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-[#ffda08] font-bold tracking-widest text-[16px] md:text-[20px] uppercase">
          OUR PROFESSIONALS
        </p>
        <h2 className="font-oswald text-[40px] md:text-[60px] font-semibold leading-[70px] uppercase mt-2 text-gray-900 dark:text-black">
          <span>EXPERTS AND OUR</span>
          <br />
          <span className="text-[#ffda08]">TEAM MEMBERS</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {teamMembers.map((member, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="w-full max-w-sm relative transition-all duration-500"
            >
              {/* Clipped Background with sliding overlay */}
              <div className="relative h-40 overflow-hidden">
                {/* Static Background */}
                <div
                  className="absolute inset-0 bg-[#f9f4f1] z-0"
                  style={{
                    clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
                  }}
                />

                {/* Sliding Black Overlay */}
                <div
                  className={`absolute inset-0 z-10 bg-black transition-transform duration-500 ease-in-out ${
                    isHovered ? "translate-x-0" : "translate-x-full"
                  }`}
                  style={{
                    clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
                  }}
                />

                {/* Text Content */}
                <div className="absolute bottom-4 left-4 z-20 transition-colors duration-300">
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      isHovered ? "text-white" : "text-[#ffda08]"
                    }`}
                  >
                    {member.title}
                  </p>
                  <h3
                    className={`font-oswald text-[24px] font-normal leading-[34px] ${
                      isHovered ? "text-white" : "text-black"
                    }`}
                  >
                    {member.name}
                  </h3>
                </div>
              </div>
              {/* Image Section */}
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-[300px] object-cover rounded-sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
