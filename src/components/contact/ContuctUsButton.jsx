import React, { useState } from "react";
import { Phone } from "lucide-react";
import { socialMediaIcons } from "../../config/icons";

export const socialIcons = [
  {
    href: "https://www.instagram.com/light_academy.college",
    icon: socialMediaIcons.instagram,
    label: "Instagram",
  },
  {
    href: "https://api.whatsapp.com/send?phone=996755990550",
    icon: socialMediaIcons.whatsapp,
    label: "WhatsApp",
  },
  {
    href: "tg://resolve?domain=996501990550",
    icon: socialMediaIcons.telegram,
    label: "Telegram",
  },
];

const ContactUsButton = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-2 right-2 p-2 flex items-end justify-end w-32 h-32 z-50">
      <div
        className="text-white shadow-xl flex items-center justify-center p-6 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 z-50 absolute cursor-pointer"
        onClick={toggleOpen}
      >
        <a href={link}>
          <div className="animate-ring">
            <Phone />
          </div>
        </a>
      </div>

      {/* Sub left */}
      <div
        className={`absolute rounded-full transition-all duration-[0.2s] ease-out p-2 hover:p-3 bg-green-400 hover:bg-green-500 text-white ${
          isOpen ? "scale-y-100 -translate-x-[90px]" : "scale-y-0"
        }`}
      >
        <a href="https://api.whatsapp.com/send?phone=996755990550">
          {socialMediaIcons.whatsapp}
        </a>
      </div>

      {/* Sub top */}
      <div
        className={`absolute rounded-full transition-all duration-[0.2s] ease-out p-2 hover:p-3 bg-blue-400 hover:bg-blue-500 text-white ${
          isOpen ? "scale-x-100 -translate-y-[90px]" : "scale-x-0"
        }`}
      >
        <a href="https://t.me/+996501990550">{socialMediaIcons.telegram}</a>
      </div>

      {/* Sub middle */}
      <div
        className={`absolute rounded-full transition-all duration-[0.2s] ease-out p-2 hover:p-3 bg-yellow-400 hover:bg-yellow-500 text-white ${
          isOpen
            ? "scale-x-100 -translate-y-[75px] -translate-x-[75px]"
            : "scale-x-0"
        }`}
      >
        <a href="tel:+996755990550">{socialMediaIcons.phone}</a>
      </div>
    </div>
  );
};

export default ContactUsButton;
