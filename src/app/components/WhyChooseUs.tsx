"use client";

import {
  FaCalendarAlt,
  FaHospitalAlt,
  FaBuilding,
  FaCogs,
  FaIndustry,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarAlt className="text-[#c28b2c] text-5xl mb-4" />,
    title: "Extensive Experience",
    description:
      "Led by seasoned professionals with extensive expertise in civil engineering and interior design, prioritizing efficient management of turnkey projects",
  },
  {
    icon: <FaHospitalAlt className="text-[#c28b2c] text-5xl mb-4" />,
    title: "35+ Hospital Projects",
    description:
      "Our portfolio extends to completing interiors for over seventy-five hospitals across India and Bangladesh, highlighting our versatility and commitment to excellence",
  },
  {
    icon: <FaBuilding className="text-[#c28b2c] text-5xl mb-4" />,
    title: "Corporate Projects",
    description:
      "Successful projects spanning upscale office and showroom interior decoration, software centers, BPOs, and data centers for multinational corporations",
  },
  {
    icon: <FaCogs className="text-[#c28b2c] text-5xl mb-4" />,
    title: "Turnkey Solutions",
    description:
      "Comprehensive services spanning false ceiling, flooring, cladding, furnishing, carpentry, electrical work, painting, and partitioning with diverse materials",
  },
  {
    icon: <FaIndustry className="text-[#c28b2c] text-5xl mb-4" />,
    title: "Manufacturing Expertise",
    description:
      "Excel in manufacturing MS furniture, casting, railings, and bespoke designer items tailored to clients' specifications with skylight atriums and domes",
  },
  {
    icon: <FaHandshake className="text-[#c28b2c] text-5xl mb-4" />,
    title: "Trusted by MNCs",
    description:
      "Our esteemed clientele includes multinational corporations and corporate entities who entrust us for our proven proficiency and unwavering dedication",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full px-4 py-16 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl mb-12">
          Why People{" "}
          <span className="bg-[#e6f0ef] text-[#c28b2c] px-2">CHOOSE US</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-xs font-open-sans md:text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
