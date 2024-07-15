import { useTranslation } from "react-i18next";
import ContactForm2 from "../../components/contact/ContactForm2";
import ContactUsButton from "../../components/contact/CallButton";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="page py-20 pt-24 px-4 text-slate-900">
      <div className="max-w-[900px] mx-auto">
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
      <ContactForm2 />
      <ContactUsButton />
    </div>
  );
}

export default AboutPage;
