import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { sendResetPasswordEmail } from "../../redux/actionCreators/auth.actionCreators";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.warning("Please enter your email");
    }

    const data = {
      email,
    };

    dispatch(sendResetPasswordEmail(data, setSuccess));
  };

  useEffect(() => {
    if (success) {
      toast.success("Password reset link sent to your email");
      setEmail("");
    }
  }, [success]);

  return (
    <section id="aa_login">
      <div className="container">
        <div className="row">
          <h1 className="tit2 text-center my-5">Forgot Password</h1>

          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mt-2"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="btn btn-success mt-5 form-control"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
