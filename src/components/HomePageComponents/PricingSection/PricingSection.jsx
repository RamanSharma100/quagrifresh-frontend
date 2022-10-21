import Image1 from "../../../assets/img/images/store.png";
import Image2 from "../../../assets/img/images/food.png";
import Image3 from "../../../assets/img/images/coffee.png";

const PricingSection = () => {
  return (
    <div id="pricing" className="pricing-main pad-top-100 pad-bottom-100 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5">
            <h2 className="block-title text-center">Membership</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              orci varius, elementum lectus nec, aliquam lectus. Duis neque
              augue, maximus in sapien ut, porta pharetra odio.
            </p>
          </div>
          <div className="panel-pricing-in d-flex gap-2">
            <div className="col-md-4 col-sm-6 col-xs-12 text-center">
              <div className="panel panel-pricing">
                <div className="panel-heading">
                  <div className="pric-icon">
                    <img src={Image1} alt="" />
                  </div>
                  <h3>Basic</h3>
                </div>
                <div className="panel-body  text-center">
                  <p>
                    <strong>
                      $30/<span>Month</span>
                    </strong>
                  </p>
                </div>
                <ul className="list-group text-center">
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> One Website
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> One User
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 10 GB Bandwidth
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-times"></i> 2GB Storage
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-times"></i> Offline work
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 24x7 Support
                  </li>
                </ul>
                <div className="panel-footer  my-5">
                  <a
                    className="btn btn-lg btn-block hvr-underline-from-center"
                    href="#"
                  >
                    Purchase Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div className="panel panel-pricing">
                <div className="panel-heading">
                  <div className="pric-icon">
                    <img src={Image2} alt="" />
                  </div>
                  <h3>Pro</h3>
                </div>
                <div className="panel-body text-center">
                  <p>
                    <strong>
                      $60/<span>Month</span>
                    </strong>
                  </p>
                </div>
                <ul className="list-grouptext-center">
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> One Website
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> One User
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 50 GB Bandwidth
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 2GB Storage
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> Offline work
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 24x7 Support
                  </li>
                </ul>
                <div className="panel-footer  my-5">
                  <a
                    className="btn btn-lg btn-block hvr-underline-from-center"
                    href="#"
                  >
                    Purchase Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div className="panel panel-pricing">
                <div className="panel-heading">
                  <div className="pric-icon">
                    <img src={Image3} alt="" />
                  </div>
                  <h3>Platinum</h3>
                </div>
                <div className="panel-body text-center">
                  <p>
                    <strong>
                      $90/<span>Month</span>
                    </strong>
                  </p>
                </div>
                <ul className="list-grouptext-center">
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> One Website
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> One User
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 100 GB Bandwidth
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 2GB Storage
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> Offline work
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check"></i> 24x7 Support
                  </li>
                </ul>
                <div className="panel-footer  my-5">
                  <a
                    className="btn btn-lg btn-block hvr-underline-from-center"
                    href="#"
                  >
                    Purchase Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
