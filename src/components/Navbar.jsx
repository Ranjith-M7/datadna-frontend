import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid" id="nav">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <NavLink to="/" className="navbar-brand">
              <h1 className="text-white fw-bold d-block title">
                High<span className="text-secondary-color">Tech</span>
              </h1>
            </NavLink>
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
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-item nav-link text-green"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="nav-item nav-link"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/services"
                  activeClassName="active"
                  className="nav-item nav-link"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/project"
                  activeClassName="active"
                  className="nav-item nav-link"
                >
                  Projects
                </NavLink>
                <div className="nav-item dropdown">
                  <NavLink
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </NavLink>
                  <div className="dropdown-menu rounded">
                    <NavLink to="/blog" className="dropdown-item">
                      Our Blog
                    </NavLink>
                    <NavLink to="/team" className="dropdown-item">
                      Our Team
                    </NavLink>
                    <NavLink to="/testimonial" className="dropdown-item">
                      Testimonial
                    </NavLink>
                    <NavLink to="/404" className="dropdown-item">
                      404 Page
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="nav-item nav-link"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <NavLink to="#" className="position-relative animated tada infinite">
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
                </NavLink>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary-color">
                  Call: + 0123 456 7890
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4 ">
                <NavLink to="#">
                  <i className="fa-solid fa-magnifying-glass text-white fa-2x"></i>
                </NavLink>
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
