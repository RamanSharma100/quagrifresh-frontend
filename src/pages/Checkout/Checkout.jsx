import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/background/bg_3.jpg";

const Checkout = () => {
  return (
    <>
      <section id="aa-catg-head-banner">
        <img src={BannerImage} alt="fashion img" />
        <div className="aa-catg-head-banner-area">
          <div className="container">
            <div className="aa-catg-head-banner-content">
              <h2>Checkout Page</h2>
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
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section id="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout-area">
                <form action="">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="checkout-left">
                        <div className="panel-group">
                          <div className="panel panel-default aa-checkout-billaddress">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseThree"
                                >
                                  Billing Details
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseThree"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="First Name*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Company name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="email"
                                        placeholder="Email Address*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input type="tel" placeholder="Phone*" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea cols="8" rows="3">
                                        Address*
                                      </textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <select>
                                        <option value="0">
                                          Select Your Country
                                        </option>
                                        <option value="1">Australia</option>
                                        <option value="2">Afganistan</option>
                                        <option value="3">Bangladesh</option>
                                        <option value="4">Belgium</option>
                                        <option value="5">Brazil</option>
                                        <option value="6">Canada</option>
                                        <option value="7">China</option>
                                        <option value="8">Denmark</option>
                                        <option value="9">Egypt</option>
                                        <option value="10">India</option>
                                        <option value="11">Iran</option>
                                        <option value="12">Israel</option>
                                        <option value="13">Mexico</option>
                                        <option value="14">UAE</option>
                                        <option value="15">UK</option>
                                        <option value="16">USA</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Appartment, Suite etc."
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="City / Town*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="District*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Postcode / ZIP*"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default aa-checkout-billaddress">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseFour"
                                >
                                  Shippping Address
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseFour"
                              className="panel-collapse collapse"
                            >
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="First Name*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Company name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="email"
                                        placeholder="Email Address*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input type="tel" placeholder="Phone*" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea cols="8" rows="3">
                                        Address*
                                      </textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <select>
                                        <option value="0">
                                          Select Your Country
                                        </option>
                                        <option value="1">Australia</option>
                                        <option value="2">Afganistan</option>
                                        <option value="3">Bangladesh</option>
                                        <option value="4">Belgium</option>
                                        <option value="5">Brazil</option>
                                        <option value="6">Canada</option>
                                        <option value="7">China</option>
                                        <option value="8">Denmark</option>
                                        <option value="9">Egypt</option>
                                        <option value="10">India</option>
                                        <option value="11">Iran</option>
                                        <option value="12">Israel</option>
                                        <option value="13">Mexico</option>
                                        <option value="14">UAE</option>
                                        <option value="15">UK</option>
                                        <option value="16">USA</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Appartment, Suite etc."
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="City / Town*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="District*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Postcode / ZIP*"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea cols="8" rows="3">
                                        Special Notes
                                      </textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-right">
                        <h4>Order Summary</h4>
                        <div className="aa-order-summary-area">
                          <table className="table table-responsive">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Meat <strong> x 1</strong>
                                </td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <td>
                                  Wine<strong> x 1</strong>
                                </td>
                                <td>$250</td>
                              </tr>
                              <tr>
                                <td>
                                  Seafood<strong> x 1</strong>
                                </td>
                                <td>$350</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Subtotal</th>
                                <td>$750</td>
                              </tr>
                              <tr>
                                <th>Tax</th>
                                <td>$35</td>
                              </tr>
                              <tr>
                                <th>Total</th>
                                <td>$785</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <h4>Payment Method</h4>
                        <div className="aa-payment-method">
                          <label for="cashdelivery">
                            <input
                              type="radio"
                              id="cashdelivery"
                              name="optionsRadios"
                              checked
                            />{" "}
                            Cash on Delivery{" "}
                          </label>
                          {/* <label for="paypal"><input type="radio" id="paypal" name="optionsRadios" checked /> Via Paypal </label>
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" border="0" alt="PayPal Acceptance Mark">     */}
                          <input
                            type="submit"
                            value="Place Order"
                            className="aa-browse-btn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
