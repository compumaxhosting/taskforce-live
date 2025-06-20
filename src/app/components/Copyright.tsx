import React from "react";

const Copyright = () => {
  return (
    <div className="w-full border-t border-white bg-black">
      <footer className="flex items-center justify-center h-20 px-4">
        <p className="text-xl text-white text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="taskforceinteriors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffda08] font-semibold"
          >
            Task Force Interiors Pvt. Ltd.
          </a>
          — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Copyright;
