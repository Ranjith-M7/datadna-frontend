import React, { useEffect } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import AOS from "aos";
import "aos/dist/aos.css";
import "isotope-layout/dist/isotope.pkgd.min.js";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    const isotopeLayouts = document.querySelectorAll(".isotope-layout");
    isotopeLayouts.forEach((isotopeItem) => {
      let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector(".isotope-container"), () => {
        initIsotope = new Isotope(
          isotopeItem.querySelector(".isotope-container"),
          {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter: filter,
            sortBy: sort,
          }
        );
      });

      isotopeItem
        .querySelectorAll(".isotope-filters li")
        .forEach((filterElement) => {
          filterElement.addEventListener("click", function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof AOS.refresh === "function") {
              AOS.refresh();
            }
          });
        });
    });
  }, []);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Check our latest work</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Product</li>
              <li data-filter=".filter-branding">Branding</li>
              <li data-filter=".filter-books">Books</li>
            </ul>
            {/* End Portfolio Filters */}
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/app-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/app-1.jpg"
                      title="App 1"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/product-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/product-1.jpg"
                      title="Product 1"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/branding-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/branding-1.jpg"
                      title="Branding 1"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/books-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/books-1.jpg"
                      title="Branding 1"
                      data-gallery="portfolio-gallery-book"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/app-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/app-2.jpg"
                      title="App 2"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/product-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/product-2.jpg"
                      title="Product 2"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/branding-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/branding-2.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/books-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/books-2.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-book"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/app-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/app-3.jpg"
                      title="App 3"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/product-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/product-3.jpg"
                      title="Product 3"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/branding-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/branding-3.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/portfolio/books-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href="assets/img/portfolio/books-3.jpg"
                      title="Branding 3"
                      data-gallery="portfolio-gallery-book"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Portfolio Item */}
            </div>
            {/* End Portfolio Container */}
          </div>
        </div>
      </section>
      {/* /Portfolio Section */}
    </>
  );
}

export default Portfolio;
