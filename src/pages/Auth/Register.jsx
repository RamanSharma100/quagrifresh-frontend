import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/actionCreators/auth.actionCreators";

import LoginWithGoogle from "./LoginWithGoogle";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [JoinedAs, setJoinedAs] = useState(1);

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      type: JoinedAs === 1 ? "buyer" : "seller",
      loginMedium: "email",
    };

    dispatch(registerUser(data, setSuccess));
  };

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setJoinedAs(1);
      navigate("/login");
    }
  }, [success]);

  return (
    <section id="aa_login">
      <div className="container">
        <div className="row">
          <h1 className="tit2 text-center my-5">Register Here</h1>
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
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
                <label for="exampleInputPassword1" className="form-label">
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
              <div className="mb-3">
                <label for="confirmPass" className="form-label">
                  Re-type Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  id="confirmPass"
                />
              </div>
              <div className="mb-3">
                <label for="join-as" className="form-label">
                  Join as
                </label>
                <select
                  value={JoinedAs}
                  onChange={(e) => setJoinedAs(e.target.value)}
                  className="form-select"
                >
                  <option value={1} selected>
                    Buyer
                  </option>
                  <option value={2}>Seller</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn form-control mt-5 btn-success"
              >
                Register
              </button>
            </form>

            <p className="text-end mt-4">
              Already have an account? <Link to="/login">Login</Link>
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

export default Register;
