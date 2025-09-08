"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function ComingSoon() {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-white min-h-[80vh] flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="Coming Soon"
              width={300}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            <span className="bg-[#e6f0ef] text-[#c28b2c] px-3 mr-2">
              COMING
            </span>
            <span className="text-black">SOON</span>
          </h2>
          <p className="text-gray-700 text-base font-open-sans leading-relaxed">
            We&apos;re building something amazing for you. Stay tuned while we
            put the final touches on our brand-new experience.
          </p>

          <p className="text-gray-700 text-sm font-open-sans">
            For any urgent inquiries, feel free to contact us or follow our
            social handles below.
          </p>

          {/* Buttons and Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <Link href="/" passHref>
              <button className="w-36 h-11 bg-[#c28b2c] text-white text-lg font-grotesk hover:bg-[#a97c20] transition">
                Home
              </button>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, SiX, FaInstagram, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 border border-[#c28b2c] text-[#c28b2c] flex items-center justify-center hover:bg-[#c28b2c] hover:text-white transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
