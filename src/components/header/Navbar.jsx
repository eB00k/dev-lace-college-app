import React, { useContext } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { AlignJustify } from "lucide-react";
import { navLinks } from "../../config/constants";
import logo from "../../assets/la-yellow-logo.png";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";

/* Mobile Toggle component */
const MobileNavToggle = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
      >
        <AlignJustify
          className={twMerge(
            "h-6 w-6 transform transition-transform duration-300",
            mobileMenuOpen ? "rotate-180" : ""
          )}
        />
      </button>
    </div>
  );
};

/* Main navigation */
const DesktopNav = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex lg:gap-x-10 text-sm font-medium items-center">
      {navLinks.map((link) =>
        link.to ? (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-main transition-colors" : ""
            }
          >
            {t(link.label)}
          </NavLink>
        ) : (
          <a
            key={link.label}
            href={link.path}
            className="hover:text-main transition-colors"
          >
            {t(link.label)}
          </a>
        )
      )}
    </div>
  );
};

function Navbar() {
  return (
    <nav className="w-full flex item-center justify-between p-3 lg:px-12">
      <Logo logoSrc={logo} />
      <DesktopNav />
      <div className="hidden lg:flex justify-center items-center gap-2">
        <LanguageSelecter />
      </div>
      <MobileNavToggle />
    </nav>
  );
}

export default Navbar;
