"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    name: "Modular Furniture",
    img: "/icon/nightstand.png",
    desc: "Modern modular furniture design and installation.",
  },
  {
    name: "Civil Works",
    img: "/icon/civil.png",
    desc: "Civil construction, modifications, and renovations.",
  },
  {
    name: "Building MGMT Systems",
    img: "/icon/skyline.png",
    desc: "Comprehensive building management and automation systems.",
  },
  {
    name: "CCTV",
    img: "/icon/cctv-camera.png",
    desc: "Advanced surveillance and security camera installations.",
  },
  {
    name: "Kitchen Works",
    img: "/icon/kitchen.png",
    desc: "Complete kitchen installations with modern equipment.",
  },
  {
    name: "Fabrication Works",
    img: "/icon/bending.png",
    desc: "Custom metal fabrication and structural steelwork.",
  },
  {
    name: "Soft Furniture",
    img: "/icon/sofa.png",
    desc: "Seating solutions, upholstery, and soft furnishing installs.",
  },
  {
    name: "Plumbing & Sanitary Works",
    img: "/icon/plumbing.png",
    desc: "Plumbing systems, sanitary installations, and water solutions.",
  },
  {
    name: "Fire Detection",
    img: "/icon/fire.png",
    desc: "Fire detection systems and emergency safety equipment.",
  },
  {
    name: "Flooring Systems",
    img: "/icon/floor.png",
    desc: "High-quality flooring installations for commercial and residential spaces.",
  },
  {
    name: "Joinery Works - partitions",
    img: "/icon/joint.png",
    desc: "Custom woodwork, partitions, and joinery services.",
  },
  {
    name: "HVAC",
    img: "/icon/air-conditioning.png",
    desc: "Heating, ventilation, and air conditioning systems.",
  },
  {
    name: "Painting Works",
    img: "/icon/paint-roller.png",
    desc: "Interior and exterior painting with premium finishes.",
  },
  {
    name: "Seating Systems",
    img: "/icon/car-seat.png",
    desc: "Ergonomic and auditorium seating solutions.",
  },

  {
    name: "Labs",
    img: "/icon/microscope.png",
    desc: "Laboratory installations and scientific workspace setup.",
  },
  {
    name: "Access control Systems",
    img: "/icon/money-transfer.png",
    desc: "Access systems, biometric security, and management.",
  },
  {
    name: "False Ceiling",
    img: "/icon/ceiling.png",
    desc: "False ceiling design and installation services.",
  },
  {
    name: "Electrical Works",
    img: "/icon/electric-panel.png",
    desc: "Electrical wiring, lighting, and power distribution.",
  },
];

const lgYellowIndices = [1, 3, 4, 6, 9, 11, 12, 14];

export default function CompleteRangeOfServices() {
  return (
    <section className="px-4 md:px-16 py-12">
      <div className="text-center mb-12">
        {/* <h2 className="text-3xl md:text-5xl mb-4">
          General contacting &{" "}
          <span className="text-yellow-600">Civil and Interiors</span>
        </h2> */}
        <div className="text-center mb-6">
          <p className="text-yellow-600 text-lg md:text-3xl font-medium">
            A PAN India Leader in Commercial and Workplace Fitout: Design-Build
            | Base Build | General Contract |
          </p>
        </div>
        <p className="text-gray-600 text-lg font-open-sans">
          From concept to completion, we deliver excellence across all
          construction and interior domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const isLgYellow = lgYellowIndices.includes(index);
          const isSmallAlt = index % 2 === 0;

          const smallBg = isSmallAlt
            ? "bg-yellow-600 text-white"
            : "bg-slate-100 text-gray-900";
          const smallHover = isSmallAlt
            ? "hover:bg-slate-100 hover:text-black"
            : "hover:bg-yellow-600 hover:text-white";

          const lgBg = isLgYellow
            ? "lg:bg-yellow-600 lg:text-white"
            : "lg:bg-slate-100 lg:text-gray-900";
          const lgHover = isLgYellow
            ? "lg:hover:bg-slate-100 lg:hover:text-black"
            : "lg:hover:bg-yellow-600 lg:hover:text-white";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`w-full max-w-[340px] aspect-[1/1] mx-auto px-4 py-6 text-center transition-all duration-300 cursor-pointer flex flex-col justify-center items-center 
              ${smallBg} ${smallHover} ${lgBg} ${lgHover}`}
            >
              <Image
                src={service.img}
                alt={service.name}
                width={48}
                height={48}
                className="mb-3"
              />
              <h5 className="text-xl font-semibold mb-1">{service.name}</h5>
              <p className="text-base leading-relaxed font-open-sans">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
