import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../button/Button";
import SectionTitle from "../title/SectionTitle";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

export function Form() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const recaptchaRef = useRef(null);

  const onCaptchaChange = (token) => {
    setValue("token", token);
    clearErrors("general");
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    let token = await recaptchaRef.current.executeAsync();
    setValue("token", token);

    if (!token) {
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
      "g-recaptcha-response": token,
    };
    console.log(templateParams);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      window.sessionStorage.setItem("formSubmitted", true);
      reset();
      navigate("/thank-you");
      recaptchaRef.current.reset();
    } catch (error) {
      alert("Failed to send the message, please try again.");
    } finally {
      setIsSubmitting(false);
      clearErrors(); // Clear all errors after submission
    }
  };
  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -m-2 overflow-hidden">
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
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
            size="invisible"
            onChange={onCaptchaChange}
            className="hide opacity-0"
          />
        </div>
        <div className="p-2 w-full">
          <Button
            type="submit"
            className="bg-main text-white relative"
            disabled={isSubmitting}
          >
            <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
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
  );
}

function ContactForm2() {
  const { t } = useTranslation();
  return (
    <div className="page py-14 sm:py-20 px-4 md:px-12">
      <div className="flex flex-col text-center w-full mb-12 text-slate-900">
        <SectionTitle>{t("home.contactSection.sectionTitle")}</SectionTitle>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          {t("home.contactSection.description")}
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <Form />
      </div>
    </div>
  );
}

export default ContactForm2;
