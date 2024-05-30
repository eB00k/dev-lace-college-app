import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ children, className = "" }) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 border-none rounded-sm bg-white font-medium text-black text-sm shadow-sm cursor-pointer hover:opacity-90 transition-opacity",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
