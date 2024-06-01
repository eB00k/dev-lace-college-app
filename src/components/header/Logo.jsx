import React from "react";

function Logo({ logoSrc }) {
  return (
    <div className="font-bold text-2xl relative">
      <img
        src={logoSrc}
        alt="Light Academy College of Engineering Logo"
        width={50}
        height={50}
      />
    </div>
  );
}

export default Logo;
