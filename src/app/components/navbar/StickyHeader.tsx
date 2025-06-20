"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ import

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Equipments", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
  {
    label: "More",
    href: "#",
    dropdown: [
      { label: "Our Clients", href: "/clients" },
      { label: "FAQ", href: "/faq" },
      { label: "CSR", href: "/csr" },
    ],
  },
];

function formatLabel(label: string) {
  const preserve = ["FAQ", "CSR"];
  if (preserve.includes(label.toUpperCase())) return label.toUpperCase();

  return label
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function StickyHeader() {
  const pathname = usePathname(); // ✅ get current path
  const [show, setShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className={`bg-black text-white shadow-lg z-[9999] w-full transition-transform duration-300 fixed top-0 left-0 hidden lg:flex ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 gap-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={250} height={150} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex space-x-6 text-xl font-bold tracking-wide relative z-[10000] font-oswald">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            if (item.dropdown) {
              // Check if any dropdown item is active
              const isDropdownActive = item.dropdown.some(
                (dropItem) => pathname === dropItem.href
              );

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span
                    className={`cursor-pointer flex items-center space-x-1 ${
                      isDropdownActive
                        ? "text-[#ffda08]"
                        : "hover:text-[#ffda08]"
                    }`}
                  >
                    <span>{formatLabel(item.label)}</span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        dropdownOpen
                          ? "rotate-180 text-[#ffda08]"
                          : "text-current"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full w-40 bg-white text-black shadow-md rounded-md py-2 z-[9999]">
                      {item.dropdown.map((dropItem, dropIndex) => {
                        const isDropActive = pathname === dropItem.href;

                        return (
                          <Link
                            key={dropIndex}
                            href={dropItem.href}
                            className={`block px-4 py-2 text-sm font-oswald ${
                              isDropActive
                                ? "bg-yellow-300 text-black"
                                : "hover:bg-yellow-300 hover:text-black"
                            }`}
                          >
                            {formatLabel(dropItem.label)}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={item.href}
                className={`transition-colors duration-200 font-oswald ${
                  isActive ? "text-[#ffda08]" : "hover:text-[#ffda08]"
                }`}
              >
                {formatLabel(item.label)}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
