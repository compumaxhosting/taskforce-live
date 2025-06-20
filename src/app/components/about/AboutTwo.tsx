import React from "react";
import Image from "next/image";

const AboutTwo = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:justify-start justify-between p-8 gap-8 relative bg-white text-black">
      {/* LEFT SECTION */}
      <div className="md:w-1/3 w-full text-center md:text-left">
        <p className="text-[#ffda08] tracking-widest text-sm font-bold md:text-lg uppercase">
          Welcome To
        </p>
        <h2 className="font-oswald text-4xl leading-tight md:text-[80px] md:leading-[90px] font-black mt-2">
          Creative
          <br />
          Solutions by
          <br />
          Professional
          <br />
          Designers
        </h2>
      </div>

      {/* MIDDLE SECTION - IMAGE */}
      <div
        className="relative md:w-1/3 w-full h-[400px]"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
      >
        <Image
          src="/task-force.jpg"
          alt="Creative Office Interior"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="md:w-1/3 w-full mt-8 md:mt-0">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-lg underline text-black hover:text-gray-600"
            >
              Design a perfect home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg underline text-black hover:text-gray-600"
            >
              Download our brochure
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg underline text-black hover:text-gray-600"
            >
              Ask us your questions our architect
            </a>
          </li>
        </ul>
        <p className="text-gray-700 text-sm mt-4">
          Specialize in preserving and restoring historical buildings, <br />{" "}
          employing expertise in architectural conservation, <br />{" "}
          documentation, and adaptive reuse strategies.
        </p>
        <div className="flex items-center mt-4">
          <Image
            src="/syed-adil.png"
            alt="Syed Adil"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="font-bold">Syed Adil</p>
            <p className="text-xs text-gray-600">Design Coordinator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
