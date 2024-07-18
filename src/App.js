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

import LoginForm from "./components/signin";
import SignUpForm from "./components/signup";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Profile from "./components/Profile";
import AdminPage from "./components/AdminPage";
import SeoPage from "./components/SeoPage";
import BlogEdit from "./components/BlogEdit";

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

          <Route path="/blogedit" element={<BlogEdit />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog-details/:title" element={<BlogDetails />} />
          
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/seo-settings" element={<SeoPage />} />
          <Route path="/adminpage" element={<AdminPage />} />
 
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
