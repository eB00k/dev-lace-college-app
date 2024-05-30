import { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { twMerge } from "tailwind-merge";
import MobileMenu from "./MobileMenu";
import useScroll from "../../hooks/useScroll";

export const HeaderContext = createContext(false);

const HeaderProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <HeaderContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

function Header() {
  const { scrollY } = useScroll();
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const opacity = Math.min(scrollY / 160, 0.9);
    setBgOpacity(opacity);
  }, [scrollY]);

  return (
    <HeaderProvider>
      <header
        className={twMerge(
          "w-full fixed top-0 z-50 bg-black text-white transition-opacity duration-300 ease-in-out",
          bgOpacity > 0 ? "shadow-sm" : ""
        )}
        style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}
      >
        <div className="max-container">
          <Navbar />
        </div>
        <MobileMenu />
      </header>
    </HeaderProvider>
  );
}

export default Header;
