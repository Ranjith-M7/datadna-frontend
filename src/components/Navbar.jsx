import React from "react";

function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid" id="nav">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <a href="index.html" className="navbar-brand">
              <h1 className="text-white fw-bold d-block title">
                High<span className="text-secondary-color">Tech</span>
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <a
                  href="index.html"
                  className="nav-item nav-link active text-green"
                >
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <a href="project.html" className="nav-item nav-link">
                  Projects
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded">
                    <a href="blog.html" className="dropdown-item">
                      Our Blog
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <a href="" className="position-relative animated tada infinite">
                  <i
                    className="fa fa-phone-alt text-white fa-2x"
                    style={{ transform: "rotate(90deg)" }}
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: 20 }}
                  >
                    <span>
                      <i className="fa fa-comment-dots text-secondary-color" />
                    </span>
                  </div>
                </a>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary-color">
                  Call: + 0123 456 7890
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4 ">
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass text-white fa-2x"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;
