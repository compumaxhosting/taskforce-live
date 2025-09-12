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
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDropdownActive = dropdownLinks.some((link) => link.href === pathname);

  const renderNav = (isSticky = false) => (
    <>
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Taskforce Interiors Logo"
            width={isSticky ? 130 : 150}
            height={isSticky ? 70 : 80}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="ml-auto hidden lg:flex items-center space-x-8">
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

        {/* Dropdown */}
        <div className="relative group">
          <button
            className={`flex items-center gap-1 text-lg font-medium transition-colors ${
              isDropdownActive
                ? "text-yellow-700 font-semibold"
                : "text-gray-800 hover:text-yellow-700"
            }`}
          >
            More <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-50">
            {dropdownLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
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
        className="lg:hidden ml-auto"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );

  return (
    <>
      {/* Default Header (Transparent) */}
      <header className="bg-transparent border-b border-white font-open z-30 relative">
        <div className="container mx-auto flex items-center px-6 py-4">
          {renderNav()}
        </div>
      </header>

      {/* Sticky Header (White, fades in on scroll) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
          showSticky
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto flex items-center px-6 py-3">
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
