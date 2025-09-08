"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Farruk Ali Khan",
    role: "Managing Director",
    image: "/team/farruk.jpg",
  },
  {
    name: "Mr. Abid Ali Khan",
    role: "CEO",
    image: "/team/abid.jpg",
  },
  {
    name: "Mr. Kashif Ali Khan",
    role: "Managing Partner",
    image: "/team/kashif.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-12">
          Meet Our <span className="text-[#bf852b]">LEADERSHIP</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="w-[350px] border border-gray-200 p-6 rounded-md text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-36 h-36 rounded-full border-4 border-teal-700 overflow-hidden transition-transform duration-300 transform group hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2 font-open-sans">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
