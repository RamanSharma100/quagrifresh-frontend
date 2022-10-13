import "./Header.css";

import indianFlag from "../../assets/img/flag/india.PNG";
import americanFlag from "../../assets/img/flag/american.PNG";
import frenchFlag from "../../assets/img/flag/french.jpg";
import englishFlag from "../../assets/img/flag/english.jpg";

import frontCart1 from "../../assets/img/Frontcart/1.jpg";
import frontCart2 from "../../assets/img/Frontcart/2.png";

const Header = () => {
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
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <img src={indianFlag} alt="indian flag" />
                        INDIA
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a href="#">
                            <img src={americanFlag} alt="" />
                            USA
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={indianFlag} alt="" />
                            INDIA
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={frenchFlag} alt="" />
                            FRENCH
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <i className="fa fa-usd"></i>USD
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a href="#">
                            <i className="fa fa-euro"></i>EURO
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-usd"></i>USD
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-inr"></i>INR
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
                  {/* <!-- / cellphone --> */}
                </div>

                {/* <!-- / header top left --> */}
                <div className="aa-header-top-right">
                  <ul className="aa-head-top-nav-right">
                    <li>
                      <a href="account.html">My Account</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="cart.html">My Cart</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="" data-toggle="modal" data-target="#login-modal">
                        Login
                      </a>
                    </li>
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
            <div className="col-md-12">
              <div className="aa-header-bottom-area">
                {/* <!-- logo  --> */}
                <div className="aa-logo">
                  {/* <!-- Text based logo --> */}
                  <a href="index.html">
                    <span className="fa fa-shopping-cart"></span>
                    <p>
                      Quagri<strong>Fresh</strong> <span>Fresh & Healthy</span>
                    </p>
                  </a>
                  {/* <!-- img based logo --> */}
                </div>
                {/* <!-- / logo  -->
               <!-- cart box --> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
