import React from "react";
import "../../css/CarCardSearch.css";

const CarCardSearch = ({ car }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card car-card">
        <img
          src={car.image}
          className="card-img-top img-fluid"
          alt={car.manufacture}
        />
        <div className="card-body">
          <p className="card-text">
            {car.manufacture}/{car.model}
          </p>
          <p className="fw-bold fs-5">Rp. {car.rentPerDay} / hari</p>
          <p className="description">{car.description}</p>
          <div className="specs">
            <div className="spec-item">
              <i className="fas fa-user-group"></i>
              <p>{car.capacity} orang</p>
            </div>
            <div className="spec-item">
              <i className="fas fa-gear"></i>
              <p>{car.transmission}</p>
            </div>
            <div className="spec-item">
              <i className="fas fa-calendar"></i>
              <p>Tahun {car.year}</p>
            </div>
          </div>
          <button className="btn btn-success mt-2 w-100">Pilih Mobil</button>
        </div>
      </div>
    </div>
  );
};

export default CarCardSearch;
