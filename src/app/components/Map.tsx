"use client";

export default function Map() {
  return (
    <section className="w-full px-4 py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center text-[#bf852b] mb-8">
          Our Location
        </h2>
        <div className="w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7614.491589221127!2d78.477833!3d17.399988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99deba49f73b%3A0x5862b9a2bff5334c!2sTASK%20FORCE%20INTERIORS%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1754490831636!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
