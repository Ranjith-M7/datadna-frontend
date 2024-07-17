import React from "react";

function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>About Us</p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>Building Relationships Through Excellence</h2>
                <p>
                  At DataDNA, we are dedicated to delivering unparalleled
                  service and expertise to our clients. Our commitment to
                  quality and innovation drives everything we do. We believe in
                  forging lasting partnerships built on trust and mutual
                  success. Explore our approach to business and discover how we
                  can help you achieve your goals.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
}

export default About;
