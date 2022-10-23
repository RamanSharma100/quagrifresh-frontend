const LoginWithGoogle = () => {
  return (
    <button
      className="btn btn-outline-dark form-control"
      style={{ textTransform: "none" }}
    >
      <img
        width="20px"
        style={{ marginBottom: "3px", marginRight: "5px" }}
        alt="Google sign-in"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
      />
      Login with Google
    </button>
  );
};

export default LoginWithGoogle;
