import { Link } from "react-router-dom";

import BannerImage from "../../assets/img/background/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItemAction,
  updateCart,
} from "../../redux/actionCreators/cart.actionCreators";
import { useEffect, useState } from "react";
import { sum } from "../../methods";

const Cart = () => {
  const { cart, user, token, products } = useSelector((state) => ({
    cart: state.cart,
    user: state.auth.user,
    token: state.auth.token,
    products: state.products.products,
  }));

  const dispatch = useDispatch();

  const [cartQty, setCartQty] = useState([]);

  const removeItemFromCart = (item) => {
    dispatch(removeCartItemAction(item, user?._id, token));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newCart = {
      ...cart,
      cartItems: cart.cartItems.map((item, index) => {
        return {
          product: item.product,
          quantity: cartQty[index],
          price: item.price,
        };
      }),
      cartTotal: sum(
        cart.cartItems.map(
          (item, index) => parseFloat(item.price) * parseInt(cartQty[index])
        )
      ),
      cartTotalQuantity: sum(cartQty.map((item) => parseInt(item))),
    };

    dispatch(updateCart(newCart, user?._id, token));
  };

  useEffect(() => {
    if (cart.cartItems.length > 0) {
      setCartQty(cart.cartItems.map((item) => item.quantity));
    }
  }, [cart]);

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
                  <form onSubmit={handleUpdate}>
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
                          {cart &&
                            products &&
                            cart.cartItems.map((item) => (
                              <tr key={item.product + 999}>
                                <td>
                                  <a
                                    className="remove"
                                    role={"button"}
                                    onClick={() => removeItemFromCart(item)}
                                  >
                                    <fa className="fa fa-trash"></fa>
                                  </a>
                                </td>
                                <td>
                                  <a href="#">
                                    <img
                                      src={
                                        products.find(
                                          (product) =>
                                            product.id === item.product
                                        )?.doc?.images[0].secure_url
                                      }
                                      alt="img"
                                    />
                                  </a>
                                </td>
                                <td>
                                  <Link
                                    className="aa-cart-title"
                                    to={`/product/${
                                      products.find(
                                        (product) => product.id === item.product
                                      )?.id
                                    }`}
                                  >
                                    {
                                      products.find(
                                        (product) => product.id === item.product
                                      )?.doc.name
                                    }
                                  </Link>
                                </td>
                                <td>
                                  $
                                  {
                                    products.find(
                                      (product) => product.id === item.product
                                    )?.doc.price
                                  }
                                </td>
                                <td>
                                  <input
                                    className="aa-cart-quantity"
                                    type="number"
                                    value={
                                      cartQty[cart.cartItems.indexOf(item)]
                                    }
                                    onChange={(e) => {
                                      const newCartQty = [...cartQty];
                                      newCartQty[cart.cartItems.indexOf(item)] =
                                        parseInt(e.target.value);
                                      setCartQty(newCartQty);
                                    }}
                                  />
                                </td>
                                <td>
                                  $
                                  {products.find(
                                    (product) => product.id === item.product
                                  )?.doc.price * item.quantity}
                                </td>
                              </tr>
                            ))}
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
                          <td>${cart.cartTotal}</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>${cart.cartTotal}</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="aa-cart-view-btn">
                      Proceed to Checkout
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
