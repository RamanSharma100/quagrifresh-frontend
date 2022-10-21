const Footer = () => {
  return (
    <section>
      <footer id="aa-footer">
        <h1 className="display-5 mb-0 pb-0 text-success fw-normal text-center mt-4">
          _________________________________________________________________________
        </h1>
        <div className="footer1 mt-0">
          <h1 className="display-5 mt-5 fw-normal"> QUAGRIFRESH </h1>
          <span className="mt-4">Connect with us at</span>
          <div className="social-media mt-3">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-play"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer2 ">
          <div className="Product">
            <div className="heading">About Us</div>
            <div className="div">Who We Are</div>
            <div className="div">Contact Us</div>
            <div className="div">Seller Login</div>
            <div className="div">Track your Delivery</div>
            <div className="div">Blog</div>
          </div>
          <div className="services">
            <div className="heading">Make Money With Us</div>
            <div className="div">Sell On</div>
            <div className="div">Advertise your Products</div>
            <div className="div">Affiliate Marketing</div>
            <div className="div">Partner With Us</div>
            <div className="div">App for You</div>
          </div>
          <div className="Get Help">
            <div className="heading">Get Help</div>
            <div className="div">Complaint</div>
            <div className="div">Payment</div>
            <div className="div">Shipping</div>
            <div className="div">FAQ</div>
            <div className="div">Security</div>
          </div>
          <div className="Get Help">
            <div className="heading">Learn More</div>
            <div className="div">Help Center</div>
            <div className="div">Privacy Policy</div>
            <div className="div">Terms</div>
            <div className="div">Login</div>
            <div className="div">Sitemap</div>
          </div>
        </div>
        <div className="footer3 mt-0 py-5 mb-0 text-white">
          Copyright © Made by THE GRASSLANDERS NETWORK. All Rights Reserved.{" "}
          {new Date().getFullYear()}
        </div>
        <div
          className="aa-footer-payment text-white text-center py-5 d-flex gap-2 justify-content-center"
          style={{ backgroundColor: "rgb(25, 158, 76)", fontSize: "3.5rem" }}
        >
          <span className="fa fa-cc-mastercard"></span>
          <span className="fa fa-cc-visa"></span>
          <span className="fa fa-paypal"></span>
          <span className="fa fa-cc-discover"></span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
