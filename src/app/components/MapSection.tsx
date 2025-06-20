import Image from "next/image";
import React from "react";

const MapSection = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Logo and CONTACT US */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 relative">
            <Image
              src="/favicon1.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[#ffda08] tracking-widest text-xl md:text-2xl lg:text-3xl font-oswald">
            CONTACT US
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-oswald uppercase font-semibold leading-[70px] mb-8 text-white text-4xl md:text-5xl">
          TALK WITH US
        </h2>

        {/* Google Map */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded overflow-hidden">
          <iframe
            title="Task Force Interiors Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.124733233495!2d78.4778331!3d17.3999876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99deba49f73b%3A0x5862b9a2bff5334c!2sTASK%20FORCE%20INTERIORS%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1716368044701!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
