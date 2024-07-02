import React from "react";
import { useTranslation } from "react-i18next";
import { socialMediaIcons } from "../../config/icons";

function MapAndContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="page py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23411.176036473382!2d74.59697851083983!3d42.82222700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb5d3e7906179%3A0x616a2e518d03e933!2s7%D0%B0%2C%201%20Sayakbay%20Karalaev%20St%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1717356369877!5m2!1sen!2skg"
              width="600"
              height="450"
              allow="fullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-slate-900">
                  {t("home.contactSection.address.title")}
                </h3>
                <p className="mt-1 text-slate-600">
                  {t("home.contactSection.address.content")}
                </p>
              </div>
              <div className="border-t border-slate-200 px-6 py-4">
                <h3 className="text-lg font-medium text-slate-900">
                  {t("home.contactSection.hours.title")}
                </h3>
                <p className="mt-1 text-slate-600">
                  {t("home.contactSection.hours.content.mondayToFriday")}
                </p>
                <p className="mt-1 text-slate-600">
                  {t("home.contactSection.hours.content.saturday")}
                </p>
                <p className="mt-1 text-slate-600">
                  {t("home.contactSection.hours.content.sunday")}
                </p>
              </div>
              <div className="border-t border-slate-200 px-6 py-4">
                <h3 className="text-lg font-medium text-slate-900">
                  {t("home.contactSection.contact")}
                </h3>
                <article className="mt-1 text-slate-600">
                  <a
                    href="mailto:lightacademy.college@gmail.com"
                    className="flex justify-start items-center gap-2"
                  >
                    <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                      {socialMediaIcons.email}
                    </span>
                    <span>lightacademy.college@gmail.com</span>
                  </a>
                </article>
                <article className="mt-1 text-slate-600 flex justify-start items-center gap-4">
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                      {socialMediaIcons.phone}
                    </span>
                    <span>+996 501 99 05 50</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                      {socialMediaIcons.telegram}
                    </span>
                    <span>+996 501 99 05 50</span>
                  </div>
                </article>
                <article className="mt-1 text-slate-600 flex justify-start items-center gap-4">
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                      {socialMediaIcons.phone}
                    </span>
                    <span>+996 755 99 05 50</span>
                  </div>
                  <a href="https://api.whatsapp.com/send?phone=996755990550">
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-slate-700 w-8 h-8 flex justify-center items-center">
                        {socialMediaIcons.whatsapp}
                      </span>
                      <span>+996 755 99 05 50</span>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapAndContactInfo;
