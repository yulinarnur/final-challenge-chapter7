import Header from "../Header";
import Main from "../Main";

const CarSearch = () => {
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
            action=""
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
                        defaultValue=""
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
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <label htmlFor="waktu" className="form-label">
                        Waktu Jemput/Ambil
                      </label>
                      <select
                        className="form-select body-12-light"
                        id="waktu"
                        name="waktu"
                        disabled
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Pilih Waktu
                        </option>
                        <option value="8">08.00 WIB</option>
                        <option value="9">09.00 WIB</option>
                        <option value="10">10.00 WIB</option>
                        <option value="11">11.00 WIB</option>
                        <option value="12">12.00 WIB</option>
                        <option value="13">13.00 WIB</option>
                        <option value="14">14.00 WIB</option>
                        <option value="15">15.00 WIB</option>
                        <option value="16">16.00 WIB</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mb-3 mb-lg-0">
                      <label htmlFor="jumlah" className="form-label">
                        Jumlah Penumpang (Optional)
                      </label>
                      <div className="d-flex">
                        <input
                          placeholder="Jumlah Penumpang"
                          type="input"
                          name="totalPassanger"
                          id="totalPassanger"
                          className="form-control body-12-light position-relative"
                          aria-describedby="jumlah-addon"
                        />
                        <img
                          src="./images/svg/fi_users.svg"
                          alt=""
                          className="jumlah-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-success" id="btn-search">
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>

          <div id="insert-car" className="row px-4"></div>
        </div>
      </section>
    </>
  );
};

export default CarSearch;
