import Image from '../../../assets/img/icons/homepage1.jpg';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div id="about" className="about pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-l2">
            <div className="about_box">
              <h2>About Quagrifresh</h2>
              <p>
                The Grasslanders Network created Quagrifresh, a one-of-a-kind
                e-commerce platform for farmers, buyers, and independent
                delivery drivers. Quagrifresh is a pro - sustainability platform
                that offers reliable, traceable delivery. Quagrifresh believes
                that fresh produce can improve people's lives by providing a
                healthier path to a better life. Organically feeding and
                transforming the world, Quagrifresh is a platform where people
                and nature can coexist peacefully. Clean. Green. Sustainable.
              </p>
              <Link to="/about">Read More</Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-l2">
            <div className="about_img">
              <figure>
                <img src={Image} alt="img" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
