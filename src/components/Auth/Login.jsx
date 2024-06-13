const Login = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 px-0 d-none d-sm-block">
            <img
              src="../images/image2_login.png"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
          <div className="col-sm-4 text-black">
            <div className="px-1 ms-xl-5">
              <img src="../images/head.png" className="head-img" alt="" />
              <br />
              <p className="login-welcome">Welcome, Admin BCR</p>
            </div>
            <div className="d-flex align-items-center ms-xl-5">
              <form action="/login" method="post" style={{ width: "23rem" }}>
                <div className="form-group">
                  <label htmlFor="email" className="lbemail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Contoh: johndee@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="lbpassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="6+ karakter"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sign">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
