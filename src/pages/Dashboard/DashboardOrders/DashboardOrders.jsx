import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TopBar } from "../../../components/DashoardComponents";
import { sum, numberWithCommas } from "../../../methods";

const DashboardOrders = () => {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }));
  return (
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Orders</div>
              <div className="number">{0}</div>
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
              <div className="number">{numberWithCommas(sum([]))}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-coin-stack cart two my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Orders Pending</div>
              <div className="number">${numberWithCommas(sum([]))}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-money cart two my-0 ms-4"></i>
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
                <thead>
                  <tr>
                    <th scope="col">Order Name</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.doc.name}</td>
                      <td>{product.doc.stock}</td>
                      <td>${product.doc.price}</td>
                      <td>${product.doc.stock * product.doc.price}</td>
                      <td>
                        {product.doc.inStock ? (
                          <span className="badge bg-success">In Stock</span>
                        ) : (
                          <span className="badge bg-danger">Out of Stock</span>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          title="View Order"
                          onClick={() =>
                            navigate(`/dashboard/orders/view/${product.id}`)
                          }
                        >
                          <i className="bx bx-eye-alt"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          title="Delete Order"
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOrders;
