const SideBar = () => {
  return (
    <div class="col-lg-3 col-md-3 col-sm-4 col-md-pull-9 mt-3">
      <aside class="aa-sidebar">
        {/* sdiebar widged  */}

        <div class="aa-sidebar-widget">
          <h3 className="py-3">Category</h3>
          <ul class="aa-catg-nav">
            <li>
              <a href="#">Fruits</a>
            </li>
            <li>
              <a href="">Vegetables</a>
            </li>
            <li>
              <a href="">Herbs</a>
            </li>
            <li>
              <a href="">Bakery Goods</a>
            </li>
            <li>
              <a href="">Dairy & Eggs</a>
            </li>
          </ul>
        </div>
        {/* sdiebar widged  */}

        <div class="aa-sidebar-widget mt-4">
          <h3>Tags</h3>
          <div class="tag-cloud">
            <a href="#">Wine</a>
            <a href="#">Ecommerce</a>
            <a href="#">Shop</a>
            <a href="#">Seafood</a>
            <a href="#">Pulses</a>
            <a href="#">Meat</a>
            <a href="#">Beverages</a>
          </div>
        </div>
        {/* sdiebar widged  */}

        <div class="aa-sidebar-widget mt-4">
          <h3>Shop By Price</h3>

          <div class="aa-sidebar-price-range">
            <form action="">
              <div
                id="skipstep"
                class="noUi-target noUi-ltr noUi-horizontal noUi-background"
              ></div>
              <span id="skip-value-lower" class="example-val">
                30.00
              </span>
              <span id="skip-value-upper" class="example-val">
                100.00
              </span>
              <button class="aa-filter-btn" type="submit">
                Filter
              </button>
            </form>
          </div>
        </div>
        {/* sdiebar widged  */}

        <div class="aa-sidebar-widget mt-4">
          <h3>Shop By Color</h3>
          <div class="aa-color-tag">
            <a class="aa-color-green" href="#"></a>
            <a class="aa-color-yellow" href="#"></a>
            <a class="aa-color-pink" href="#"></a>
            <a class="aa-color-purple" href="#"></a>
            <a class="aa-color-blue" href="#"></a>
            <a class="aa-color-orange" href="#"></a>
            <a class="aa-color-gray" href="#"></a>
            <a class="aa-color-black" href="#"></a>
            <a class="aa-color-white" href="#"></a>
            <a class="aa-color-cyan" href="#"></a>
            <a class="aa-color-olive" href="#"></a>
            <a class="aa-color-orchid" href="#"></a>
          </div>
        </div>
        {/* sdiebar widged  */}
        {/* <div class="aa-sidebar-widget">
          <h3>Recently Views</h3>
          <div class="aa-recently-views">
            <ul>
              <li>
                <a href="#" class="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-3.jpg" />
                </a>
                <div class="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" class="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-2.jpg" />
                </a>
                <div class="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" class="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-1.jpg" />
                </a>
                <div class="aa-cartbox-info">
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
        {/* <div class="aa-sidebar-widget">
          <h3>Top Rated Products</h3>
          <div class="aa-recently-views">
            <ul>
              <li>
                <a href="#" class="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-6.jpg" />
                </a>
                <div class="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" class="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-5.jpg" />
                </a>
                <div class="aa-cartbox-info">
                  <h4>
                    <a href="#">Product Name</a>
                  </h4>
                  <p>1 x $250</p>
                </div>
              </li>
              <li>
                <a href="#" class="aa-cartbox-img">
                  <img alt="img" src="img/products/product-img-4.jpg" />
                </a>
                <div class="aa-cartbox-info">
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
