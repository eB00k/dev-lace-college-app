import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HighlightedText({ children }) {
  return (
    <span className="bg-highlight-gradient bg-no-repeat bg-full-40 bg-bottom-10">
      {children}
    </span>
  );
}

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className="page h-screen max-h-[1200px] bg-slate-800 bg-hero-gradient bg-no-repeat bg-cover bg-center w-full flex items-center justify-center px-6">
      <div className="text-center text-white">
        <div className="max-w-[800px]">
          <h1 className="text-3xl md:text-5xl font-bold max-w-[740px]">
            <span className="block">{t("home.heroSection.title")}</span>
            <HighlightedText>
              Light Academy College of Engineering
            </HighlightedText>
          </h1>
          <p className="my-6 text-base">{t("home.heroSection.description")}</p>
          <div className="flex justify-center gap-4">
            <Link to="/academics">
              <Button>{t("home.heroSection.primaryButton")}</Button>
            </Link>
            <a href="#contact">
              <Button className="bg-main">
                {t("home.heroSection.secondaryButton")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
