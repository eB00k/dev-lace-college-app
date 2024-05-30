import React from "react";
import Button from "../button/Button";

function HighlightedText({ children }) {
  return (
    <span className="bg-highlight-gradient bg-no-repeat bg-full-40 bg-bottom-10">
      {children}
    </span>
  );
}

function Hero() {
  return (
    <div className="page h-screen max-h-[1200px] bg-slate-800 bg-hero-gradient bg-no-repeat bg-cover bg-center w-full flex items-center justify-center px-6">
      <div className="text-center text-white">
        <div className="max-w-[800px]">
          <h1 className="text-3xl md:text-5xl font-bold max-w-[740px]">
            <span className="block">Welcome to the </span>
            <HighlightedText>
              Light Academy College of Engineering
            </HighlightedText>
          </h1>
          <p className="my-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            commodi repellendus aspernatur quo, cupiditate officia laboriosam
            necessitatibus et aut! Eos quis facilis nobis.
          </p>
          <Button>Join Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
