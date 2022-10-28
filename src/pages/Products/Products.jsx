import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getProducts } from "../../redux/actionCreators/products.actionCreators";

import BannerImage from "../../assets/img/background/banner-02.jpg";
import { ProductsList, SideBar } from "../../components/ProductsPageComponents";

const Products = () => {
  const { products, isLoading } = useSelector(
    (state) => ({
      products: state.products.products,
      isLoading: state.products.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <section
            className="bg-title-page flex-c-m "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(" +
                BannerImage +
                ")",
            }}
          >
            <h2 className="tit6 t-center">Products</h2>
          </section>
          <section id="aa-product-category">
            <div className="container">
              <div className="row">
                {/* sidebar  */}
                <SideBar />
                <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
                  <div className="aa-product-catg-content">
                    <div className="aa-product-catg-head">
                      <div className="aa-product-catg-head-left">
                        <form action="" className="aa-sort-form">
                          <label htmlFor="">Sort by</label>
                          <select name="">
                            <option value="1" selected="Default">
                              Default
                            </option>
                            <option value="2">Name</option>
                            <option value="3">Price</option>
                            <option value="4">Date</option>
                          </select>
                        </form>
                        <form action="" className="aa-show-form">
                          <label htmlFor="">Show</label>
                          <select name="">
                            <option value="1" selected="12">
                              12
                            </option>
                            <option value="2">24</option>
                            <option value="3">36</option>
                          </select>
                        </form>
                      </div>
                      <div className="aa-product-catg-head-right">
                        <a id="grid-catg" href="#">
                          <span className="fa fa-th"></span>
                        </a>
                        <a id="list-catg" href="#">
                          <span className="fa fa-list"></span>
                        </a>
                      </div>
                    </div>
                    <div className="aa-product-catg-body">
                      <ul className="aa-product-catg">
                        <ProductsList />
                      </ul>
                      {/* view model                   */}
                      <div
                        className="modal fade"
                        id="quick-view-modal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                &times;
                              </button>
                              <div className="row">
                                {/* modal view slider  */}
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="aa-product-view-slider">
                                    <div
                                      className="simpleLens-gallery-container"
                                      id="demo-1"
                                    >
                                      <div className="simpleLens-container">
                                        <div className="simpleLens-big-image-container">
                                          <a
                                            className="simpleLens-lens-image"
                                            data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                          >
                                            <img
                                              src=""
                                              className="simpleLens-big-image"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="simpleLens-thumbnails-container">
                                        <a
                                          href="#"
                                          className="simpleLens-thumbnail-wrapper"
                                          data-lens-image=""
                                          data-big-image=""
                                        >
                                          <img src="" />
                                        </a>
                                        <a
                                          href="#"
                                          className="simpleLens-thumbnail-wrapper"
                                          data-lens-image=""
                                          data-big-image=""
                                        >
                                          <img src="" />
                                        </a>

                                        <a
                                          href="#"
                                          className="simpleLens-thumbnail-wrapper"
                                          data-lens-image=""
                                          data-big-image=""
                                        >
                                          <img src="" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* modal view content  */}
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="aa-product-view-content">
                                    <h3>T-Shirt</h3>
                                    <div className="aa-price-block">
                                      <span className="aa-product-view-price">
                                        $34.99
                                      </span>
                                      <p className="aa-product-avilability">
                                        Avilability: <span>In stock</span>
                                      </p>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Officiis animi,
                                      veritatis quae repudiandae quod nulla
                                      porro quidem, itaque quis quaerat!
                                    </p>

                                    <div className="aa-prod-quantity">
                                      <form action="">
                                        <select name="" id="">
                                          <option value="0" selected="1">
                                            1
                                          </option>
                                          <option value="1">2</option>
                                          <option value="2">3</option>
                                          <option value="3">4</option>
                                          <option value="4">5</option>
                                          <option value="5">6</option>
                                        </select>
                                      </form>
                                      <p className="aa-prod-category">
                                        Category: <a href="#">Fruits</a>
                                      </p>
                                    </div>
                                    <div className="aa-prod-view-bottom">
                                      <a
                                        href="#"
                                        className="aa-add-to-cart-btn"
                                      >
                                        <span className="fa fa-shopping-cart"></span>
                                        Add To Cart
                                      </a>
                                      <a
                                        href="#"
                                        className="aa-add-to-cart-btn"
                                      >
                                        View Details
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* pagination  */}
                    <div className="aa-product-catg-pagination">
                      <nav>
                        <ul className="pagination">
                          <li>
                            <a href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">4</a>
                          </li>
                          <li>
                            <a href="#">5</a>
                          </li>
                          <li>
                            <a href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Products;
