import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { products, isLoading } = useSelector(
    (state) => ({
      products: state.products.products,
      isLoading: state.products.isLoading,
    }),
    shallowEqual
  );
  return (
    <>
      {!isLoading &&
        products.map((product, index) => (
          <li key={index / 4563}>
            <figure>
              <Link className="aa-product-img" href="#">
                <img
                  src={product.doc.images[0].secure_url}
                  alt=" img"
                  className="w-100 h-100"
                />
              </Link>
              <button className="aa-add-card-btn">
                <span className="fa fa-shopping-cart"></span>Add To Cart
              </button>
              <figcaption className="mt-3">
                <h4 className="aa-product-title text-capitalize">
                  <Link to={`/product/${product.id}`}>{product.doc.name}</Link>
                </h4>
                <span className="aa-product-price">${product.doc.price}</span>
                {/* <span className="aa-product-price">
                  <del>$65.50</del>
                </span> */}
                <p className="aa-product-descrip">{product.doc.description}</p>
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
