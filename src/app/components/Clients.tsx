"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const clients = [
  { src: "/logos/1.jpeg", alt: "1" },
  { src: "/logos/2.jpeg", alt: "2" },
  { src: "/logos/3.png", alt: "3" },
  { src: "/logos/4.jpg", alt: "4" },
  { src: "/logos/5.jpg", alt: "5" },
  { src: "/logos/6.jpg", alt: "6" },
  { src: "/logos/7.jpg", alt: "7" },
  { src: "/logos/8.jpg", alt: "8" },
  { src: "/logos/9.jpg", alt: "9" },
  { src: "/logos/10.jpg", alt: "10" },
  { src: "/logos/11.jpg", alt: "11" },
  { src: "/logos/12.jpg", alt: "12" },
  { src: "/logos/13.jpg", alt: "13" },
  { src: "/logos/14.jpg", alt: "14" },
  { src: "/logos/15.jpg", alt: "15" },
  { src: "/logos/16.jpg", alt: "16" },
  { src: "/logos/17.jpg", alt: "17" },
  { src: "/logos/18.jpg", alt: "18" },
  { src: "/logos/19.jpg", alt: "19" },
  { src: "/logos/20.jpg", alt: "20" },
  { src: "/logos/21.jpg", alt: "21" },
  { src: "/logos/22.jpg", alt: "22" },
  { src: "/logos/23.jpg", alt: "23" },
  { src: "/logos/24.jpg", alt: "24" },
  { src: "/logos/25.jpg", alt: "25" },
  { src: "/logos/26.jpg", alt: "26" },
  { src: "/logos/27.jpg", alt: "27" },
  { src: "/logos/28.png", alt: "28" },
  { src: "/logos/29.jpg", alt: "29" },
  { src: "/logos/30.jpg", alt: "30" },
  { src: "/logos/31.png", alt: "31" },
  { src: "/logos/32.png", alt: "32" },
  { src: "/logos/33.png", alt: "33" },
  { src: "/logos/34.png", alt: "34" },
  { src: "/logos/35.png", alt: "35" },
  { src: "/logos/36.png", alt: "36" },
  { src: "/logos/37.png", alt: "37" },
  { src: "/logos/38.png", alt: "38" },
  { src: "/logos/39.png", alt: "39" },
  { src: "/logos/40.png", alt: "40" },
  { src: "/logos/41.png", alt: "41" },
  { src: "/logos/42.png", alt: "42" },
  { src: "/logos/43.png", alt: "43" },
  { src: "/logos/44.png", alt: "44" },
  { src: "/logos/45.png", alt: "45" },
  { src: "/logos/46.png", alt: "46" },
  { src: "/logos/47.png", alt: "47" },
  { src: "/logos/48.png", alt: "48" },
  { src: "/logos/49.png", alt: "49" },
  { src: "/logos/50.png", alt: "50" },
  { src: "/logos/51.png", alt: "51" },
  { src: "/logos/52.png", alt: "52" },
  { src: "/logos/53.png", alt: "53" },
  { src: "/logos/54.png", alt: "54" },
  { src: "/logos/55.png", alt: "55" },
  { src: "/logos/56.png", alt: "56" },
  { src: "/logos/57.png", alt: "57" },
  { src: "/logos/58.png", alt: "58" },
  { src: "/logos/59.png", alt: "59" },
  { src: "/logos/60.png", alt: "60" },
];

const Clients = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="w-full aspect-[3/2] flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={450}
                height={300}
                className="object-contain max-h-44"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
