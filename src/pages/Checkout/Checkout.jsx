import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BannerImage from "../../assets/img/background/bg_3.jpg";
import { getCart } from "../../redux/actionCreators/cart.actionCreators";

import tt from "@tomtom-international/web-sdk-services";
import axios from "axios";

const Checkout = () => {
  const { cart, token, user, products } = useSelector((state) => ({
    cart: state.cart,
    token: state.auth.token,
    user: state.auth.user,
    products: state.products.products,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = [
    "Australia",
    "Afganistan",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Egypt",
    "India",
    "Iran",
    "Israel",
    "Mexico",
    "UAE",
    "UK",
    "USA",
  ];
  const [longlat, setLonglat] = useState(null);

  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    apartment: "",
    country: "",
    zip: "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    apartment: "",
    country: "",
    zip: "",
    notes: "",
  });

  const handleBillingAddress = (name, value) => {
    setBillingAddress((prevBillingAddress) => ({
      ...prevBillingAddress,
      [name]: value,
    }));
  };

  const handleShippingAddress = (name, value) => {
    setShippingAddress((prevShippingAddress) => ({
      ...prevShippingAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !billingAddress.firstName ||
      !billingAddress.lastName ||
      !billingAddress.email ||
      !billingAddress.phone ||
      !billingAddress.address ||
      !billingAddress.city ||
      !billingAddress.district ||
      !billingAddress.country ||
      !billingAddress.zip
    ) {
      return toast.warn(
        "Please fill all the required fields in Billing Address"
      );
    }

    if (
      !shippingAddress.firstName ||
      !shippingAddress.lastName ||
      !shippingAddress.email ||
      !shippingAddress.phone ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.district ||
      !shippingAddress.country ||
      !shippingAddress.zip
    ) {
      return toast.warn(
        "Please fill all the required fields in Shipping Address"
      );
    }

    const order = {
      ...cart,
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      billingAddress: {
        ...billingAddress,
        country: countries[parseInt(billingAddress.country) - 1],
      },
      shippingAddress: {
        ...shippingAddress,
        country: countries[parseInt(shippingAddress.country) - 1],
      },
      status: "pending",
      procesed: false,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      long: longlat[0].position.lng,
      lat: longlat[0].position.lat,
    };

    const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
    axios
      .post(`${BACKEND_URL}/api/order/create`, order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Order created successfully");
        dispatch(getCart());
        navigate("/dashboard/orders");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    tt.services
      .fuzzySearch({
        key: import.meta.env.QUAGRI_API_TOMTOM_KEY,
        query: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.district}, ${shippingAddress.country}`,
      })
      .then((res) => {
        const amendRes = res.results;
        setLonglat(amendRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shippingAddress]);

  if (cart.cartItems.length === 0) {
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
                <h1 className="display-1 text-center py-5">
                  Your cart is empty.{" "}
                  <Link to="/products">Add Some Products</Link>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

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
                <form onSubmit={handleSubmit}>
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
                            <div id="collapseThree" className="panel-collapse">
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="First Name*"
                                        value={billingAddress.firstName}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "firstName",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                        value={billingAddress.lastName}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "lastName",
                                            e.target.value
                                          )
                                        }
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
                                        value={billingAddress.companyName}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "companyName",
                                            e.target.value
                                          )
                                        }
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
                                        value={billingAddress.email}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "email",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="tel"
                                        placeholder="Phone*"
                                        value={billingAddress.phone}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "phone",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        cols="8"
                                        rows="3"
                                        value={billingAddress.address}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "address",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Address*"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <select
                                        value={billingAddress.country}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "country",
                                            e.target.value
                                          )
                                        }
                                      >
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
                                        value={billingAddress.apartment}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "apartment",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="City / Town*"
                                        value={billingAddress.city}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "city",
                                            e.target.value
                                          )
                                        }
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
                                        value={billingAddress.district}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "district",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Postcode / ZIP*"
                                        value={billingAddress.zip}
                                        onChange={(e) =>
                                          handleBillingAddress(
                                            "zip",
                                            e.target.value
                                          )
                                        }
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
                            <div id="collapseFour" className="panel-collapse">
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="First Name*"
                                        value={shippingAddress.firstName}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "firstName",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                        value={shippingAddress.lastName}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "lastName",
                                            e.target.value
                                          )
                                        }
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
                                        value={shippingAddress.companyName}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "companyName",
                                            e.target.value
                                          )
                                        }
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
                                        value={shippingAddress.email}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "email",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="tel"
                                        placeholder="Phone*"
                                        value={shippingAddress.phone}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "phone",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        cols="8"
                                        rows="3"
                                        value={shippingAddress.address}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "address",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Address*"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <select
                                        value={shippingAddress.country}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "country",
                                            e.target.value
                                          )
                                        }
                                      >
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
                                        value={shippingAddress.apartment}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "apartment",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="City / Town*"
                                        value={shippingAddress.city}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "city",
                                            e.target.value
                                          )
                                        }
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
                                        value={shippingAddress.district}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "district",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Postcode / ZIP*"
                                        value={shippingAddress.zip}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "zip",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        cols="8"
                                        rows="3"
                                        value={shippingAddress.notes}
                                        onChange={(e) =>
                                          handleShippingAddress(
                                            "notes",
                                            e.target.value
                                          )
                                        }
                                        placeholder="Special Notes"
                                      ></textarea>
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
                              {cart &&
                                cart.cartItems.map((item, index) => (
                                  <tr key={index / 5320}>
                                    <td>
                                      {
                                        products?.find(
                                          (product) =>
                                            product.id === item.product
                                        )?.doc?.name
                                      }{" "}
                                      <strong> x {item.quantity}</strong>
                                    </td>
                                    <td>
                                      $
                                      {parseInt(item.quantity) *
                                        parseFloat(item.price)}
                                    </td>
                                  </tr>
                                ))}
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
