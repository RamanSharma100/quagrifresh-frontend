import { useSelector } from "react-redux";

const SideBar = () => {
  const { productCategories, colors } = useSelector((state) => ({
    productCategories: new Set(
      [].concat(
        ...state.products.products.map((product) =>
          JSON.parse(product.doc.category)
        )
      )
    ),
    colors: new Set(
      [].concat(
        ...state.products.products.map((product) =>
          JSON.parse(product.doc.colors)
        )
      )
    ),
  }));
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-md-pull-9 mt-3">
      <aside className="aa-sidebar">
        {/* sdiebar widged  */}

        <div className="aa-sidebar-widget">
          <h3 className="py-3">Category</h3>
          <ul className="aa-catg-nav">
            {productCategories &&
              [...productCategories].map((category) => (
                <li key={category}>
                  <a href="#" className="text-capitalize">
                    {category}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        {/* sdiebar widged  */}

        <div className="aa-sidebar-widget mt-4">
          <h3>Tags</h3>
          <div className="tag-cloud">
            {productCategories &&
              [...productCategories].map((category) => (
                <a key={category + 542} href="#" className="text-capitalize">
                  {category}
                </a>
              ))}
          </div>
        </div>
        {/* sdiebar widged  */}

        {/* <div className="aa-sidebar-widget mt-4">
          <h3>Shop By Price</h3>

          <div className="aa-sidebar-price-range">
            <form action="">
              <div
                id="skipstep"
                className="noUi-target noUi-ltr noUi-horizontal noUi-background"
              ></div>
              <span id="skip-value-lower" className="example-val">
                30.00
              </span>
              <span id="skip-value-upper" className="example-val">
                100.00
              </span>
              <button className="aa-filter-btn" type="submit">
                Filter
              </button>
            </form>
          </div>
        </div> */}
        {/* sdiebar widged  */}

        <div className="aa-sidebar-widget mt-4">
          <h3>Shop By Color</h3>
          <div className="aa-color-tag">
            {colors &&
              [...colors].map((color) => (
                <a
                  key={color}
                  href="#"
                  className={`aa-color-${color}`}
                  style={{
                    backgroundColor: color,
                  }}
                ></a>
              ))}
          </div>
        </div>
        {/* sdiebar widged  */}
        {/* <div className="aa-sidebar-widget">
          <h3>Recently Views</h3>
          <div className="aa-recently-views">
            <ul>
              <li>
                <a href="#" className="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-3.jpg" />
                </a>
                <div className="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" className="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-2.jpg" />
                </a>
                <div className="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" className="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-1.jpg" />
                </a>
                <div className="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
        {/* sdiebar widged  */}
        {/* <div className="aa-sidebar-widget">
          <h3>Top Rated Products</h3>
          <div className="aa-recently-views">
            <ul>
              <li>
                <a href="#" className="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-6.jpg" />
                </a>
                <div className="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" className="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-5.jpg" />
                </a>
                <div className="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" className="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-4.jpg" />
                </a>
                <div className="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </aside>
    </div>
  );
};

export default SideBar;
