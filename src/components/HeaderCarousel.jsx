import React from "react";
import img1 from "../assets/img/carousel-1.jpg";
import img2 from "../assets/img/carousel-2.jpg";

function HeaderCarousel() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="First slide"
            />
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to={1}
              aria-label="Second slide"
            />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={img1} className="img-fluid" alt="First slide" />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-secondary-color h4 animated fadeInUp">
                    Best IT Solutions
                  </h6>
                  <h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold">
                    An Innovative IT Solutions Agency
                  </h1>
                  <p className="mb-4 text-white fs-5 animated fadeInDown">
                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                    interdum. Pellentesque aliquam dolor eget urna ultricies
                    tincidunt.
                  </p>
                  <a href="" className="me-2">
                    <button
                      type="button"
                      className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft fw-medium"
                    >
                      Read More
                    </button>
                  </a>
                  <a href="" className="ms-2">
                    <button
                      type="button"
                      className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight fw-medium"
                    >
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-secondary-color h4 animated fadeInUp">
                    Best IT Solutions
                  </h6>
                  <h1 className="text-white display-1 mb-4 animated fadeInLeft fw-bold">
                    Quality Digital Services You Really Need!
                  </h1>
                  <p className="mb-4 text-white fs-5 animated fadeInDown">
                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                    interdum. Pellentesque aliquam dolor eget urna ultricies
                    tincidunt.
                  </p>
                  <a href="" className="me-2">
                    <button
                      type="button"
                      className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft fw-medium"
                    >
                      Read More
                    </button>
                  </a>
                  <a href="" className="ms-2">
                    <button
                      type="button"
                      className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight fw-medium"
                    >
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
}

export default HeaderCarousel;
