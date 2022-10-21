import "./Home.css";

import {
  Slider,
  AboutSection,
  Promo,
} from "../../components/HomePageComponents";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutSection />
      <Promo />
    </>
  );
};

export default Home;
