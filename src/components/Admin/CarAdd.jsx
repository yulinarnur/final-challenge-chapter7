import React, { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import { useNavigate } from "react-router-dom";

const CarAdd = () => {
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const addCar = () => {
    const newCar = {
      manufacture,
      model,
      rentPerDay,
      capacity,
      availableAt,
      image,
    };

    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    }).then(() => {
      //   setTitle("");
      setManufacture("");
      setModel("");
      setRentPerDay("");
      setCapacity("");
      setAvailableAt("");
      setImage("");
      console.log("new car added.");
      navigate("/admin");
    });
  };

  return (
    <div>
      <HeaderAdmin />
      <div id="card-add" className="caradd">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-9" style={{ marginLeft: "20%" }}>
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Add New Car</h6>
                </div>
                <div className="card-body px-4 pt-0 pb-2">
                  {/* <form onSubmit={addCar}> */}
                  <div className="mb-3">
                    <label htmlFor="manufacture" className="form-label">
                      Manufacture
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="manufacture"
                      name="manufacture"
                      value={manufacture}
                      onChange={(e) => setManufacture(e.target.value)}
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
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
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
                      value={rentPerDay}
                      onChange={(e) => setRentPerDay(e.target.value)}
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
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
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
                      value={availableAt}
                      onChange={(e) => setAvailableAt(e.target.value)}
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
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn btn-primary add-button"
                    onClick={addCar}
                  >
                    Add Car
                  </button>
                  {/* </form> */}
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

export default CarAdd;
