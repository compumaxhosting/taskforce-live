// components/MapOnly.tsx
import React from "react";

const MapOnly = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
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

export default MapOnly;
