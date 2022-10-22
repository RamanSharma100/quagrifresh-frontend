import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../../redux/actionCreators/products.actionCreators";

import BannerImage from "../../assets/img/background/bgt.png";

const Product = () => {
  const { productId } = useParams();

  const { product, isLoading } = useSelector((state) => ({
    product: state.products.products.find(
      (product) => product.id === productId
    ),
    isLoading: state.products.isLoading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <section id="aa-catg-head-banner">
        <img src={BannerImage} alt="fashion img" />
        <div className="aa-catg-head-banner-area">
          <div className="container">
            <div className="aa-catg-head-banner-content d-flex flex-column align-items-center justify-content-center">
              <h2>{product.doc.name}</h2>
              <nav
                aria-label="breadcrumb"
                className="align-items-center mt-3 mx-auto"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-capitalize"
                    aria-current="page"
                  >
                    {product.doc.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section id="aa-product-details">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-product-details-area">
                <div class="aa-product-details-content">
                  <div class="row">
                    <div class="col-md-5 col-sm-5 col-xs-12">
                      <div class="aa-product-view-slider">
                        <div id="demo-1" class="simpleLens-gallery-container">
                          <div class="simpleLens-container">
                            <div class="simpleLens-big-image-container">
                              <a
                                data-lens-image=""
                                class="simpleLens-lens-image"
                              >
                                <img
                                  src={product.doc.images[0].secure_url}
                                  class="simpleLens-big-image w-100 h-100"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 col-sm-7 col-xs-12">
                      <div class="aa-product-view-content">
                        <h3>Fruits</h3>
                        <div class="aa-price-block">
                          <span class="aa-product-view-price">$34.99</span>
                          <p class="aa-product-avilability">
                            Avilability:{" "}
                            <span>
                              {product.doc.inStock ? "In Stock" : "Sold Out"}
                            </span>
                          </p>
                        </div>
                        <p>{product.doc.description.slice(0, 201)} ...</p>

                        <h4>Color</h4>
                        <div class="aa-color-tag">
                          {JSON.parse(product.doc.colors).map(
                            (color, index) => (
                              <a
                                key={index * 636}
                                href="#"
                                class={`aa-color-${color}`}
                              ></a>
                            )
                          )}
                        </div>
                        <div class="aa-prod-quantity">
                          <form action="">
                            <select id="" name="">
                              <option selected="1" value="0">
                                1
                              </option>
                              <option value="1">2</option>
                              <option value="2">3</option>
                              <option value="3">4</option>
                              <option value="4">5</option>
                              <option value="5">6</option>
                            </select>
                          </form>
                          <p class="aa-prod-category text-capitalize">
                            Category:{" "}
                            <a href="#">
                              {JSON.parse(product.doc.category).join(", ")}
                            </a>
                          </p>
                        </div>
                        <div class="aa-prod-view-bottom">
                          <a class="aa-add-to-cart-btn" href="#">
                            Add To Cart
                          </a>
                          <a class="aa-add-to-cart-btn" href="#">
                            Wishlist
                          </a>
                          <a class="aa-add-to-cart-btn" href="#">
                            Compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="aa-product-details-bottom">
                  <ul
                    class="nav nav-pills py-3 mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      {product.doc.description}
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="aa-product-review-area">
                        <h4>2 Reviews for Fruit</h4>
                        <ul class="aa-review-nav">
                          <li>
                            <div class="media">
                              <div class="media-left">
                                <a href="#">
                                  <img class="media-object" src="" alt="" />
                                </a>
                              </div>
                              <div class="media-body">
                                <h4 class="media-heading">
                                  <strong>Tanjo</strong> -{" "}
                                  <span>July 25, 2022</span>
                                </h4>
                                <div class="aa-product-rating">
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star-o"></span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="media">
                              <div class="media-left">
                                <a href="#">
                                  <img class="media-object" src="" alt="" />
                                </a>
                              </div>
                              <div class="media-body">
                                <h4 class="media-heading">
                                  <strong>Marla Jobs</strong> -{" "}
                                  <span>March 26, 2016</span>
                                </h4>
                                <div class="aa-product-rating">
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star-o"></span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <h4>Add a review</h4>
                        <div class="aa-your-rating">
                          <p>Your Rating</p>
                          <a href="#">
                            <span class="fa fa-star-o"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star-o"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star-o"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star-o"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star-o"></span>
                          </a>
                        </div>
                        <form action="" class="aa-review-form">
                          <div class="form-group">
                            <label for="message">Your Review</label>
                            <textarea
                              class="form-control"
                              rows="3"
                              id="message"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label for="name">Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="email">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="example@gmail.com"
                            />
                          </div>

                          <button
                            type="submit"
                            class="btn btn-default aa-review-submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
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

export default Product;
