"use client";

import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What kind of projects have you completed?",
    answer:
      "We have successfully completed works such as interior decorating of posh offices and showrooms, software centers, BPOs, data centers, and fabrication of atriums, ACP cladding, and glass cladding for multi-storey buildings in Hyderabad and other metros for clientele including multinationals and corporate houses. We have also completed more than thirty-eight hospital interiors throughout India.",
  },
  {
    question: "Do you work with hospitals and medical centers?",
    answer:
      "Yes, we have completed interiors for over thirty-eight hospitals across India. Our experience in the healthcare sector ensures functional, hygienic, and aesthetically pleasing environments.",
  },
  {
    question: "Are your services available outside Hyderabad?",
    answer:
      "Absolutely. While Hyderabad is our base, we've completed projects in multiple metro cities across India, including hospital interiors, office setups, and showroom design.",
  },
  {
    question: "What kind of clients do you usually work with?",
    answer:
      "Our clientele includes multinational corporations, large enterprises, hospitals, software parks, and premium retail spaces. We pride ourselves on delivering tailored interior solutions that match the needs of every industry.",
  },
  {
    question: "Do you provide turnkey solutions?",
    answer:
      "Yes. We specialize in turnkey interior solutions — managing every aspect from design and materials to implementation and final handover, so you don’t have to deal with multiple vendors.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">FAQ</span>
          <span className="text-black">Frequently Asked Questions</span>
        </motion.h2>

        <div className="space-y-8">
          {faqs.map(({ question, answer }, idx) => (
            <motion.div
              key={idx}
              className="border-l-4 border-yellow-600 pl-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FaQuestionCircle className="text-yellow-600" />
                {question}
              </h3>
              <p className="mt-2 text-gray-700 text-base font-open-sans md:text-justify leading-relaxed">
                {answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
