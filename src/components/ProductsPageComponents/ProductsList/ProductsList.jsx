import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { postCartItem } from "../../../redux/actionCreators/cart.actionCreators";

const ProductsList = () => {
  const { products, isLoading, user, isAuthenticated, token } = useSelector(
    (state) => ({
      products: state.products.products,
      isLoading: state.products.isLoading,
      user: state.auth.user,
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    if (isAuthenticated) {
      if (user._id === product.doc.productBy) {
        return toast.info("You can't add your own product to cart");
      }
    } else {
      return toast.info("Please login to add product to cart");
    }

    const data = {
      product: product.id,
      quantity: 1,
      price: product.doc.price,
    };

    dispatch(postCartItem(data, user?._id, token));
    toast.success("Product added to cart");
  };
  return (
    <>
      {!isLoading &&
        products.map((product, index) => (
          <li key={index / 4563}>
            <figure>
              <div className="aa-product-img">
                {product.doc.images.length > 1 ? (
                  <div
                    key={index}
                    id={`carouselProductsIndicators${index}`}
                    className="carousel slide card-img-top"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      {product.doc.images.map((image, id) => (
                        <button
                          type="button"
                          data-bs-target={`#carouselProductsIndicators${index}`}
                          data-bs-slide-to={id}
                          className={id === 0 ? "active" : ""}
                          key={id * 512}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      {product.doc.images.map((image, i) => (
                        <div
                          className={
                            i === 0 ? "carousel-item active" : "carousel-item"
                          }
                          key={i * 54165}
                        >
                          <img
                            src={image.secure_url}
                            className="d-block w-100"
                            alt={image.original_filename}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev "
                      type="button"
                      data-bs-target={`#carouselProductsIndicators${index}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon "
                        style={{ backgroundColor: "black" }}
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carouselProductsIndicators${index}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        style={{ backgroundColor: "black" }}
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                ) : product.doc.images.length === 1 ? (
                  <img
                    src={product.doc.images[0].secure_url}
                    alt=" img"
                    className="w-100 h-100"
                  />
                ) : (
                  <img
                    src={product.doc.images[0].secure_url}
                    alt=" img"
                    className="w-100 h-100"
                  />
                )}
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className="aa-add-card-btn"
              >
                <span className="fa fa-shopping-cart"></span>Add To Cart
              </button>

              <figcaption className="mt-3 w-100">
                <h4 className="aa-product-title text-capitalize">
                  <Link to={`/product/${product.id}`}>{product.doc.name}</Link>
                </h4>
                <span className="aa-product-price">${product.doc.price}</span>
                {/* <span className="aa-product-price">
                  <del>$65.50</del>
                </span> */}
                <p className="aa-product-descrip">{product.doc.description}</p>

                {user && user._id === product.doc.productBy && (
                  <>
                    <p className="aa-badge badge text-end bg-transparent text-primary mt-2 end-0 ">
                      Product By You
                    </p>
                    <div className="d-flex mt-2 justify-content-between">
                      <Link
                        to={`/dashboard/products/update/${product.id}`}
                        className="btn btn-outline-primary w-50"
                      >
                        <i className="fa fa-pencil me-2"></i>
                        Edit
                      </Link>
                      <button className="btn btn-danger w-50 ms-2">
                        <i className="fa fa-trash me-2"></i>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </figcaption>
            </figure>
            <div className="aa-product-hvr-content">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to Wishlist"
              >
                <span className="fa fa-heart-o"></span>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Compare"
              >
                <span className="fa fa-exchange"></span>
              </a>
              <a
                href="#"
                data-toggle2="tooltip"
                data-placement="top"
                title="Quick View"
                data-toggle="modal"
                data-target="#quick-view-modal"
              >
                <span className="fa fa-search"></span>
              </a>
            </div>
            {/* <!-- product badge --> */}
            {product.doc.inStock ? (
              <span className="aa-badge aa-sale" href="#">
                SALE!
              </span>
            ) : (
              <span className="aa-badge aa-sold-out" href="#">
                Sold Out!
              </span>
            )}
          </li>
        ))}
    </>
  );
};

export default ProductsList;
