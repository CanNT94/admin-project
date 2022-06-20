const Login = () => {
  return (
    <div className="w-50 start-50 position-relavtive bg-danger">
      <form className="w-25 start-50 position-absolute translate-middle-x mt-3 p-5 bg-light">
        <div className="form-outline mb-4">
          <label className="form-label">Email address</label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label className="form-check-label ">Remember me</label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4 w-100">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
