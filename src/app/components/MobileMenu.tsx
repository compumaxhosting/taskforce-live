"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
  dropdownLinks: NavLink[];
  closeMenu: () => void;
};

const menuVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      type: "tween" as const,
      duration: 0.6,
      ease: "easeInOut" as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function MobileMenu({
  navLinks,
  dropdownLinks,
  closeMenu,
}: MobileMenuProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
      className="lg:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white px-6 py-8 shadow-lg z-50 overflow-y-auto"
    >
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image src="/logo.png" alt="Logo" width={140} height={50} priority />
      </div>

      {/* Main nav links */}
      <div className="space-y-4">
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            variants={linkVariants}
            className="block py-2 text-gray-700 text-base hover:text-yellow-600"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Dropdown links */}
      <div className="mt-6 ml-4 space-y-2">
        {dropdownLinks.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            variants={linkVariants}
            className="block py-1 text-sm text-gray-600 hover:text-yellow-600"
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      {/* Company Info */}
      <motion.div
        variants={linkVariants}
        className="mt-8 text-sm text-gray-700 leading-relaxed border-t pt-6 border-gray-200"
      >
        <p className="font-semibold">TASK FORCE INTERIOR (P) LTD.</p>
        <p>3-5-823, Ground Floor</p>
        <p>Hyderabad Business Center</p>
        <p>Hyderguda, Hyderabad - 500029</p>
        <p className="mt-2">
          📞{" "}
          <a href="tel:04023240629" className="hover:text-yellow-600">
            040-23240629
          </a>{" "}
          /{" "}
          <a href="tel:04066669067" className="hover:text-yellow-600">
            040-66669067
          </a>
        </p>
        <p className="mt-1">
          ✉️{" "}
          <a
            href="mailto:info@taskforceinteriors.com"
            className="hover:text-yellow-600"
          >
            info@taskforceinteriors.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
