import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../redux/actionCreators/auth.actionCreators";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      return toast.warning("Please enter your password");
    }

    const data = {
      password,
    };

    dispatch(resetPassword(data, token, setSuccess));
  };

  useEffect(() => {
    if (success) {
      toast.success("Password added successfully");
      setPassword("");
    }
  }, [success]);

  return (
    <section id="aa_login">
      <div className="container">
        <div className="row">
          <h1 className="tit2 text-center my-5">Reset Password</h1>

          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control mt-2"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-success mt-5 form-control"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
