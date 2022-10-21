import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

import Image1 from "../../../assets/img/slider/1.jpg";
import Image2 from "../../../assets/img/slider/2.jpg";
import Image3 from "../../../assets/img/slider/3.jpg";
import Image4 from "../../../assets/img/slider/4.jpeg";
import Image5 from "../../../assets/img/slider/5.jpg";
import Image6 from "../../../assets/img/slider/6.jpg";
import Image7 from "../../../assets/img/slider/7.jpg";
import Image8 from "../../../assets/img/slider/8.jpg";

const Slider = () => {
  const images = [
    {
      url: Image1,
    },
    {
      url: Image2,
    },
    {
      url: Image3,
    },
    {
      url: Image4,
    },

    {
      url: Image5,
    },
    {
      url: Image6,
    },
    {
      url: Image7,
    },
    {
      url: Image8,
    },
  ];

  return (
    <section id="aa-slider">
      <div className="aa-slider-area">
        <SimpleImageSlider
          width={"100%"}
          height={600}
          images={images}
          showBullets={false}
          showNavs={true}
        />
        <div className="seq-title">
          <Link
            data-seq
            to="/products"
            className="aa-shop-now-btn aa-secondary-btn"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Slider;
