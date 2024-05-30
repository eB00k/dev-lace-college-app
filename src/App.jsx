import { twMerge } from "tailwind-merge";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Catalog from "./components/catalog/Catalog";
import Admissions from "./components/admissions/Admissions";
import Testemonials from "./components/testemonials/Testemonials";
import ContactForm from "./components/contact/ContactForm";
import ImageGallery from "./components/gallery/ImageGallery";
import Gallery from "./components/gallery/Gallery";
import FAQ from "./components/faq/FAQ";
import Campus from "./components/campus/Campus";

function App() {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
        {/*--DONE--*/}
      </section>
      <section id="about">
        <AboutUs /> {/*--DONE--*/}
        <Catalog /> {/*--DONE--*/}
      </section>
      <section>
        <Gallery /> {/*--DONE--*/}
      </section>
      <section id="campus">
        <Campus />
      </section>
      <section id="testemonials">
        <Testemonials /> {/*--DONE--*/}
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <ContactForm /> {/*--DONE--*/}
      </section>
      <Footer />
    </>
  );
}

export default App;
