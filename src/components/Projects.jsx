import React, { useEffect } from "react";
import img1 from "../assets/img/project-1.jpg";
import img2 from "../assets/img/project-2.jpg";
import img3 from "../assets/img/project-3.jpg";
import img4 from "../assets/img/project-4.jpg";
import img5 from "../assets/img/project-5.jpg";
import img6 from "../assets/img/project-6.jpg";

function Projects() {
  return (
    <>
      {/* Project Start */}
      <div className="container-fluid project py-5 mb-5">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Project</h2>
          <p>Our Recently Completed Projects</p>
        </div>
        <div className="container">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="project-item">
                <div className="project-img">
                  <img src={img1} className="img-fluid w-100 rounded" alt="" />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary-color">Web design</h4>
                      <p className="m-0 text-white">Web Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="project-item">
                <div className="project-img">
                  <img src={img2} className="img-fluid w-100 rounded" alt="" />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary-color">Cyber Security</h4>
                      <p className="m-0 text-white">Cyber Security Core</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="project-item">
                <div className="project-img">
                  <img src={img3} className="img-fluid w-100 rounded" alt="" />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary-color">Mobile Info</h4>
                      <p className="m-0 text-white">Upcoming Phone</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="project-item">
                <div className="project-img">
                  <img src={img4} className="img-fluid w-100 rounded" alt="" />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary-color">Web Development</h4>
                      <p className="m-0 text-white">Web Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="project-item">
                <div className="project-img">
                  <img src={img5} className="img-fluid w-100 rounded" alt="" />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary-color">
                        Digital Marketing
                      </h4>
                      <p className="m-0 text-white">Marketing Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="project-item">
                <div className="project-img">
                  <img src={img6} className="img-fluid w-100 rounded" alt="" />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary-color">Keyword Research</h4>
                      <p className="m-0 text-white">Keyword Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}
    </>
  );
}

export default Projects;
