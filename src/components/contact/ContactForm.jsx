import React from "react";
import Button from "../button/Button";
import SectionTitle from "../title/SectionTitle";
import { useTranslation } from "react-i18next";

const Input = ({ type = "text", id, name, label, className, required }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="leading-7 text-base text-slate-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-slate-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${className}`}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
          required={required}
        />
      )}
    </div>
  );
};

function ContactForm() {
  const { t } = useTranslation();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3f2230f0-f61a-410f-8237-67aedd543285");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("The Message successfully sended");
      // Reset the form
      event.target.reset();
    } else {
      console.error("Error submitting form:", res);
    }
  };

  return (
    <div className="page pt-20 px-4 md:px-12">
      <div className="flex flex-col text-center w-full mb-12 text-slate-900">
        <SectionTitle>{t("home.contactSection.sectionTitle")}</SectionTitle>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          {t("home.contactSection.description")}
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <Input
                type="text"
                id="name"
                name="name"
                label={t("home.contactSection.name")}
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="email"
                id="email"
                name="email"
                label={t("home.contactSection.email")}
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="tel"
                id="tel"
                name="phone"
                label={t("home.contactSection.phone")}
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="text"
                id="subject"
                name="subject"
                label={t("home.contactSection.subject")}
              />
            </div>
            <div className="p-2 w-full">
              <Input
                type="textarea"
                id="message"
                name="message"
                label={t("home.contactSection.message")}
                required
              />
            </div>
            <div className="p-2 w-full">
              <Button className="bg-main text-white uppercase">
                {t("home.contactSection.sendMessage")}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
