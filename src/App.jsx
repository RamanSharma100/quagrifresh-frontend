import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header, Nav, Footer } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />

        <Route path="/account" element={<h1>Account</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />

        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />

        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />

        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />

        <Route path="/membership" element={<h1>Membership</h1>} />

        <Route path="/contact" element={<h1>Contact</h1>} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
