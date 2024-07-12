import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <>
      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
                <div>
                  <CountUp
                    start={0}
                    end={232}
                    duration={1}
                    className="purecounter"
                  />
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i
                  className="bi bi-journal-richtext color-orange flex-shrink-0"
                  style={{ color: "#ee6c20" }}
                />
                <div>
                  <CountUp
                    start={0}
                    end={521}
                    duration={1}
                    className="purecounter"
                  />
                  <p>Projects</p>
                </div>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i
                  className="bi bi-headset color-green flex-shrink-0"
                  style={{ color: "#15be56" }}
                />
                <div>
                  <CountUp
                    start={0}
                    end={1463}
                    duration={1}
                    className="purecounter"
                  />
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i
                  className="bi bi-people color-pink flex-shrink-0"
                  style={{ color: "#bb0852" }}
                />
                <div>
                  <CountUp
                    start={0}
                    end={15}
                    duration={1}
                    className="purecounter"
                  />
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
            {/* End Stats Item */}
          </div>
        </div>
      </section>
      {/* /Stats Section */}
    </>
  );
}

export default Stats;
