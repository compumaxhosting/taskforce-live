"use client";

interface TaskForceOverviewProps {
  subheading: string;
  heading: string;
}

export default function TaskForceOverview({
  subheading,
  heading,
}: TaskForceOverviewProps) {
  return (
    <section
      className="relative text-white py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/banner-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay on background image */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Moving background shape (not affected by overlay) */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 z-10 animate-background-slide"
        style={{
          backgroundImage: "url('/shape-101.png')",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-full space-y-6">
            <h2 className="text-2xl font-bold text-[#ffda08]">{subheading}</h2>
            <h1 className="font-oswald text-[60px] leading-[70px] font-semibold uppercase text-white">
              {heading}
            </h1>
          </div>
        </div>
      </div>

      {/* Animation keyframes for moving background */}
      <style jsx>{`
        @keyframes background-slide {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 1920px 0;
          }
        }
        .animate-background-slide {
          animation: background-slide 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
