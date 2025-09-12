"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { useMemo, useRef, useState, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
  dropdownLinks: NavLink[];
  closeMenu: () => void;
};

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const menuVariants: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: EASE,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0 },
};

/** Slide-down using measured height */
function Collapsible({
  open,
  children,
  duration = 0.28,
}: {
  open: boolean;
  children: React.ReactNode;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const measure = () => setHeight(el.scrollHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, children]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration, ease: EASE }}
          style={{ overflow: "hidden" }}
        >
          <div ref={ref}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MobileMenu({
  navLinks,
  dropdownLinks,
  closeMenu,
}: MobileMenuProps) {
  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  const { primary, overflow } = useMemo(() => {
    return { primary: [] as NavLink[], overflow: dropdownLinks };
  }, [dropdownLinks]);

  const hasOverflow = overflow.length > 0;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
      className="lg:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-[#eef9f9] px-6 py-8 shadow-lg z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.png"
            alt="taskforce interiors logo"
            width={140}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Main nav links */}
      <div className="space-y-2">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              variants={linkVariants}
              className={`block py-1 text-base transition-colors ${
                active
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-700 hover:text-yellow-600"
              }`}
            >
              {link.label}
            </motion.a>
          );
        })}
      </div>

      {/* Mobile "More" dropdown */}
      <div className="mt-6">
        {primary.length > 0 && (
          <div className="ml-4 space-y-1">
            {primary.map((item) => {
              const active = pathname === item.href;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  variants={linkVariants}
                  className={`block py-0.5 text-sm transition-colors ${
                    active
                      ? "text-yellow-700 font-semibold"
                      : "text-gray-600 hover:text-yellow-600"
                  }`}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </div>
        )}

        {hasOverflow && (
          <div className="ml-2">
            <button
              type="button"
              onClick={() => setShowMore((s) => !s)}
              aria-expanded={showMore}
              aria-controls="mobile-more-dropdown"
              className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded px-1"
            >
              <span>{showMore ? "Less" : "More"}</span>
              <span
                className={`transition-transform inline-block ${
                  showMore ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div id="mobile-more-dropdown" className="mt-2 ml-2">
              <Collapsible open={showMore}>
                <div className="space-y-1">
                  {overflow.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block py-0.5 text-sm transition-colors ${
                          active
                            ? "text-yellow-700 font-semibold"
                            : "text-gray-600 hover:text-yellow-600"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </Collapsible>
            </div>
          </div>
        )}
      </div>
      {/* Socials */}
      <div className="flex gap-2 mt-4">
        <a
          href="https://www.facebook.com/p/Taskforce-Interiors-61574866478910/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#c9974b] text-[#1877F2] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#c9974b] text-black p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
        >
          <SiX size={16} />
        </a>
        <a
          href="https://www.instagram.com/taskforce.interiors/?igsh=MWx4MDJ0c2NycGpqeg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#c9974b] text-[#E4405F] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
        >
          <FaInstagram size={16} />
        </a>
        <a
          href="https://in.linkedin.com/company/taskforceinteriors"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#c9974b] text-[#0A66C2] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
        >
          <FaLinkedinIn size={16} />
        </a>
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
