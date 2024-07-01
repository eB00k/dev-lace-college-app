import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../button/Button";
import SectionTitle from "../title/SectionTitle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const Input = ({
  type = "text",
  id,
  name,
  label,
  className,
  required,
  register,
  errors,
  ...props
}) => {
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
          {...register(name, { required: `${label} is required` })}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
          required={required}
          {...register(name, { required: `${label} is required` })}
          {...props}
        />
      )}
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};

function ContactForm2() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm();
  const form = useRef();

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    setValue("token", token);
    clearErrors("general"); // Clear general error when reCAPTCHA is successfully completed
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    if (!captchaToken) {
      setIsSubmitting(false);
      setError("general", {
        type: "manual",
        message: "Please complete the reCAPTCHA.",
      });
      return;
    }

    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
      phone: data.phone,
      subject: data.subject,
      "g-recaptcha-response": data.token,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      alert("The message was successfully sent!");
      reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send the message, please try again.");
    } finally {
      setIsSubmitting(false);
      clearErrors(); // Clear all errors after submission
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
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <Input
                type="text"
                id="name"
                name="name"
                label={t("home.contactSection.name")}
                required
                register={register}
                errors={errors}
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="email"
                id="email"
                name="email"
                label={t("home.contactSection.email")}
                required
                register={register}
                errors={errors}
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="tel"
                id="tel"
                name="phone"
                label={t("home.contactSection.phone")}
                required
                register={register}
                errors={errors}
              />
            </div>
            <div className="p-2 w-1/2">
              <Input
                type="text"
                id="subject"
                name="subject"
                label={t("home.contactSection.subject")}
                required
                register={register}
                errors={errors}
              />
            </div>
            <div className="p-2 w-full">
              <Input
                type="textarea"
                id="message"
                name="message"
                label={t("home.contactSection.message")}
                required
                register={register}
                errors={errors}
              />
            </div>
            <div className="p-2 w-full">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}
              />
            </div>
            <div className="p-2 w-full">
              <Button
                type="submit"
                className="bg-main text-white"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : t("home.contactSection.sendMessage")}
              </Button>
              {errors.general && (
                <span className="text-red-500 text-sm">
                  {errors.general.message}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm2;
