import React, { useEffect } from "react";
import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function BaseLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header isHomePage={isHomePage} />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
