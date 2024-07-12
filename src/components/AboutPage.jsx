import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import About from "./About";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function AboutPage() {
  const pageTitle = "About Us";
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader pageTitle={pageTitle} />
      <About />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default AboutPage;
