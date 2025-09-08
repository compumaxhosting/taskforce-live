"use client";

import { FaEnvelope } from "react-icons/fa";
import clsx from "clsx";

export default function Services() {
  return (
    <section className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl text-black mb-6">
          Interior Fit-Out{" "}
          <span className="px-2 py-1 bg-[#e6f0ef] text-[#be892c]">
            SERVICES
          </span>
        </h2>

        {/* Layout wrapper: Left Content + Right Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-4 leading-relaxed text-base font-open-sans md:text-justify">
              We specialize in delivering complete{" "}
              <strong>interior fit-out solutions</strong>
              that transform empty spaces into functional, aesthetically refined
              environments. From initial design to final execution, our team
              manages every aspect to ensure seamless integration of style,
              comfort, and utility.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-base font-open-sans md:text-justify">
              Our expertise covers a wide range of applications including
              corporate offices, commercial complexes, retail spaces,
              hospitality projects, and luxury residences — all executed to the
              highest standards of craftsmanship and project management.
            </p>

            {/* Phone Box */}
            <a
              href="mailto:info@taskforceinteriors.com"
              className="flex w-full max-w-md rounded overflow-hidden shadow-sm cursor-pointer mt-4"
            >
              <div className="bg-[#be892c] text-white p-6 flex items-center justify-center">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="bg-[#e6f0ef] p-4 flex flex-col justify-center w-full">
                <span className="text-xl font-semibold text-black">
                  info@taskforceinteriors.com
                </span>
                <span className="text-sm text-gray-700 mt-1">
                  Write to us for project inquiries and collaborations
                </span>
              </div>
            </a>
          </div>

          {/* RIGHT SIDE - Services Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard
              title="False Ceiling"
              description="Modern false ceiling designs using premium materials."
              color="yellow"
            />
            <ServiceCard
              title="Flooring Systems"
              description="Complete flooring installation and finishing."
              color="sky"
            />
            <ServiceCard
              title="Mill Work"
              description="Precision-crafted mill work for interiors and exteriors."
              color="sky"
            />
            <ServiceCard
              title="Modular Furniture"
              description="Custom modular and MS furniture solutions."
              color="yellow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  description: string;
  color: "yellow" | "sky";
};

const ServiceCard = ({ title, description, color }: CardProps) => {
  const isYellow = color === "yellow";

  return (
    <div
      className={clsx("p-6 min-h-[140px] transition-colors duration-300", {
        "bg-[#be892c] text-white hover:bg-[#e6f0ef] hover:text-black": isYellow,
        "bg-[#e6f0ef] text-black hover:bg-[#be892c] hover:text-white":
          !isYellow,
      })}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed font-open-sans">{description}</p>
    </div>
  );
};
