import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
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
