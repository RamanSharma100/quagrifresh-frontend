import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
} from "./pages";

const App = () => {
  const location = useLocation();
  const show = !location.pathname.includes("dashboard");

  return (
    <div className="App">
      <ToastContainer />
      {show && <Header />}
      {show && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/account" element={<h1>Account</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/events" element={<h1>Events</h1>} />

        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/membership" element={<h1>Membership</h1>} />

        <Route path="/contact" element={<h1>Contact</h1>} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<_404 />} />
      </Routes>
      {show && <Footer />}
    </div>
  );
};

export default App;
