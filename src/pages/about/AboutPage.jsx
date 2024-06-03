import React from "react";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="page max-w-[900px] py-20 pt-24 px-4 sm:px-6 md:px-8 text-slate-900">
      <h2 className="page-title pt-6">{t("about.title")}</h2>
      <p className="page-paragraph">{t("about.description")}</p>

      <h2 className="page-title pt-6">{t("about.collegeTitle")}</h2>

      <h3 className="page-subtitle">{t("about.overview")}</h3>
      <p className="page-paragraph">{t("about.overviewDescription")}</p>

      <h3 className="page-subtitle">{t("about.mission")}</h3>
      <p className="page-paragraph">{t("about.missionDescription")}</p>
      <h3 className="page-subtitle">{t("about.vision")}</h3>
      <p className="page-paragraph">{t("about.visionDescription")}</p>
    </div>
  );
}

export default AboutPage;
