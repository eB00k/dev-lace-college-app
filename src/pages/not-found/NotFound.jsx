import { useTranslation } from "react-i18next";
import { ContactLinkButton } from "../../components/reasons/ReasonsToStudy";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="h-screen text-slate-900 flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl font-bold">{t("notFound.title")}: 404</h2>
      <p className="text-base font-medium">{t("notFound.subtitle")}</p>
      <p>
        <Link href="/">
          <ContactLinkButton>{t("notFound.goBackBtn")}</ContactLinkButton>
        </Link>
      </p>
    </div>
  );
}
