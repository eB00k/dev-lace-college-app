import React, { useContext } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { AlignJustify } from "lucide-react";
import { navLinks } from "../../config/constants";
import Button from "../button/Button";

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
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.path}
          //   className={({ isActive }) =>
          //     `rounded-full ${
          //       isActive ? "bg-primary text-white" : "text-gray-900"
          //     } px-6 py-1 text-sm font-semibold leading-6`
          //   }
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

const Logo = () => {
  return <div className="font-bold text-2xl">LACE</div>;
};

function Navbar() {
  return (
    <nav className="w-full flex item-center justify-between p-6 lg:px-12">
      <Logo />
      <DesktopNav />
      <div className="hidden lg:block">
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </div>
      <MobileNavToggle />
    </nav>
  );
}

export default Navbar;
