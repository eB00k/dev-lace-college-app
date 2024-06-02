import React from "react";
import { footerColumns } from "../../config/constants";
import Logo from "../header/Logo";
import logo from "../../assets/la-black-logo.png";

// Define social icons data
export const socialIcons = [
  // {
  //   href: "www.instagram.com/light_academy.college/",
  //   icon: (
  //     <svg
  //       className="h-6 w-6"
  //       fill="currentColor"
  //       viewBox="0 0 24 24"
  //       aria-hidden="true"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  //   label: "Facebook",
  // },
  {
    href: "https://www.instagram.com/light_academy.college",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Instagram",
  },
  {
    href: "https://api.whatsapp.com/send?phone=996755990550",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M16.021 0C7.177 0 .02 7.155.02 15.999c0 2.822.746 5.593 2.163 8.034L.026 32l7.193-2.128c2.36 1.3 5.038 1.992 7.792 1.992h.01c8.842 0 15.996-7.154 15.996-15.998S24.864 0 16.021 0zm9.147 23.187c-.379 1.07-2.214 2.063-3.053 2.197-.819.125-1.868.177-3.045-.188-.701-.22-1.608-.523-2.771-1.02-4.886-2.004-8.054-6.901-8.3-7.22-.244-.317-1.98-2.637-1.98-5.025 0-2.387 1.255-3.57 1.7-4.064.443-.493.97-.62 1.293-.62.32 0 .637.003.914.017.298.013.702-.113 1.1.84.427 1.015 1.453 3.525 1.58 3.779.126.252.21.553.04.874-.168.317-.254.512-.501.796-.247.282-.52.63-.745.844-.251.235-.51.49-.22.962.29.472 1.284 2.11 2.752 3.415 1.897 1.688 3.48 2.211 3.955 2.46.48.25.76.21 1.04-.126.285-.338 1.186-1.376 1.506-1.847.317-.47.635-.391 1.084-.235.45.156 2.868 1.35 3.36 1.596.494.247.823.37.944.57.123.197.123 1.129-.257 2.2z" />
      </svg>
    ),
    label: "WhatsApp",
  },
  {
    href: "tg://resolve?domain=+996501990550",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 0C7.164 0 .008 7.154.008 15.992c0 2.813.744 5.574 2.16 8.008L.016 32l7.19-2.128c2.356 1.3 5.03 1.99 7.784 1.99h.01c8.837 0 15.99-7.155 15.99-15.992C31.992 7.154 24.84 0 16.002 0zm7.405 9.212l-3.185 14.872c-.239 1.053-.871 1.313-1.76.817l-4.866-3.587-2.35 2.27c-.26.26-.478.479-.98.479l.353-5.001 9.106-8.216c.396-.353-.086-.55-.613-.197l-11.3 7.11-4.86-1.52c-1.056-.33-1.07-1.056.22-1.565l18.93-7.296c.88-.328 1.65.216 1.37 1.556z" />
      </svg>
    ),
    label: "Telegram",
  },
];

// FooterColumn component
const FooterColumn = ({ title, links }) => (
  <div>
    <p className="font-medium text-gray-900">{title}</p>
    <ul className="mt-6 space-y-4 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-700 transition hover:opacity-75"
          >
            {link.labelStart && <span>{link.labelStart}:</span>}{" "}
            <span className="block">{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// SocialIcon component
const SocialIcon = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  </li>
);

// SocialLinks component
const SocialLinks = () => (
  <ul className="mt-8 flex gap-6">
    {socialIcons.map((socialIcon, index) => (
      <SocialIcon
        key={index}
        href={socialIcon.href}
        icon={socialIcon.icon}
        label={socialIcon.label}
      />
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <Logo logoSrc={logo} />
              <span className="text-sm font-medium">
                LIGHT ACADEMY COLLEGE OF ENGINEERING
              </span>
            </div>

            <SocialLinks />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {footerColumns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2024. LACE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
