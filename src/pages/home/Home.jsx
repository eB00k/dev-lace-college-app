import React from "react";
import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/about-us/AboutSection";
import ProgramsCatalog from "../../components/catalog/ProgramsCatalog";
import Gallery from "../../components/gallery/Gallery";
import Campus from "../../components/campus/Campus";
// import Testemonials from "../../components/testemonials/Testemonials";
import FAQ from "../../components/faq/FAQ";
import ReasonsToStudy from "../../components/reasons/ReasonsToStudy";
import MapAndContactInfo from "../../components/map-info/MapAndContactInfo";
import ContactForm2 from "../../components/contact/ContactForm2";

function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
        <ProgramsCatalog />
      </section>
      <section id="reasons">
        <ReasonsToStudy />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <ContactForm2 />
        <MapAndContactInfo />
      </section>
    </>
  );
}

export default Home;
