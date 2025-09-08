"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl text-gray-800 text-center">
            <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">WHY</span>
            <span className="text-black">Choose Us</span>
          </h2>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed text-base md:text-lg md:text-justify font-open-sans">
            At <strong>Task Force Interiors</strong>, we don’t just design and
            build spaces — we craft environments that inspire, perform, and
            endure. With over two decades of proven expertise, we have
            transformed countless interiors across corporate, healthcare,
            retail, and large-scale commercial sectors, making us one of the
            most trusted names in turnkey interior solutions.
          </p>

          {/* Collapsible Content */}
          <motion.div
            initial={{ height: "auto" }}
            animate={{ height: expanded ? "auto" : "300px" }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden relative"
          >
            <div className="space-y-6">
              {/* 1 */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  1. Over 30 Years of Unmatched Experience
                </h3>
                <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
                  For more than three decades, Task Force Interiors has been
                  setting benchmarks in design innovation, execution quality,
                  and client satisfaction. Our experience enables us to take on
                  complex challenges with confidence and deliver results that
                  exceed expectations.
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  2. Strong In-House Capabilities
                </h3>
                <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
                  We believe excellence starts from within. Our{" "}
                  <strong>200+ in-house professionals</strong>, including{" "}
                  <strong>50+ project operations specialists</strong>, ensure
                  every project is executed with precision, efficiency, and
                  attention to detail — from the first drawing to the final
                  handover.
                </p>
              </div>

              {/* 3 */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  3. State-of-the-Art Manufacturing
                </h3>
                <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
                  Our{" "}
                  <strong>2-acre manufacturing facility in Hyderabad</strong>{" "}
                  produces world-class modular furniture, laminates, and
                  plywood. This in-house capability guarantees superior quality,
                  consistency, and faster project delivery while keeping costs
                  competitive.
                </p>
              </div>

              {/* 4 */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  4. Pan-India Project Delivery
                </h3>
                <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
                  With a proven footprint of{" "}
                  <strong>over 20 million sq. ft.</strong> of completed projects
                  across India, we bring versatility and expertise to spaces of
                  every scale. From premium office interiors to high-performance
                  healthcare environments, our adaptability sets us apart.
                </p>
              </div>

              {/* 5 */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  5. End-to-End Turnkey Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
                  From concept and design to manufacturing and execution, we
                  handle it all under one roof. This integrated approach
                  streamlines timelines, eliminates dependency on multiple
                  vendors, and ensures a seamless experience for our clients.
                </p>
              </div>

              {/* 6 */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  6. Commitment to Quality & Long-Term Relationships
                </h3>
                <p className="text-gray-700 leading-relaxed md:text-justify font-open-sans">
                  Our success is measured not just by completed projects but by
                  the lasting partnerships we build. We uphold transparency,
                  ethical practices, and unwavering dedication to delivering
                  what we promise — every single time.
                </p>
              </div>

              {/* Closing */}
              <p className="text-gray-800 font-medium md:text-lg font-open-sans">
                <strong>Task Force Interiors</strong> is more than a service
                provider — we are partners in bringing visions to life, creating
                spaces that reflect excellence, functionality, and lasting
                value.
              </p>
            </div>

            {/* Fade overlay when collapsed */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
            )}
          </motion.div>

          {/* Toggle Button */}
          <div className="text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-2 mt-4 text-white bg-[#c28b2c] hover:bg-[#a0721f] transition-all rounded-full font-medium"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
