import React from "react";
import SectionTitle from "../title/SectionTitle";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProgramsCatalog() {
  const { t } = useTranslation();

  const programs = [
    {
      name: t("home.programsSection.programs.0.name"),
      description: t("home.programsSection.programs.0.description"),
      learnMore: t("home.programsSection.programs.0.learnMore"),
    },
    {
      name: t("home.programsSection.programs.1.name"),
      description: t("home.programsSection.programs.1.description"),
      learnMore: t("home.programsSection.programs.1.learnMore"),
    },
    {
      name: t("home.programsSection.programs.2.name"),
      description: t("home.programsSection.programs.2.description"),
      learnMore: t("home.programsSection.programs.2.learnMore"),
    },
    {
      name: t("home.programsSection.programs.3.name"),
      description: t("home.programsSection.programs.3.description"),
      learnMore: t("home.programsSection.programs.3.learnMore"),
    },
  ];
  return (
    <div className="page py-14 sm:py-20 px-4 md:px-8 text-slate-900">
      <SectionTitle>{t("home.programsSection.title")}</SectionTitle>
      <div className="flex flex-wrap justify-center gap-6 items-stretch">
        {programs.map((program, index) => (
          <div
            key={index}
            className="w-full max-w-72 border-2 border-main rounded-lg transition-colors p-6 text-center overflow-hidden cursor-pointer"
          >
            <div className="w-full flex justify-center items-center text-main">
              <GraduationCap className="w-[56px] h-[56px]" />
            </div>
            <h3 className="mb-4 font-medium text-lg">{program.name}</h3>
            <p className="text-sm text-slate-700">{program.description}</p>
            <Link to="/academics" className=" mt-2 block underline text-sm">
              {program.learnMore}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsCatalog;
