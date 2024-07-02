import { useTranslation } from "react-i18next";

const programs = [
  {
    key: "softwareEngineering",
  },
  {
    key: "cyberSecurity",
  },
  {
    key: "itEntrepreneurship",
  },
  {
    key: "stemPedagogy",
  },
];

const reasons = Array.from({ length: 10 }, (_, i) => ({
  key: `reasons.${i}`,
}));

function Academics() {
  const { t } = useTranslation();

  return (
    <div className="page-style">
      <div className="container mx-auto text-slate-700">
        <h2 className="page-title">{t("academics.programs")}</h2>
        {programs.map((program) => (
          <div key={program.key} className="mb-6">
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
    </div>
  );
}

export default Academics;
