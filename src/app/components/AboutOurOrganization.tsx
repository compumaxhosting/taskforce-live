"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";

export default function AboutOurOrganization() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          {/* Image 1 */}
          <div className="w-full md:w-1/2 h-[400px]">
            <Image
              src="/bathroom.jpg"
              alt="Bathroom Interior"
              width={600}
              height={400}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Image 2 with overlay */}
          <div className="w-full md:w-1/2 h-[400px] relative">
            <Image
              src="/meeting-room.jpg"
              alt="Meeting Room Interior"
              width={600}
              height={400}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#c28b2c] text-white text-sm md:text-base font-medium px-4 py-2">
              Turnkey Interior
              <br />
              Solutions Since 1990
            </div>
          </div>
        </div>

        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-gray-800">
            <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">ABOUT</span>
            <span className="text-black">Our Organization</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify">
            <span className="font-semibold">Task Force Interiors</span> is a
            leading name in the
            <span className="font-semibold"> interior fit-out industry</span>,
            delivering turnkey solutions with precision, speed, and reliability.
            With a strong foundation built on expertise and innovation, we
            specialize in executing large-scale{" "}
            <span className="font-semibold">
              healthcare, corporate, retail,
            </span>{" "}
            and
            <span className="font-semibold"> hospitality</span> projects across
            India.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Our Strengths at a Glance:
          </h3>

          {/* Bullets */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-gray-800 font-open-sans">
            {[
              "30+ years of industry experience in delivering end-to-end fit-out solutions",
              "500+ in-house skilled professionals across carpentry, MEP, civil, and finishing works",
              "Fully integrated factory with in-house manufacturing of modular furniture, plywood, and laminates",
              "Proven track record of on-time delivery with uncompromised quality and safety standards",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheck
                  className="mt-1 shrink-0 text-[#c28b2c]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Read More / Read Less toggle */}
          <div className="relative">
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                expanded ? "max-h-[1500px]" : "max-h-0"
              }`}
              aria-hidden={!expanded}
            >
              {/* Hidden content */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-gray-800 font-open-sans mt-3">
                <li className="flex items-start gap-2">
                  <FaCheck
                    className="mt-1 shrink-0 text-[#c28b2c]"
                    aria-hidden="true"
                  />
                  <span>
                    Long-standing partnerships with top architects, developers,
                    and PMC
                  </span>
                </li>
              </ul>

              <div className="space-y-4 pt-4">
                <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify">
                  With{" "}
                  <span className="font-semibold">vertical integration</span> at
                  the core of our operations, we maintain complete control over
                  quality, timelines, and costs. This unique model allows us to
                  deliver projects efficiently, ensuring maximum value for our
                  clients.
                </p>

                <p className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify">
                  At <span className="font-semibold">Task Force Interiors</span>
                  , we stand for{" "}
                  <span className="font-semibold">quality, transparency,</span>{" "}
                  and{" "}
                  <span className="font-semibold">long-term relationships</span>
                  . Our focus remains on creating functional, sustainable, and
                  aesthetically superior spaces that exceed expectations.
                </p>

                {/* Optional CTA */}
                <div className="pt-2">
                  <Link
                    href="/aboutus"
                    className="inline-flex px-6 h-10 items-center justify-center bg-[#c28b2c] text-white text-lg font-grotesk hover:bg-[#a97c20] transition"
                  >
                    Visit Full About Page
                  </Link>
                </div>

                {/* Socials (fixed: unique labels + icons hidden) */}
                <nav aria-label="Follow us" className="flex gap-3 pt-4">
                  {[
                    {
                      name: "Facebook",
                      icon: FaFacebookF,
                      url: "https://www.facebook.com/p/Taskforce-Interiors-61574866478910/",
                      label: "Visit our Facebook page",
                    },
                    {
                      name: "X (Twitter)",
                      icon: SiX,
                      url: "https://twitter.com/",
                      label: "Visit our X (Twitter) profile",
                    },
                    {
                      name: "Instagram",
                      icon: FaInstagram,
                      url: "https://www.instagram.com/taskforce.interiors/?igsh=MWx4MDJ0c2NycGpqeg%3D%3D#",
                      label: "Visit our Instagram profile",
                    },
                    {
                      name: "LinkedIn",
                      icon: FaLinkedinIn,
                      url: "https://in.linkedin.com/company/taskforceinteriors",
                      label: "Visit our LinkedIn page",
                    },
                  ].map(({ name, icon: Icon, url, label }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 border border-[#c28b2c] text-[#c28b2c] flex items-center justify-center text-base hover:bg-[#c28b2c] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#c28b2c]/60"
                      title={name}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-3 inline-flex items-center gap-2 text-[#c28b2c] font-semibold hover:underline"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
