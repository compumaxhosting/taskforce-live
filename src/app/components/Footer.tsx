"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
  { label: "Our Clients", href: "/clients" },
  { label: "FAQ", href: "/faq" },
  { label: "CSR", href: "/csr" },
];

export default function Footer() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 footer-grid-responsive">


        {/* Column 1: Logo + Description */}
        <div>
          <Image
            src="/logo.png"
            alt="Taskforce Interiors Logo"
            width={250}
            height={140}
            priority
          />
          <p className="mt-4 text-lg leading-relaxed max-w-xs">
            TASK FORCE INTERIOR (P) LTD. is an organization overseen by
            individuals with extensive experience in civil engineering, interior
            design, and the management of turnkey projects.
          </p>
        </div>

        {/* Column 2: Interior Design */}
        <div>
          <h3 className="font-bold uppercase tracking-wide text-xl">
            INTERIOR DESIGN
          </h3>
          <address className="not-italic text-lg leading-relaxed max-w-xs">
            <p>3-5-823, Ground Floor</p>
            <p>Hyderabad Business Center</p>
            <p>Hyderguda, Hyderabad - 500029</p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:04023240629"
                className="hover:text-[#ffda08] transition-colors duration-200"
              >
                040-23240629
              </a>{" "}
              /{" "}
              <a
                href="tel:04066669067"
                className="hover:text-[#ffda08] transition-colors duration-200"
              >
                040-66669067
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@taskforceinteriors.com"
                className="hover:text-[#ffda08] transition-colors duration-200"
              >
                info@taskforceinteriors.com
              </a>
            </p>
          </address>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="font-bold uppercase mb-4 tracking-wide text-xl">
            LINKS
          </h3>
          <ul className="space-y-2 text-sm max-w-xs">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-[#ffda08] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h3 className="font-bold uppercase mb-4 tracking-wide text-xl">
            FOLLOW US
          </h3>
          <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#ffda08] transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter/X"
              className="hover:text-[#ffda08] transition-colors duration-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/task-force-interiors/"
              aria-label="LinkedIn"
              className="hover:text-[#ffda08] transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/taskforceinteriors17/?hl=en"
              aria-label="Instagram"
              className="hover:text-[#ffda08] transition-colors duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
