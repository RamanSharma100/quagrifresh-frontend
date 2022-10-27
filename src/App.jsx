import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

import "./App.css";
import { Header, Nav, Footer } from "./components";
import {
  About,
  Home,
  Product,
  Products,
  _404,
  Login,
  Register,
  Dashboard,
  ForgotPassword,
  ResetPassword,
  Profile,
} from "./pages";
import { login, logout } from "./redux/actionCreators/auth.actionCreators";

const App = () => {
  const location = useLocation();
  const show = !location.pathname.includes("dashboard");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.location.pathname.includes("dashboard")) {
      // check token and redirect to login if not present
      const token = localStorage.getItem("quagri_tkn");

      if (!token) {
        dispatch(logout());
        console.log("no token");
      } else {
        const decodedToken = jwtDecode(JSON.parse(token));

        if (decodedToken.exp * 1000 < new Date().getTime()) {
          dispatch(logout());
          console.log("token expired");
        } else {
          dispatch(login({ token: JSON.parse(token), user: decodedToken }));
          console.log("token present");
        }
      }
    }
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      {show && <Header />}
      {show && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/events" element={<h1>Events</h1>} />

        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="/membership" element={<h1>Membership</h1>} />

        <Route path="/contact" element={<h1>Contact</h1>} />

        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route path="*" element={<_404 />} />
      </Routes>
      {show && <Footer />}
    </div>
  );
};

export default App;
