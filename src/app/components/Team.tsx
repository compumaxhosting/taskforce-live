"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Farruk Ali Khan",
    role: "Managing Director",
    image: "/team/Farruk Ali Khan - Managing Director.jpg",
  },
  {
    name: "Abid Ali Khan",
    role: "Director",
    image: "/team/Abid Ali Khan- Director.jpg",
  },
  {
    name: "Kashif Ali Khan",
    role: "Managing Partner",
    image: "/team/Kashif Ali Khan - Managing Partner.jpg",
  },
  {
    name: "Abdul Samad Wahas",
    role: "Director - Projects",
    image: "/team/Abdul Samad Wahas - Director - Projects.jpg",
  },

  {
    name: "ChandraShekar Goteti",
    role: "Finance Manager",
    image: "/team/ChandraShekar Goteti - Finance Manager.jpg",
  },

  {
    name: "Jayanti Raju",
    role: "Accounts Manager",
    image: "/team/Jayanti Raju - Accounts Manager.jpg",
  },

  {
    name: "Mohammed Azmath Ullah Khan",
    role: "Director - Public Relations",
    image: "/team/Mohammed Azmath Ullah Khan - Director - Public Relations.jpg",
  },
  {
    name: "Mohammed Sameer Uddin",
    role: "Procurement Manager",
    image: "/team/Mohammed Sameer Uddin - Procurement Manager.jpg",
  },
  {
    name: "Mustafa Ali",
    role: "Manager (Contracts & Claims)",
    image: "/team/Mustafa Ali - Manager (Contracts & Claims).jpg",
  },
  {
    name: "Raju Khammam",
    role: "Project Manager",
    image: "/team/Raju Khammam - Project Manager.jpg",
  },
  {
    name: "Samreen Unnisa",
    role: "HR Generalist",
    image: "/team/Samreen Unnisa - HR Generalist.jpg",
  },
  {
    name: "Shareef Basha",
    role: "Accountant",
    image: "/team/Shareef Basha -  Accountant.jpg",
  },
  {
    name: "Sohail Sharif",
    role: "Project Coordinator",
    image: "/team/Sohail Sharif  - Project Coordinator.jpg",
  },
  {
    name: "Taj Uddin",
    role: "General Manager",
    image: "/team/Taj Uddin - General Manager.jpg",
  },
  {
    name: "Tameem Zakaria",
    role: "Associate Director",
    image: "/team/Tameem Zakaria  - Associate Director.jpg",
  },
  {
    name: "Umar Farooq",
    role: "Procurement Coordinator",
    image: "/team/Umar Farooq - Procurement Coordinator.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 px-8 md:px-40 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Meet Our <span className="text-yellow-600">Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We’re a group of passionate professionals dedicated to delivering
            excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition duration-500 ease-in-out 
                         group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-3">
                  {member.socials?.facebook && (
                    <Link
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  )}
                  {member.socials?.twitter && (
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  )}
                  {member.socials?.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  )}
                  {member.socials?.instagram && (
                    <Link
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-yellow-600">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
