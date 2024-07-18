import React from "react";
import Header from "./Header";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import MainCarousel from "./MainCarousel";

function HomePage() {
  return (
    <>
      <Header />
      <MainCarousel />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default HomePage;
