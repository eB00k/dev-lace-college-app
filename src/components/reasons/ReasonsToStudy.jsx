import React from "react";
import SectionTitle from "../title/SectionTitle";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";
import { MoveDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const layoutClasses = [
  "row-start-1 md:col-start-2 md:row-start-1",
  "row-start-2 md:col-start-1 md:row-start-2 md:col-span-2 lg:col-start-3 lg:row-start-1 lg:col-span-1",
  "row-start-3 md:row-start-3 md:col-start-1 lg:col-span-2 lg:row-start-2",
  "row-start-4 md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-2",
  "row-start-5 md:row-start-4 lg:row-start-3",
  "row-start-6 md:row-start-4 lg:row-start-3",
  "row-start-7 md:row-start-5 md:col-span-2 lg:col-span-1 lg:row-start-3",
  "row-start-8 md:row-start-6 lg:row-start-4",
  "row-start-9 md:row-start-6 lg:col-span-2 lg:row-start-4",
  "row-start-10 md:row-start-7 lg:row-start-5",
];

export const ContactLinkButton = ({ children, label = "", icon, ...props }) => {
  return (
    <Button
      className="relative bg-blue-500 transition-colors text-white flex text-base"
      {...props}
    >
      <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
      {label && <span>{label}</span>}
      {children && <span>{children}</span>}
      {icon && icon}
    </Button>
  );
};

function ReasonsToStudy() {
  const { t } = useTranslation();

  const data = t("home.reasonsSection.data", { returnObjects: true });

  return (
    <div className="page max-w-[1200px] py-10 sm:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <SectionTitle className="md:hidden text-4xl md:text-6xl m-0 my-8">
        {t("home.reasonsSection.title")}
      </SectionTitle>
      <div className="grid gap-4 grid-cols-1 grid-rows-11 md:grid-cols-2 md:grid-rows-7 lg:grid-cols-3 lg:grid-rows-5">
        <div className="hidden row-start-1 md:col-start-1 md:flex justify-center items-center">
          <SectionTitle className="text-4xl md:text-6xl m-0">
            {t("home.reasonsSection.title")}
          </SectionTitle>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "card-reasons",
              layoutClasses[index],
              "relative group/card-reasons"
            )}
          >
            <div className="absolute z-10 text-5xl rotate-12 text-main -top-3 -left-2 group-hover/card-reasons:rotate-0 transition-transform">
              {index + 1}
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-6 text-center max-w-[600px]">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="row-start-11 md:col-start-2 md:row-start-7 lg:col-start-2 lg:col-span-2 lg:row-start-5 flex flex-col items-center justify-center">
          <SectionTitle className="text-4xl md:text-6xl mb-4">
            {t("home.reasonsSection.cta.title")}
          </SectionTitle>
          <p className="mb-8 text-base text-center">
            {t("home.reasonsSection.cta.description")}
          </p>
          <a href={t("home.reasonsSection.cta.buttonLink")}>
            <ContactLinkButton
              label={t("home.reasonsSection.cta.buttonText")}
              icon={<MoveDown />}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReasonsToStudy;
