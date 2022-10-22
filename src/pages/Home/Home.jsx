import "./Home.css";

import {
  Slider,
  AboutSection,
  Promo,
  VideoSection,
  SupportSection,
  PricingSection,
} from "../../components/HomePageComponents";

import BannerImg from "../../assets/img/background/bgt.png";
import { SubscribeSection } from "../../components";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutSection />
      <Promo />
      <VideoSection />
      <SupportSection />
      <PricingSection />
      <section id="aa-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-banner-area">
                  <a href="#">
                    <img src={BannerImg} alt="banner img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeSection />
    </>
  );
};

export default Home;
