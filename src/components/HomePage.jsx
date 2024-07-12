import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import HeaderCarousel from "./HeaderCarousel";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import RecentBlogs from "./RecentBlogs";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeaderCarousel />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Portfolio />
      <RecentBlogs />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default HomePage;
