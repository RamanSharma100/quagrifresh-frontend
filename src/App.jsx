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
  Events,
  Event,
  Cart,
  Checkout,
  Contact,
} from "./pages";
import { login, logout } from "./redux/actionCreators/auth.actionCreators";
import { addCart, getCart } from "./redux/actionCreators/cart.actionCreators";
import { getProducts } from "./redux/actionCreators/products.actionCreators";

const App = () => {
  const location = useLocation();
  const show = !location.pathname.includes("dashboard");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.location.pathname.includes("dashboard")) {
      // check token and redirect to login if not present
      const token = localStorage.getItem("quagri_tkn");
      const cart = localStorage.getItem("quagri_cart");

      if (!token) {
        // get cart from local storage
        if (cart) {
          dispatch(addCart(JSON.parse(localStorage.getItem("quagri_cart"))));
          console.log("working 1");
        }
        dispatch(logout());
      } else {
        const decodedToken = jwtDecode(JSON.parse(token));

        if (decodedToken.exp * 1000 < new Date().getTime()) {
          if (cart) {
            dispatch(addCart(JSON.parse(localStorage.getItem("quagri_cart"))));
            console.log("working 2");
          }
          dispatch(logout());
        } else {
          dispatch(login({ token: JSON.parse(token), user: decodedToken }));
          dispatch(getCart(decodedToken._id, JSON.parse(token)));
          dispatch(getProducts());
          console.log("working 4");
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
        <Route path="/events" element={<Events />} />
        <Route path="/event/:title/:id" element={<Event />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        {/* <Route path="/membership" element={<h1>Membership</h1>} /> */}

        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route path="*" element={<_404 />} />
      </Routes>
      {show && <Footer />}
    </div>
  );
};

export default App;
