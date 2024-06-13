const Footer = () => {
  return (
    <footer className="container-fluid pt-5 mb-4" id="footer">
      <div className="container-lg">
        <div className="row mt-5 ">
          <div className="col-md mb-2">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md mb-2">
            <p>
              <a href="#services" className="text-decoration-none text-dark">
                Our services
              </a>
            </p>
            <p>
              <a href="#whyus" className="text-decoration-none text-dark">
                Why Us
              </a>
            </p>
            <p>
              <a href="#testimonial" className="text-decoration-none text-dark">
                Testimonial
              </a>
            </p>
            <p>
              <a href="#faq" className="text-decoration-none text-dark">
                FAQ
              </a>
            </p>
          </div>
          <div className="col-md mb-2">
            <p>Connect with us</p>
            <a href="https://www.facebook.com">
              <img
                src="/icon/icon_facebook.svg"
                className="mx-"
                alt="Facebook"
              />{" "}
            </a>
            <a href="https://www.instagram.com">
              <img
                src="/icon/icon_instagram.svg"
                className="mx-"
                alt="Instagram"
              />
            </a>
            <a href="https://www.Twitter.com">
              <img src="/icon/icon_twitter.svg" className="mx-" alt="Twitter" />
            </a>
            <a href="https://www.gmail.com">
              <img src="/icon/icon_mail.svg" className="mx-" alt="Mail" />
            </a>
            <a href="https://www.twitch.com">
              <img src="/icon/icon_twitch.svg" className="mx-" alt="Twitch" />
            </a>
          </div>
          <div className="col-md mb-2">
            <p>Copyright Binar 2022</p>
            <a className="navbar-bran low-shadow" href="#">
              <span className="logo d-block"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
