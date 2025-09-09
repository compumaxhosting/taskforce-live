"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import Map from "./Map";

/* ---------- tiny custom select (no packages) ---------- */
function CustomSelect({
  name,
  options,
  value,
  onChange,
  placeholder = "Select",
}: {
  name: string;
  options: { label: string; value: string }[];
  value: { label: string; value: string } | null;
  onChange: (v: { label: string; value: string }) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (
      !open &&
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
    ) {
      e.preventDefault();
      setOpen(true);
      setActiveIdx(
        Math.max(
          0,
          options.findIndex((o) => o.value === value?.value)
        )
      );
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = options[activeIdx] ?? options[0];
      onChange(opt);
      setOpen(false);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full border border-gray-300 px-4 py-3 rounded bg-white text-gray-700 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#c18832]"
      >
        <span>{value?.label ?? placeholder}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
        </svg>
      </button>

      {/* submit-friendly value */}
      <input type="hidden" name={name} value={value?.value ?? ""} />

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 w-full max-h-56 overflow-auto rounded-md border border-gray-200 bg-white shadow-lg"
        >
          {options.map((opt, idx) => {
            const active = idx === activeIdx;
            const selected = value?.value === opt.value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={selected}
                className={`cursor-pointer px-4 py-2 ${
                  active
                    ? "bg-[#c18832] text-white"
                    : "text-gray-700 hover:bg-[#c18832]/10"
                } ${selected ? "font-medium" : ""}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{opt.label}</span>
                  {selected && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.406 7.41a1 1 0 01-1.415 0L3.296 9.934a1 1 0 111.415-1.414l3.171 3.17 6.699-6.7a1 1 0 011.423 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
/* ------------------------------------------------------ */

/* --- CustomSelect stays unchanged (your code is fine) --- */

export default function ContactUs() {
  const connectionTypes = [
    { label: "Supplier", value: "supplier" },
    { label: "Join the Team (HR)", value: "hr" },
    { label: "Sub-contractor", value: "subcontractor" },
  ];
  const [selectedType, setSelectedType] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formType: string
  ) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (!data.name || !data.email || !data.message) {
      setMessage("⚠️ Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        e.currentTarget.reset();
        setSelectedType(null);
      } else {
        setMessage(`❌ Error: ${result.error || "Something went wrong"}`);
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setMessage(`❌ Failed to send message: ${errorMessage}`);
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#eef9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-8">
        {/* Left - Contact Form */}
        <div className="pb-10">
          <h2 className="text-3xl md:text-5xl text-center text-[#c18832] mb-2">
            Send Us A Message
          </h2>
          <p className="text-center text-gray-600 mb-10 font-open-sans">
            Have a project in mind? We&apos;d love to hear from you. Send us a
            message and we&apos;ll respond as soon as possible.
          </p>

          <form
            className="space-y-6"
            onSubmit={(e) => handleSubmit(e, "message")}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="flex-1 border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c18832]"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="flex-1 border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c18832]"
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c18832]"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#c18832]"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#c18832] text-white px-6 py-3 rounded hover:bg-[#a97322] transition inline-flex items-center gap-2"
            >
              <FaPaperPlane className="text-white" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right - Partner With Us */}
        <div className="pb-10">
          <h2 className="text-3xl md:text-5xl text-center text-[#c18832] mb-2">
            Partner With Us
          </h2>
          <p className="text-center text-gray-600 mb-10 font-open-sans">
            Connect as a supplier, apply to join our team, or register as a
            subcontractor.
          </p>

          <form
            className="space-y-6"
            onSubmit={(e) => handleSubmit(e, "partner")}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="name"
                type="text"
                placeholder="Full Name / Company Name"
                required
                className="flex-1 border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c18832]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="flex-1 border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c18832]"
              />
            </div>

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c18832]"
            />

            <CustomSelect
              name="connectionType"
              options={connectionTypes}
              value={selectedType}
              onChange={setSelectedType}
              placeholder="Select Connection Type"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us more (experience, offerings, etc.)"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#c18832]"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#c18832] text-white px-6 py-3 rounded hover:bg-[#a97322] transition inline-flex items-center gap-2"
            >
              <FaPaperPlane className="text-white" />
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {message && (
        <p className="text-center mt-6 font-medium text-gray-700">{message}</p>
      )}

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto mt-16 bg-white shadow-md rounded-lg p-10">
        <h3 className="text-3xl md:text-4xl text-[#c18832] mb-8 text-center">
          Contact Info
        </h3>

        <div className="grid sm:grid-cols-2 gap-8 text-gray-700">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#c18832] mt-1" />
            <div>
              <p className="font-medium text-[#c18832]">Our Location</p>
              <p className="font-open-sans">Hyderabad, Telangana, India</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-[#c18832] mt-1" />
            <div>
              <p className="font-medium text-[#c18832]">Call Us</p>
              <a
                href="tel:04023240629"
                className="hover:underline font-open-sans"
              >
                040-23240629
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#c18832] mt-1" />
            <div>
              <p className="font-medium text-[#c18832]">Email Us</p>
              <a
                href="mailto:info@taskforceinteriors.com"
                className="hover:underline font-open-sans"
              >
                info@taskforceinteriors.com
              </a>
              <br />
              <a
                href="mailto:business@taskforceinteriors.com"
                className="hover:underline font-open-sans"
              >
                business@taskforceinteriors.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="text-[#c18832] mt-1" />
            <div>
              <p className="font-medium text-[#c18832]">Working Hours</p>
              <p className="font-open-sans">Mon - Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-center text-gray-500 mt-10">
          Get in touch for turnkey interior solutions
        </p>
      </div>

      <Map />
    </section>
  );
}
