import React from "react";

function PageHeader({pageTitle}) {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          {/* <h1 className="display-2 text-white mb-4 animated slideInDown">
            {pageTitle}
          </h1> */}
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                {pageTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
    </>
  );
}

export default PageHeader;
