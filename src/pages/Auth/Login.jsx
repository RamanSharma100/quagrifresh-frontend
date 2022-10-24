import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actionCreators/auth.actionCreators";

import LoginWithGoogle from "./LoginWithGoogle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(loginUser(data, setSuccess));
  };

  useEffect(() => {
    if (success) {
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    }
  }, [success]);
  return (
    <section id="aa_login">
      <div className="container">
        <div className="row">
          <h1 className="tit2 text-center my-5">Login Here</h1>
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                className="btn form-control mt-5 btn-success"
              >
                Submit
              </button>
            </form>

            <p className="text-end mt-4">
              Not a member yet? <Link to="/register">Register</Link>
            </p>
          </div>

          <p className="text-center my-4">OR</p>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center mt-4 mx-auto">
            <LoginWithGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
