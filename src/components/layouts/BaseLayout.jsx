import React from "react";
import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";

function BaseLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log("location: ", isHomePage, "----");
  return (
    <>
      <Header isHomePage={isHomePage} />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
