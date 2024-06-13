import React, { useEffect } from "react";
const WhyUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="whyus container-fluid " id="whyus">
      <div className="container-lg pt-5">
        <h2 className="whyus-title fs-3 fw-bold pt-5">Why Us?</h2>
        <p className="whyus-title">Mengapa harus pilih Binar Car Rental?</p>
        <div className="whyus-row row g-5 d-flex justify-content-between ">
          <div
            className="col-md-4 card low-shadow p-0"
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-offset="300"
          >
            <div className="card-body card-body_yellow">
              <img className="card-img" src="/icon/icon_complete.svg" />
              <h5 className="card-title fw-bold pt-3 pb-2">Mobil Lengkap</h5>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>

          <div
            className="col-md-4 card low-shadow p-0"
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-offset="300"
          >
            <div className="card-body card-body_red">
              <img className="card-img" src="/icon/icon_price.svg" />
              <h5 className="card-title fw-bold pt-3 pb-2">Harga Murah</h5>
              <p className="card-text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>

          <div
            className="col-md-4 card low-shadow p-0"
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-offset="300"
          >
            <div className="card-body card-body_blue">
              <img className="card-img" src="/icon/icon_24hrs.svg" />
              <h5 className="card-title fw-bold pt-3 pb-2">Layanan 24 Jam</h5>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
          <div
            className="col-md-4 card low-shadow p-0"
            data-aos="flip-left"
            data-aos-delay="600"
            data-aos-offset="300"
          >
            <div className="card-body card-body_green">
              <img className="card-img" src="/icon/icon_professional.svg" />
              <h5 className="card-title fw-bold pt-3 pb-2">
                Sopir Profesional
              </h5>
              <p className="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
