import { useEffect, useRef } from "react";
import { TopBar } from "../../../components/DashoardComponents";

const DashboardHome = () => {
  useEffect(() => {
    document.title = "Dashboard | Quagrifresh";
  });

  return (
    <section className="home-section">
      <TopBar />

      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Order</div>
              <div className="number">40</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">Up from yesterday</span>
              </div>
            </div>
            <i className="bx bx-cart-alt cart"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Discount</div>
              <div className="number">2507</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">Up from yesterday</span>
              </div>
            </div>
            <i className="bx bxs-cart-add cart two"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Profit</div>
              <div className="number">$12,876</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">Up from yesterday</span>
              </div>
            </div>
            <i className="bx bx-cart cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Return</div>
              <div className="number">11,086</div>
              <div className="indicator">
                <i className="bx bx-down-arrow-alt down"></i>
                <span className="text">Down From Today</span>
              </div>
            </div>
            <i className="bx bxs-cart-download cart four"></i>
          </div>
        </div>

        <div className="sales-boxes">
          <div className="recent-sales box">
            <div className="title">Recent Orders</div>
            <div className="sales-details ">
              <ul className="details ps-0">
                <li className="topic">Date</li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
                <li>
                  <a href="#">25 July 2021</a>
                </li>
              </ul>
              <ul className="details ps-0">
                <li className="topic">Product</li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Baked Goods</a>
                </li>
                <li>
                  <a href="#">Nuts</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Baked Goods</a>
                </li>
              </ul>
              <ul className="details ps-0">
                <li className="topic">Status</li>
                <li>
                  <a href="#">Delivered</a>
                </li>
                <li>
                  <a href="#">Pending</a>
                </li>
                <li>
                  <a href="#">Returned</a>
                </li>
                <li>
                  <a href="#">Delivered</a>
                </li>
                <li>
                  <a href="#">Pending</a>
                </li>
                <li>
                  <a href="#">Returned</a>
                </li>
                <li>
                  <a href="#">Delivered</a>
                </li>
              </ul>
              <ul className="details ps-0">
                <li className="topic">Total</li>
                <li>
                  <a href="#">$204.98</a>
                </li>
                <li>
                  <a href="#">$24.55</a>
                </li>
                <li>
                  <a href="#">$25.88</a>
                </li>
                <li>
                  <a href="#">$170.66</a>
                </li>
                <li>
                  <a href="#">$56.56</a>
                </li>
                <li>
                  <a href="#">$44.95</a>
                </li>
                <li>
                  <a href="#">$67.33</a>
                </li>
              </ul>
            </div>
            <div className="button">
              <a href="#">See All</a>
            </div>
          </div>
          <div className="top-sales box">
            <div className="title">Top Products</div>
            <ul className="top-sales-details px-0">
              <li>
                <a href="#">
                  <img src="/images/products/product-img-1.jpg" alt="" />
                  <span className="product">Fruit</span>
                </a>
                <span className="price">$17</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/products/product-img-2.jpg" alt="" />
                  <span className="product">Fruit</span>
                </a>
                <span className="price">$17</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/products/product-img-3.jpg" alt="" />
                  <span className="product">Fruit</span>
                </a>
                <span className="price">$14</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/products/product-img-4.jpg" alt="" />
                  <span className="product">Fruit</span>
                </a>
                <span className="price">$22</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/products/product-img-5.jpg" alt="" />
                  <span className="product">Fruit</span>
                </a>
                <span className="price">$17</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/products/product-img-6.jpg" alt="" />
                  <span className="product">Fruit</span>
                </a>
                <span className="price">$25</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
