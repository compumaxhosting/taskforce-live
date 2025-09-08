"use client";

import { motion } from "framer-motion";

export default function Csr() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-gray-800 mb-6"
        >
          <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">CSR</span>
          <span className="text-black">Corporate Social Responsibility</span>
        </motion.h2>

        {/* Paragraphs Animation */}
        {[
          "At the heart of our CSR philosophy lies the idea of giving back and contributing to society. We firmly believe that responsible business practices can create a ripple effect, fostering sustainable development and benefiting all stakeholders involved.",
          "We are dedicated to supporting the communities in which we operate. By actively engaging with local organizations, charities, and educational institutions, we strive to create opportunities and empower individuals to lead better lives.",
          "Recognizing the importance of preserving the environment, we are committed to reducing our ecological footprint. Through sustainable practices, responsible waste management, and energy-efficient initiatives, we aim to protect our planet for future generations.",
          "Our employees are at the core of our success, and their well-being is paramount to us. We promote a safe and inclusive workplace that fosters professional growth, work-life balance, and a sense of belonging.",
        ].map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-base font-open-sans md:text-justify mb-4"
          >
            {text}
          </motion.p>
        ))}

        {/* Highlight Boxes Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8"
        >
          {[
            "Community Empowerment",
            "Environmental Stewardship",
            "Employee Well-being",
            "Ethical Practices",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="border p-4 rounded-lg bg-[#e6f0ef] text-[#c28b2c] font-semibold"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
