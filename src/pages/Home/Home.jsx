import "./Home.css";

import {
  Slider,
  AboutSection,
  Promo,
  VideoSection,
  SupportSection,
  PricingSection,
} from "../../components/HomePageComponents";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutSection />
      <Promo />
      <VideoSection />
      <SupportSection />
      <PricingSection />
    </>
  );
};

export default Home;
