import Image from "../../../assets/img/icons/homepage1.jpg";

const AboutSection = () => {
  return (
    <div id="about" class="about pt-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-l2">
            <div class="about_box">
              <h2>About Quagrifresh</h2>
              <p>
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-l2">
            <div class="about_img">
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
