import Image from "next/image";

const services = [
  { name: "Building MGMT Systems", img: "skyline.png" },
  { name: "CCTV", img: "cctv-camera.png" },
  { name: "Kitchen Works", img: "kitchen.png" },
  { name: "Fabrication Works", img: "bending.png" },
  { name: "Soft Furniture", img: "sofa.png" },
  { name: "Plumbing & Sanitary Works", img: "plumbing.png" },
  { name: "Fire Detection", img: "fire.png" },
  { name: "Flooring Systems", img: "floor.png" },
  { name: "Joinery Works - partitions", img: "joint.png" },
  { name: "HVAC", img: "air-conditioning.png" },
  { name: "Painting Works", img: "paint-roller.png" },
  { name: "Seating Systems", img: "car-seat.png" },
  { name: "Modular Furniture", img: "nightstand.png" },
  { name: "Civil Works", img: "civil.png" },
  { name: "Labs", img: "microscope.png" },
  { name: "Access control Systems", img: "money-transfer.png" },
  { name: "False Ceiling", img: "ceiling.png" },
  { name: "Electrical Works", img: "electric-panel.png" },
];

export default function RangeOfServices() {
  return (
    <div className="bg-[#f9f4f1] py-10 text-left px-2 md:px-28">
      <div className="font-oswald text-xl tracking-widest text-[#ffda08] uppercase">
        Our Services
      </div>
      <h2 className="font-oswald text-3xl sm:text-5xl font-semibold uppercase leading-[70px] mt-2">
        <span className="text-[#ffda08]">Range of </span>
        <span className="dark:text-black text-current">SERVICES</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 px-4 mt-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={`/services/${service.img}`}
              alt={service.name}
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-2 font-oswald text-lg font-semibold text-black">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
