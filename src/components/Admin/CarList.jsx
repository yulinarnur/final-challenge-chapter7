import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        } else {
          console.error("Error fetching cars:", err);
        }
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Car deleted");
        setCars(cars.filter((car) => car.id !== id));
      })
      .catch((error) => console.error("Error deleting car:", error));
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-9" style={{ marginLeft: "20%" }}>
            <div className="card mb-4">
              <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                <h6>Cars Table</h6>
                <Link to="/admin/car/add" className="btn btn-primary">
                  Add Cars
                </Link>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  {cars.length > 0 ? (
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Manufacture
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Model
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Rent Per Day
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Capacity
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Available At
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Image
                          </th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cars.map((car) => (
                          <tr key={car.id}>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    {car.manufacture}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                {car.model}
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <p className="text-xs font-weight-bold mb-0">
                                {car.rentPerDay}
                              </p>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                {car.capacity}
                              </span>
                            </td>
                            <td className="align-middle">
                              <span className="text-secondary text-xs font-weight-bold">
                                {car.availableAt}
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <img
                                src={car.image}
                                width="50"
                                className="img-thumbnail"
                                alt={car.model}
                              />
                            </td>
                            <td className="align-middle">
                              <Link
                                to={`car/edit/${car.id}`}
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit car"
                              >
                                Edit
                              </Link>{" "}
                              |{" "}
                              <button
                                className="text-secondary font-weight-bold text-xs"
                                onClick={() => handleDelete(car.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <h1 className="text-center text-secondary mt-5">
                      No Cars found in the database
                    </h1>
                  )}
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

export default CarList;
