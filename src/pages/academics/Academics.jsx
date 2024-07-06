import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import BaseModal from "../../components/modal/BaseModal";
import { Form } from "../../components/contact/ContactForm2";
import { ContactLinkButton } from "../../components/reasons/ReasonsToStudy";

const programs = [
  {
    key: "softwareEngineering",
    id: "program-1",
  },
  {
    key: "cyberSecurity",
    id: "program-2",
  },
  {
    key: "itEntrepreneurship",
    id: "program-3",
  },
  {
    key: "stemPedagogy",
    id: "program-4",
  },
];

const reasons = Array.from({ length: 10 }, (_, i) => ({
  key: `reasons.${i}`,
}));

function Academics() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -80;
        element.scrollIntoView({ behavior: "smooth" });
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="page-style">
      <div className="container mx-auto text-slate-700">
        <h2 className="page-title">{t("academics.programs")}</h2>
        {programs.map((program) => (
          <div id={program.id} key={program.key} className="mb-6">
            <h3 className="page-subtitle">
              {t(`academics.${program.key}.name`)}
            </h3>
            <p className="page-paragraph">
              {t(`academics.${program.key}.description`)}
            </p>
            <h4 className="page-subtitle text-lg font-medium">
              {t(`academics.${program.key}.jobRoles`)}
            </h4>
            <ul className="list-disc ml-5">
              {t(`academics.${program.key}.roles`, { returnObjects: true }).map(
                (role, index) => (
                  <li key={index} className="mb-2">
                    {role}
                  </li>
                )
              )}
            </ul>
            <div className="mb-10">
              <ContactLinkButton
                label={t("academics.btnApplyText")}
                onClick={() => openModal()}
              />
            </div>
          </div>
        ))}

        <h2 className="page-title pt-12">{t("academics.reasonsTitle")}</h2>
        <div className="grid gap-4">
          {reasons.map((reason, index) => {
            const reasonDescription = t(`academics.${reason.key}.description`, {
              returnObjects: true,
            });

            return (
              <div key={index} className="flex flex-col p-4 border rounded-lg">
                <div className="page-subtitle">
                  {t(`academics.${reason.key}.keywords`)}
                </div>
                {typeof reasonDescription === "string" ? (
                  <div>{reasonDescription}</div>
                ) : (
                  <div>
                    <div>{reasonDescription.text}</div>
                    <ul className="list-disc ml-5 mt-2">
                      {reasonDescription.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <BaseModal
        label={t("academics.modalTitle")}
        openModal={isOpenModal}
        closeModal={closeModal}
      >
        <Form />
      </BaseModal>
    </div>
  );
}

export default Academics;
