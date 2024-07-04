import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

function HighlightedText({ children, className = "" }) {
  return (
    <span
      className={twMerge(
        "bg-h-gradient inline bg-no-repeat bg-full-40 bg-bottom-10",
        className
      )}
    >
      {children}
    </span>
  );
}
function Hero() {
  const { t } = useTranslation();
  return (
    <div className="page h-screen max-h-[1200px] bg-slate-800 bg-hero-gradient bg-no-repeat bg-cover bg-center w-full flex items-center justify-center px-6">
      <div className="text-center text-white">
        <div className="max-w-[800px]">
          <h1 className="text-3xl md:text-5xl font-bold max-w-[740px]">
            <span className="block">{t("home.heroSection.welcome")}</span>
            <HighlightedText>{t("home.heroSection.title")}</HighlightedText>
          </h1>
          <p className="my-6 text-base">{t("home.heroSection.description")}</p>
          <div className="flex justify-center gap-4">
            <Link to="/academics">
              <Button className="relative from-slate-200 bg-gradient-to-r to-slate-100">
                <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
                {t("home.heroSection.primaryButton")}
              </Button>
            </Link>
            <a href="#contact">
              <div className="relative">
                <Button className="relative bg-main shadow-lg z-10">
                  {t("home.heroSection.secondaryButton")}
                </Button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-yellow-300 animate-pulseRing"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
