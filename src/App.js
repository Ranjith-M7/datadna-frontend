import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ErrorPage from "./components/ErrorPage";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import Swiper, { Navigation, Pagination } from "swiper";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Initialize GLightbox
    GLightbox();

    // Initialize Isotope after images have loaded
    const grid = document.querySelector(".grid");
    if (grid) {
      const iso = new Isotope(grid, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });

      imagesLoaded(grid, function () {
        iso.layout();
      });
    }

    // Initialize Swiper
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
