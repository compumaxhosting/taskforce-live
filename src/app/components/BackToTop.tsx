"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="scrollButton"
          initial={{ y: -1100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 60 }}
          className="fixed bottom-6 right-6 w-[100px] h-[100px] z-50 hidden [@media(min-width:400px)]:block"
        >
          {/* Ripple Animation */}
          <motion.div
            className="absolute w-full h-full bg-[#ffda08] rounded-full pointer-events-none"
            animate={{
              scale: [0.4, 1.5],
              opacity: [0.9, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

          {/* Clickable Button */}
          <motion.div
            onClick={scrollToTop}
            className="absolute top-5 left-5 w-[60px] h-[60px] bg-[#ffda08] rounded-full flex items-center justify-center z-10 shadow-md cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaArrowUp size={20} className="text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
