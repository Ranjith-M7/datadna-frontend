import React from 'react'

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
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
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
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
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
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
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
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}
                  data-purecounter-duration={1}
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
  
  )
}

export default Stats