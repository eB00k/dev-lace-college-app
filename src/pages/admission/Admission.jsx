import { useTranslation } from "react-i18next";
import ContuctUsButton from "../../components/contact/ContuctUsButton";
import ContactForm2 from "../../components/contact/ContactForm2";

const Admission = () => {
  const { t } = useTranslation();

  const renderList = (list) => (
    <ul className="list-disc pl-5">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="page py-20 pt-24 px-4 text-slate-900">
      <div className="max-w-[860px] mx-auto text-slate-700">
        <div className="mb-6 ">
          <h2 className="page-title">{t("admission.title")}</h2>
        </div>
        <div className="text-base font-normal">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <div className="w-full">
              <h3 className="page-subtitle">
                {t("admission.requirements.title")}:
              </h3>
              <p className="page-paragraph">
                {t("admission.requirements.description")}
                {renderList(
                  t("admission.requirements.list", { returnObjects: true })
                )}
              </p>

              <h3 className="pt-6 page-subtitle">
                {t("admission.documents.title")}:
              </h3>
              <p className="page-paragraph">
                {renderList(
                  t("admission.documents.list", { returnObjects: true })
                )}
              </p>
            </div>

            <div className="w-full max-w-[400px] h-96 p-1.5 bg-white shadow-md rounded-md self-center md:self-start lg:self-center">
              <div className="w-full h-full bg-mission bg-no-repeat bg-cover bg-center rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm2 />
      <ContuctUsButton />
    </div>
  );
};

export default Admission;
