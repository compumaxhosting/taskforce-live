"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BackToTopButton from "./BackToTopButton";
import Link from "next/link";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#eef9f9] text-[#000000] text-md">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo Only - Full Size */}
        <div className="w-full flex items-center">
          <Image
            src="/logo.png"
            alt="Taskforce Logo"
            width={800} // Adjust if needed
            height={200}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-black text-2xl font-semibold mb-4">
            Get In Touch
          </h4>
          <p className="mb-1 font-open-sans">📍 3-5-823, Ground Floor</p>
          <p className="mb-1 font-open-sans">Hyderabad Business Center</p>
          <p className="mb-1 font-open-sans">Hyderguda Hyderabad - 500029</p>

          <p className="mt-3">
            📞{" "}
            <a
              href="tel:04023240629"
              className="hover:underline font-open-sans"
            >
              040-23240629
            </a>{" "}
            /{" "}
            <a
              href="tel:04066669067"
              className="hover:underline font-open-sans"
            >
              040-66669067
            </a>
          </p>

          <p className="mt-1">
            ✉️{" "}
            <a
              href="mailto:info@taskforceinteriors.com"
              className="hover:underline"
            >
              info@taskforceinteriors.com
            </a>
          </p>

          <div className="flex gap-2 mt-4">
            <a
              href="https://www.facebook.com/p/Taskforce-Interiors-61574866478910/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9974b] text-[#c9974b] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9974b] text-[#c9974b] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
            >
              <SiX size={16} />
            </a>
            <a
              href="https://www.instagram.com/taskforceinteriors17/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9974b] text-[#c9974b] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/taskforceinteriors/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9974b] text-[#c9974b] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Popular Link */}
        <div>
          <h4 className="text-black text-2xl font-semibold mb-4">
            Popular Links
          </h4>
          <ul className="space-y-2 text-black">
            <li>
              ❯ <Link href="/">Home</Link>
            </li>
            <li>
              ❯ <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              ❯ <Link href="/ourteam">Our Team</Link>
            </li>
            <li>
              ❯ <Link href="/gallery">Our Projects</Link>
            </li>
            <li>
              ❯ <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-black text-2xl font-semibold mb-4">More</h4>
          <ul className="space-y-2 text-gray-800">
            <li>
              ❯{" "}
              <Link href="/ourequipments" className="hover:text-yellow-700">
                Manufacturing Plant
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/contact" className="hover:text-yellow-700">
                Contact
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/clients" className="hover:text-yellow-700">
                Our Clients
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/faq" className="hover:text-yellow-700">
                FAQ
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/csr" className="hover:text-yellow-700">
                CSR
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2d1b0a] py-4 px-6 text-center text-lx flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 max-w-7xl mx-auto">
        <p className="text-sm md:text-base">
          ©{" "}
          <Link href="/" className="font-bold">
            2025 Task Force Interiors Pvt. Ltd
          </Link>
          , All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base">
          <Link href="/">Home</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/services">Services</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/gallery">Gallery</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Back to Top */}
      <BackToTopButton />
    </footer>
  );
}
