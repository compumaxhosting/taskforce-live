"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Our Team", href: "/ourteam" },
  { label: "Our Projects", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Manufacturing Plant", href: "/ourequipments" },
  { label: "Contact", href: "/contact" },
];

const dropdownLinks = [
  { label: "Our Clients", href: "/clients" },
  { label: "CSR", href: "/csr" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent page scroll + horizontal overflow when mobile menu is open
  useEffect(() => {
    const el = document.documentElement; // <html>
    const body = document.body;

    if (menuOpen) {
      // Lock scrolling and clip possible transform overflow
      el.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");
      // Defensive: also clip X just in case
      el.classList.add("overflow-x-clip");
      body.classList.add("overflow-x-clip");
    } else {
      el.classList.remove("overflow-hidden", "overflow-x-clip");
      body.classList.remove("overflow-hidden", "overflow-x-clip");
    }

    return () => {
      el.classList.remove("overflow-hidden", "overflow-x-clip");
      body.classList.remove("overflow-hidden", "overflow-x-clip");
    };
  }, [menuOpen]);

  const isDropdownActive = dropdownLinks.some((link) => link.href === pathname);

  const renderNav = (isSticky = false) => (
    <>
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link href="/" aria-label="Go to home">
          <Image
            src="/logo.png"
            alt="Task Force Interior (P) Ltd. logo"
            width={isSticky ? 130 : 150}
            height={isSticky ? 70 : 80}
            className="object-contain cursor-pointer max-w-full h-auto"
            priority={isSticky}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav
        className="ml-auto hidden lg:flex items-center space-x-8"
        aria-label="Primary"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-lg font-medium transition-colors ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-700"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Dropdown (right-aligned to avoid overflow) */}
        <div
          className="relative"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button
            type="button"
            className={`flex items-center gap-1 text-lg font-medium transition-colors ${
              isDropdownActive || moreOpen
                ? "text-yellow-700 font-semibold"
                : "text-gray-800 hover:text-yellow-700"
            }`}
            aria-haspopup="menu"
            aria-expanded={moreOpen}
            aria-controls="more-menu"
            onClick={() => setMoreOpen((v) => !v)}
          >
            More <ChevronDown size={16} aria-hidden="true" />
          </button>

          <div
            id="more-menu"
            role="menu"
            aria-label="More"
            // Use right-0 instead of left-0 to prevent off-screen overflow on narrow viewports
            className={`absolute top-full right-0 min-w-48 bg-white shadow-md rounded-md z-50 ${
              moreOpen ? "block" : "hidden"
            }`}
          >
            {dropdownLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  role="menuitem"
                  className={`block px-4 py-2 text-sm transition-colors ${
                    active
                      ? "text-yellow-700 font-semibold bg-yellow-50"
                      : "text-gray-700 hover:text-yellow-700 hover:bg-yellow-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button
        type="button"
        className="lg:hidden ml-auto inline-flex items-center justify-center p-2"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        {menuOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>
    </>
  );

  return (
    <>
      {/* Default Header (Transparent) */}
      <header className="bg-transparent border-b border-white font-open z-30 relative overflow-x-clip w-full">
        <div className="container mx-auto flex items-center px-6 py-4 max-w-[1280px]">
          {renderNav()}
        </div>
      </header>

      {/* Sticky Header (White, fades in on scroll) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ease-in-out overflow-x-clip w-full ${
          showSticky
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto flex items-center px-6 py-3 max-w-[1280px]">
          {renderNav(true)}
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu
          navLinks={navLinks}
          dropdownLinks={dropdownLinks}
          closeMenu={closeMenu}
        />
      )}
    </>
  );
}
