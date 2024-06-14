import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

const CarEdit = () => {
  const { id } = useParams();
  const [car, setCar] = useState({
    manufacture: "",
    model: "",
    rentPerDay: "",
    capacity: "",
    availableAt: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/cars/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCar(data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const updateCar = () => {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    }).then(() => {
      console.log("car updated.");
      navigate("/admin");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };
  return (
    <div>
      <HeaderAdmin />
      <div id="card-edit" className="caredit">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-9" style={{ marginLeft: "20%" }}>
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Edit Management Car</h6>
                </div>
                <div className="card-body px-4 pt-0 pb-2">
                  <div className="mb-3">
                    <label htmlFor="manufacture" className="form-label">
                      Manufacture
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="manufacture"
                      name="manufacture"
                      value={car.manufacture}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="model" className="form-label">
                      Model
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      name="model"
                      value={car.model}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rentPerDay" className="form-label">
                      Harga Sewa
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rentPerDay"
                      name="rentPerDay"
                      value={car.rentPerDay}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">
                      Kapasitas
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="capacity"
                      name="capacity"
                      value={car.capacity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="availableAt" className="form-label">
                      Tanggal Tersedia
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="availableAt"
                      name="availableAt"
                      value={car.availableAt}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="images" className="form-label">
                      Image
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="images"
                      name="images"
                      value={car.image}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-primary add-button"
                    onClick={updateCar}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
};

export default CarEdit;
