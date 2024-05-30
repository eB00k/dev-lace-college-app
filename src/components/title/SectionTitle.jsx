import React from "react";
import { twMerge } from "tailwind-merge";

function SectionTitle({ children, className = "" }) {
  const [firstWord, ...rest] = children.split(" ");
  return (
    <h2
      className={twMerge(
        "text-3xl font-medium text-center mb-6 leading-7 section-title uppercase",
        className
      )}
    >
      <span className="text-main">{firstWord}</span> {rest.join(" ")}
    </h2>
  );
}

export default SectionTitle;
