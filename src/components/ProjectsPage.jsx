import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function ProjectsPage() {
  const pageTitle = "Projects";
  return (
    <>
      <Header />
      <Projects />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ProjectsPage;
