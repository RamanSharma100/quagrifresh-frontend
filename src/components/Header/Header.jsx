import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";

import indianFlag from "../../assets/img/flag/india.png";
import americanFlag from "../../assets/img/flag/american.png";
import frenchFlag from "../../assets/img/flag/french.jpg";
import englishFlag from "../../assets/img/flag/english.jpg";

import frontCart1 from "../../assets/img/Frontcart/1.jpg";
import frontCart2 from "../../assets/img/Frontcart/2.png";

import Logo from "../../assets/img/logo.jpeg";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header id="aa-header">
      {/* <!-- start header top  --> */}
      <div className="aa-header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-header-top-area">
                {/* <!-- start header top left --> */}
                <div className="aa-header-top-left">
                  {/* <!-- start language --> */}
                  <div className="aa-language">
                    <div className="dropdown">
                      <button
                        className="btn btn-transparent dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={indianFlag} alt="indian flag" />
                        INDIA
                        <span className="caret"></span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownButton2"
                      >
                        <li className="ps-3">
                          <a
                            href="#"
                            className="d-flex align-items-center gap-1"
                          >
                            <img src={americanFlag} alt="" />
                            USA
                          </a>
                        </li>
                        <li className="ps-3">
                          <a
                            href="#"
                            className="d-flex align-items-center gap-1"
                          >
                            <img src={frenchFlag} alt="" />
                            FRENCH
                          </a>
                        </li>
                        <li className="ps-3">
                          <a
                            href="#"
                            className="d-flex align-items-center gap-1"
                          >
                            <img src={englishFlag} alt="" />
                            ENGLISH
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- / language --> */}

                  {/* <!-- start currency --> */}
                  <div className="aa-currency">
                    <div className="dropdown">
                      <button
                        className="btn btn-transparent dropdown-toggle"
                        type="button"
                        id="dropdownMenu3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-usd"></i>USD
                        <span className="caret"></span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu3"
                      >
                        <li className="ps-3">
                          <a
                            href="#"
                            className="text-black text-decoration-none d-flex align-items-center gap-1"
                          >
                            <i className="fa fa-euro"></i>EURO
                          </a>
                        </li>
                        <li className="ps-3">
                          <a
                            href="#"
                            className="text-black text-decoration-none d-flex align-items-center gap-1"
                          >
                            <i className="fa fa-usd"></i>USD
                          </a>
                        </li>
                        <li className="ps-3">
                          <a
                            href="#"
                            className="text-black text-decoration-none d-flex align-items-center gap-1"
                          >
                            <i className="fa fa-inr"></i>INR
                          </a>
                        </li>
                        <li className="ps-3">
                          <a
                            href="#"
                            className="text-black text-decoration-none d-flex align-items-center gap-1"
                          >
                            <i className="fa fa-jpy"></i>YEN
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- / currency --> */}
                  {/* <!-- start cellphone --> */}
                  <div className="cellphone hidden-xs">
                    <p>
                      <span className="fa fa-phone-alt  "></span>+91-8660436470
                    </p>
                  </div>
                  <div className="cellphone hidden-xs">
                    <p>
                      <span className="fa fa-envelope  "></span>{" "}
                      quagrifresh@gmail.com
                    </p>
                  </div>
                  {/* <!-- / cellphone --> */}
                </div>

                {/* <!-- / header top left --> */}
                <div className="aa-header-top-right">
                  <ul className="aa-head-top-nav-right mb-0">
                    {isLoggedIn ? (
                      <>
                        <li className="hidden-xs">
                          <Link className="text-decoration-none" to="/cart">
                            My Cart
                          </Link>
                        </li>
                        <li className="hidden-xs">
                          <Link className="text-decoration-none" to="/login">
                            Login
                          </Link>
                        </li>
                        <li className="hidden-xs">
                          <Link className="text-decoration-none" to="/register">
                            Register
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link className="text-decoration-none" to="/account">
                            My Account
                          </Link>
                        </li>
                        <li className="hidden-xs">
                          <Link className="text-decoration-none" to="/wishlist">
                            Wishlist
                          </Link>
                        </li>
                        <li className="hidden-xs">
                          <Link className="text-decoration-none" to="/cart">
                            My Cart
                          </Link>
                        </li>
                        <li className="hidden-xs">
                          <Link className="text-decoration-none" to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li className="hidden-xs">
                          <Link
                            className="text-decoration-none"
                            to="/dashboard"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <a role={"button"} className="text-decoration-none">
                            Logout
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- / header top  --> */}
      <div className="aa-header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="aa-header-bottom-area d-flex align-items-center justify-content-between">
                {/* <!-- logo  --> */}
                <div className="aa-logo">
                  {/* <!-- Text based logo --> */}
                  <Link to="/" className="text-black d-flex align-items-center">
                    <span>
                      <img src={Logo} alt="logo" height={90} />
                    </span>
                    <p>
                      Quagri<strong>Fresh</strong> <span>Fresh & Healthy</span>
                    </p>
                  </Link>
                  {/* <!-- img based logo --> */}
                </div>
                {/* <!-- / logo  -->
               
                {/* <!-- search box --> */}
                <div className="aa-search-box">
                  <form action="">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search here"
                    />
                    <button type="submit">
                      <span className="fa fa-search"></span>
                    </button>
                  </form>
                </div>
                {/* <!-- / search box -->              */}
                <div className="aa-cartbox">
                  <a className="aa-cart-link" href="#">
                    <span className="fa fa-shopping-basket"></span>
                    <span className="aa-cart-title">SHOPPING CART</span>
                    <span className="aa-cart-notify">2</span>
                  </a>
                  <div className="aa-cartbox-summary">
                    <ul>
                      <li>
                        <a className="aa-cartbox-img" href="#">
                          <img src={frontCart1} alt="img" />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $25</p>
                        </div>
                        <a className="aa-remove-product" href="#">
                          <span className="fa fa-times"></span>
                        </a>
                      </li>
                      <li>
                        <a className="aa-cartbox-img" href="#">
                          <img src={frontCart2} alt="img" />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $25</p>
                        </div>
                        <a className="aa-remove-product" href="#">
                          <span className="fa fa-times"></span>
                        </a>
                      </li>
                      <li>
                        <span className="aa-cartbox-total-title">Total</span>
                        <span className="aa-cartbox-total-price">$50</span>
                      </li>
                    </ul>
                    <a
                      className="aa-cartbox-checkout aa-primary-btn"
                      href="checkout.html"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
                {/* <!-- / cart box --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
