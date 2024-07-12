import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function ContactPage() {
    const pageTitle = "Contact";
  return (
    <>
      <Topbar />
      <Navbar />
      {/* <PageHeader pageTitle={pageTitle} /> */}
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ContactPage