import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Projects from "./Projects";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function ProjectsPage() {
  const pageTitle = "Projects";
  return (
    <>
      <Topbar />
      <Navbar />
      {/* <PageHeader pageTitle={pageTitle} /> */}
      <Projects />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ProjectsPage;
