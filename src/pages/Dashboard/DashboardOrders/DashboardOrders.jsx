import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TopBar } from "../../../components/DashoardComponents";
import { sum, numberWithCommas } from "../../../methods";
import { getProducts } from "../../../redux/actionCreators/products.actionCreators";

const DashboardOrders = () => {
  const { user, token, products, isLoading } = useSelector((state) => ({
    user: state.auth.user,
    token: state.auth.token,
    products: state.products.products,
    isLoading: state.products.isLoading,
  }));

  const [orders, setOrders] = useState([]);
  const [ordersProccesed, setOrdersProccesed] = useState([]);
  const [ordersPending, setOrdersPending] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;

    axios
      .get(`${BACKEND_URL}/api/order/get/myorders/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getProducts());
        console.log(res.data);
        setOrders(res.data.myOrders);
        setOrdersProccesed(
          res.data.myOrders.filter(
            (order) => order.doc.status.toLowerCase() === "proccesed" && order
          )
        );
        setOrdersPending(
          res.data.myOrders.filter(
            (order) => order.doc.status.toLowerCase() === "pending" && order
          )
        );
        if (user.type === "seller") {
          // find products that belong to the seller in the orders
          const sellerProducts = products.filter(
            (product) => product.doc.productBy === user._id
          );
          // seperate products with their orders
          const sellerOrders = sellerProducts.map((product) => {
            const order = res.data.myOrders.find((order) =>
              order.doc.cartItems.find(
                (cartItem) => cartItem.product === product.id
              )
            );
            if (order) {
              return {
                order,
                product,
                quantity: order.doc.cartItems.find(
                  (cartItem) => cartItem.product === product.id
                ).quantity,
              };
            }
          });

          setSellerOrders(sellerOrders);
          console.log(sellerOrders);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Orders</div>
              <div className="number">{orders.length}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-food-menu cart my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Orders Processed</div>
              <div className="number">
                {numberWithCommas(ordersProccesed.length)}
              </div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-check cart two my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Orders Pending</div>
              <div className="number">
                {numberWithCommas(ordersPending.length)}
              </div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-time cart two my-0 ms-4"></i>
          </div>
        </div>
        <div className="sales-boxes">
          <div className="recent-sales mx-auto mt-3 all-products box">
            <div className=" d-flex align-items-center justify-content-between">
              <div className="title w-100">
                <h2>All Orders</h2>
              </div>
              {user && user.type === "seller" && (
                <div className="button">
                  <Link
                    to="/dashboard/orders/create"
                    className="d-flex align-items-center gap-1"
                  >
                    <i className="bx bx-plus"></i>

                    <span className="text my-0">Create New Order</span>
                  </Link>
                </div>
              )}
            </div>
            <div className="sales-details">
              <table className="table table-hover">
                {user && user.type === "seller" ? (
                  <>
                    <thead>
                      <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sellerOrders.length > 0 ? (
                        sellerOrders.map((order, index) => (
                          <tr key={order?.order?.doc._id + index}>
                            <td>{order?.order?.doc._id}</td>
                            <td>
                              {order?.product?.doc.name}:{""} $
                              {order?.product?.doc?.price} x {order?.quantity}
                            </td>
                            <td>
                              ${" "}
                              {numberWithCommas(
                                parseFloat(order?.product?.doc?.price) *
                                  order?.quantity
                              )}
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  order?.order?.doc.status === "Pending"
                                    ? "bg-warning"
                                    : "bg-success"
                                }`}
                              >
                                {order?.order?.doc?.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No Orders
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </>
                ) : (
                  <>
                    <thead>
                      <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Products</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length > 0 ? (
                        orders.map((order) => (
                          <tr key={order.doc._id}>
                            <td scope="row">{order.doc._id}</td>
                            <td>
                              {order.doc.cartItems.map((cartItem, index) => (
                                <div key={cartItem.product}>
                                  <span className="text-capitalize">
                                    {products.map((product) => {
                                      if (
                                        product.doc._id === cartItem.product
                                      ) {
                                        return `${index + 1}) ${
                                          product.doc.name
                                        }`;
                                      }
                                    })}
                                  </span>
                                  :
                                  <span className="mx-1">
                                    {cartItem.quantity}
                                  </span>
                                  <span className="mx-1">x</span>
                                  <span>{cartItem.quantity}</span>
                                </div>
                              ))}
                            </td>
                            <td>${Math.floor(order.doc.orderTotal)}</td>
                            <td>
                              <span
                                className={`badge ${
                                  order.doc.status === "Pending"
                                    ? "bg-warning"
                                    : "bg-success"
                                }`}
                              >
                                {order.doc.status}
                              </span>
                            </td>
                            <td>
                              <button
                                className="btn btn-sm btn-danger"
                                title="cancle order"
                              >
                                <i className="bx bx-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No Orders found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>

        {user && user.type === "seller" && (
          <div className="sales-boxes">
            <div className="recent-sales mx-auto mt-3 all-products box">
              <div className=" d-flex align-items-center justify-content-between">
                <div className="title w-100">
                  <h2>Order Areas</h2>
                </div>
              </div>
              <div className="sales-details">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Orders No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length > 0 ? (
                      orders.map((order) => (
                        <tr key={order?.doc._id * 54}>
                          <td>{order?.doc?.area?.name}</td>
                          <td>
                            {
                              sellerOrders.filter(
                                (orderItem) =>
                                  orderItem?.order?.doc?.area?.name ===
                                  order?.doc?.area?.name
                              ).length
                            }
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="text-center">
                          No Areas found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardOrders;
