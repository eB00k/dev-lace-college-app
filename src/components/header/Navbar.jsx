import React, { useContext } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { AlignJustify } from "lucide-react";
import { navLinks } from "../../config/constants";
import Button from "../button/Button";
import logo from "../../assets/la-yellow-logo.png";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

/* Mobile Toggle component */
const MobileNavToggle = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  console.log(mobileMenuOpen);
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
  return (
    <div className="hidden lg:flex lg:gap-x-10 text-sm font-medium items-center">
      {navLinks.map((link) =>
        link.to ? (
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive && "text-main transition-colors"
            }
          >
            {link.label}
          </NavLink>
        ) : (
          <a
            key={link.label}
            href={link.path}
            className="hover:text-main transition-colors"
          >
            {link.label}
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
      <div className="hidden lg:flex justify-center items-center">
        <a href="#contact">
          <Button className="bg-main">Contact Us</Button>
        </a>
      </div>
      <MobileNavToggle />
    </nav>
  );
}

export default Navbar;
