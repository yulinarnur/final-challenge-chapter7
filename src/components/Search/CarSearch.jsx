import React, { useState, useEffect } from "react";
import Header from "../Header";
import Main from "../Main";
import CarCardSearch from "../Layout/CarCardSearch";

const CarSearch = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [driverType, setDriverType] = useState("");
  const [totalPassenger, setTotalPassenger] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:8000/cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const available = driverType === "true";
    const capacity = totalPassenger ? parseInt(totalPassenger) : 0;

    const filtered = cars.filter(
      (car) => car.available === available && car.capacity >= capacity
    );
    setFilteredCars(filtered);
  };

  return (
    <>
      <Header />
      <Main />
      <section
        id="filter-car"
        className="container-lg pt-3 pt-lg-0 px-lg-5 position-relative"
        style={{ top: "-100px" }}
      >
        <div className="filter">
          <form
            id="search-form"
            onSubmit={handleSearch}
            className="rounded shadow-sm p-3 mb-3"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="row align-items-end">
              <div className="col-lg-10">
                <div className="row align-items-end body-12-light">
                  <div className="col-md-6 col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <label htmlFor="driverType" className="form-label">
                        Tipe Driver
                      </label>
                      <select
                        className="form-select body-12-light"
                        required
                        name="driverType"
                        id="driverType"
                        value={driverType}
                        onChange={(e) => setDriverType(e.target.value)}
                      >
                        <option value="" disabled>
                          Pilih Tipe Driver
                        </option>
                        <option value="true">Dengan Sopir</option>
                        <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <label htmlFor="tanggal" className="form-label">
                        Pilih Tanggal
                      </label>
                      <input
                        type="date"
                        name="tanggal"
                        id="tanggal"
                        className="form-control body-12-light"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <label htmlFor="waktu" className="form-label">
                        Waktu Jemput/Ambil
                      </label>
                      <input
                        type="time"
                        name="waktu"
                        id="waktu"
                        className="form-control body-12-light"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <label htmlFor="totalPassenger" className="form-label">
                        Jumlah Penumpang (Optional)
                      </label>
                      <input
                        placeholder="Jumlah Penumpang"
                        type="number"
                        name="totalPassenger"
                        id="totalPassenger"
                        className="form-control body-12-light"
                        value={totalPassenger}
                        onChange={(e) => setTotalPassenger(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  id="btn-search"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="car-results" className="container-lg pt-3 pt-lg-0 px-lg-5">
        <div className="row">
          {filteredCars.length === 0 ? (
            <div className="col">
              <div
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div className="text-center">Mobil Tidak Ditemukan</div>
              </div>
            </div>
          ) : (
            filteredCars.map((car) => <CarCardSearch key={car.id} car={car} />)
          )}
        </div>
      </section>
    </>
  );
};

export default CarSearch;
