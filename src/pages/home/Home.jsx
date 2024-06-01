import React from "react";
import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/about-us/AboutSection";
import Catalog from "../../components/catalog/Catalog";
import Gallery from "../../components/gallery/Gallery";
import Campus from "../../components/campus/Campus";
import Testemonials from "../../components/testemonials/Testemonials";
import FAQ from "../../components/faq/FAQ";
import ContactForm from "../../components/contact/ContactForm";
import Reasons from "../../components/reasons/Reasons";
import ReasonsToStudy from "../../components/reasons/ReasonsToStudy";

function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
        <Catalog />
      </section>
      <section id="reasons">
        {/* <Reasons /> */}
        <ReasonsToStudy />
      </section>
      <section>
        <Gallery />
      </section>
      <section id="campus">
        <Campus />
      </section>
      <section id="testemonials">
        <Testemonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}

export default Home;
