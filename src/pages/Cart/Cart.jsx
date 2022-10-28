import { Link } from "react-router-dom";

import BannerImage from "../../assets/img/background/banner.jpg";
import Image1 from "../../assets/img/products/product-img-4.jpg";
import Image2 from "../../assets/img/Frontcart/1.jpg";
import Image3 from "../../assets/img/Frontcart/2.png";

const Cart = () => {
  return (
    <>
      <section id="aa-catg-head-banner">
        <img src={BannerImage} alt="fashion img" />
        <div className="aa-catg-head-banner-area">
          <div className="container">
            <div className="aa-catg-head-banner-content">
              <h2>Cart Page</h2>
              <nav
                aria-label="breadcrumb"
                className="d-flex align-items-center  "
              >
                <ol className="breadcrumb mx-auto">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-capitalize"
                    aria-current="page"
                  >
                    Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section id="cart-view">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-view-area bg-white">
                <div className="cart-view-table bg-white">
                  <form action="">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a className="remove" href="#">
                                <fa className="fa fa-trash"></fa>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <img src={Image1} alt="img" />
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                Fruit
                              </a>
                            </td>
                            <td>$250</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value="1"
                              />
                            </td>
                            <td>$250</td>
                          </tr>
                          <tr>
                            <td>
                              <a className="remove" href="#">
                                <fa className="fa fa-trash"></fa>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <img src={Image3} alt="img" />
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                Fruit
                              </a>
                            </td>
                            <td>$150</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value="1"
                              />
                            </td>
                            <td>$150</td>
                          </tr>
                          <tr>
                            <td>
                              <a className="remove" href="#">
                                <fa className="fa fa-trash"></fa>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <img src={Image2} alt="img" />
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                Vegetable
                              </a>
                            </td>
                            <td>$50</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value="1"
                              />
                            </td>
                            <td>$50</td>
                          </tr>
                          <tr>
                            <td colspan="6" className="aa-cart-view-bottom">
                              <div className="aa-cart-coupon">
                                <input
                                  className="aa-coupon-code"
                                  type="text"
                                  placeholder="Coupon"
                                  disabled={true}
                                />
                                <input
                                  className="aa-cart-view-btn bg-secondary"
                                  type="button"
                                  value="Apply Coupon"
                                  disabled={true}
                                />
                              </div>
                              <input
                                className="aa-cart-view-btn"
                                type="submit"
                                value="Update Cart"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                  <div className="cart-view-total">
                    <h4>Cart Totals</h4>
                    <table className="aa-totals-table">
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>$450</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>$450</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="aa-cart-view-btn">
                      Proced to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
