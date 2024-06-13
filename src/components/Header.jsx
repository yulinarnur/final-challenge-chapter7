const Header = () => {
  return (
    <header className="container-fluid sticky-top high-shadow p-0" id="header">
      {/* <!-- header navigation --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg px-2">
          <a className="navbar-bran low-shadow" href="#">
            <span className="logo d-block"></span>
          </a>
          {/* <!-- toggler button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- offcanvas --> */}
          <div
            className="offcanvas offcanvas-end w-50"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* <!-- canvas-header --> */}
            <div className="offcanvas-header pb-0">
              <h5
                className="offcanvas-title ms-2 fw-bold pb-0"
                id="offcanvasNavbarLabel"
              >
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- canvas-body --> */}
            <div className="offcanvas-body fs-7">
              {/* <!-- canvas item --> */}
              <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item pe-2 fw-normal">
                  <a className="nav-link" href="#services">
                    &nbsp; Our Services
                  </a>
                </li>
                <li className="nav-item px-2 fw-normal">
                  <a className="nav-link" href="#whyus">
                    Why Us
                  </a>
                </li>
                <li className="nav-item px-2 fw-normal">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item px-2 fw-normal">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item ps-2 fw-normal">
                  <button
                    type="button"
                    className="btn btn-success mt-1 fw-bold fs-7"
                  >
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
