import React from "react";
import CustomList from "../list/CustomList";
import SectionTitle from "../title/SectionTitle";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const listForMission = [
    { text: t("home.aboutSection.listItems.history"), link: "/about" },
    { text: t("home.aboutSection.listItems.missionAndVision"), link: "/about" },
    {
      text: t("home.aboutSection.listItems.programs"),
      link: "/academics",
    },
  ];

  return (
    <div className="page py-14 sm:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col items-center md:flex-row justify-center gap-12">
        <div className="w-full max-w-[500px] h-96 p-1.5 bg-white shadow-md rounded-md">
          <div className="w-full h-full bg-mission bg-no-repeat bg-cover bg-center rounded-md"></div>
        </div>
        <div className="w-full max-w-[400px]">
          <SectionTitle className="text-start">
            {t("home.aboutSection.title")}
          </SectionTitle>
          <p className="text-base my-2">{t("home.aboutSection.description")}</p>
          <CustomList list={listForMission} className="my-4" />
          <Link to={"/about"} preventScrollReset={true}>
            <Button className="uppercase bg-main text-white relative">
              <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
              {t("home.aboutSection.learnMoreButton")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
