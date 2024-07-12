import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Services from "./Services";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function ServicesPage() {
  const pageTitle = "Services";
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader pageTitle={pageTitle} />
      <Services />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ServicesPage;
