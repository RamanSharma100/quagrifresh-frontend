import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TopBar } from "../../../components/DashoardComponents";
import { numberWithCommas, sum } from "../../../methods";
import { getProducts } from "../../../redux/actionCreators/products.actionCreators";

const DashboardProducts = () => {
  const { products, totalStock, totalStockWorth, isLoading } = useSelector(
    (state) => ({
      products: state.products.products.filter(
        (product) => product.doc.productBy === state.auth.user._id
      ),
      totalStock: state.products.products.map((product) =>
        parseInt(product.doc.stock)
      ),
      totalStockWorth: state.products.products.map(
        (product) => parseInt(product.doc.stock) * parseFloat(product.doc.price)
      ),
      isLoading: state.products.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

  return (
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Products</div>
              <div className="number">{products.length}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-food-menu cart my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Stock</div>
              <div className="number">{numberWithCommas(sum(totalStock))}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-coin-stack cart two my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Price</div>
              <div className="number">
                ${numberWithCommas(sum(totalStockWorth))}
              </div>
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
                <h2>All Products</h2>
              </div>
              <div className="button">
                <Link
                  to="/dashboard/products/create"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="bx bx-plus"></i>

                  <span className="text my-0">Add New Product</span>
                </Link>
              </div>
            </div>
            <div className="sales-details">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
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
                          title="Edit Product"
                          onClick={() =>
                            navigate(`/dashboard/products/update/${product.id}`)
                          }
                        >
                          <i className="bx bx-edit-alt"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          title="Delete Product"
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardProducts;
