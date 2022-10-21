import Image1 from "../../../assets/img/Promo/1.jpg";
import Image7 from "../../../assets/img/pro/7.jpg";
import Image2 from "../../../assets/img/pro/2.jpg";
import Image3 from "../../../assets/img/pro/3.jpg";
import Image4 from "../../../assets/img/pro/4.jpg";

import Icon1 from "../../../assets/img/icons/1.png";
import Icon2 from "../../../assets/img/icons/2.png";
import Icon3 from "../../../assets/img/icons/3.png";
import Icon4 from "../../../assets/img/icons/4.png";

const Promo = () => {
  return (
    <>
      <section id="aa-promo">
        <div class="container px-5">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-promo-area">
                <div class="row">
                  <div class="col-md-5 p-0">
                    <div class="aa-promo-left ">
                      <div class="aa-promo-banner">
                        <img src={Image1} alt="img" />
                        <div class="aa-prom-content"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 p-0">
                    <div class="aa-promo-right">
                      <div class="aa-single-promo-right">
                        <div class="aa-promo-banner">
                          <img src={Image7} alt="img" />
                          <div class="aa-prom-content"></div>
                        </div>
                      </div>
                      <div class="aa-single-promo-right">
                        <div class="aa-promo-banner">
                          <img src={Image2} alt="img" />
                          <div class="aa-prom-content"></div>
                        </div>
                      </div>
                      <div class="aa-single-promo-right">
                        <div class="aa-promo-banner">
                          <img src={Image3} alt="img" />
                          <div class="aa-prom-content"></div>
                        </div>
                      </div>
                      <div class="aa-single-promo-right">
                        <div class="aa-promo-banner">
                          <img src={Image4} alt="img" />
                          <div class="aa-prom-content"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="for_box_bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
              <div class="for_box">
                <i>
                  <img src={Icon1} alt="#" />
                </i>
                <span>1996923</span>
                <h3>Harvests</h3>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
              <div class="for_box">
                <i>
                  <img src={Icon2} alt="#" />
                </i>
                <span>8000</span>
                <h3>Units of Cattle</h3>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
              <div class="for_box">
                <i>
                  <img src={Icon3} alt="#" />
                </i>
                <span>60002</span>
                <h3>Farm</h3>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
              <div class="for_box">
                <i>
                  <img src={Icon4} alt="#" />
                </i>
                <span>1623</span>
                <h3>Units of Technic</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
