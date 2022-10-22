import TMember1 from "../../assets/img/Team members/Tanisha.jpeg";
import TMember2 from "../../assets/img/Team members/Terrence.jpeg";
import TMember3 from "../../assets/img/Team members/Aaron.jpeg";
import TMember4 from "../../assets/img/Team members/Raman.jpeg";
import TMember5 from "../../assets/img/Team members/Tonya.jpeg";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="bg-title-page flex-c-m ">
        <h2 className="tit6 t-center">About Us</h2>
      </section>

      <section className="py-5 t-center p-l-15 p-r-15">
        <span className="tit2 pb-5 t-center">QuagriFresh</span>
        <br />
        <h3 className="tit3 t-center m-b-35 mt-5">Our Story</h3>

        <p className="t-center size32 m-l-r-auto">
          Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis
          pretium. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a
          scelerisque in, luctus vel felis. Donec odio diam, dignissim a
          efficitur at, efficitur et est. Pellentesque semper est ut pulvinar
          ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas
          velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
        </p>
      </section>

      <section>
        <div className="video_area video_bg zigzag_bg_1 zigzag_bg_2 ">
          <div className="video_area_inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="video_text">
                    <div className="info">
                      <div className="info_inner">
                        <h4>Watch Video</h4>
                        <p>You will love our execution</p>
                      </div>
                      <div className="icon_video">
                        <a
                          className="popup-video"
                          href="https://www.youtube.com/watch?v=HWnXId_Zg4k"
                          target="_blank"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-member bgwhite p-t-115 p-b-95">
        <div className="container t-center">
          <span className="tit2 t-center">Meet Our Team</span>
          <br />
          <br />
          <h3 className="tit5 t-center mb-5 mt-5">
            "People who made QuagriFresh Reality!"
          </h3>
          <br />
          <br />
          <br />

          <div className="row d-flex">
            <div className="col-md-8 col-lg-4 mx-auto pb-5">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src={TMember1} alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Tanisha Joshi
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Webdesign & Frontend
                  </span>

                  <span className="dis-block t-center txt36 p-b-25">India</span>

                  <p className="t-center">
                    Doctoral student (Theoretical Physics)
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src={TMember4} alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Raman Sharma
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Backend & Deployment
                  </span>

                  <span className="dis-block t-center txt36 p-b-25">India</span>

                  <p className="t-center">Engineering Student (CSE)</p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src={TMember2} alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Terrence Tay
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    AI/Data Analytics
                  </span>

                  <span className="dis-block t-center txt36 p-b-25">
                    Singapore
                  </span>

                  <p className="t-center">Consultant - EY</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src={TMember3} alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Aaron Masuba
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    QR Code
                  </span>

                  <span className="dis-block t-center txt36 p-b-25">
                    Bangladesh
                  </span>

                  <p className="t-center">Engineering student (EEE)</p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src={TMember5} alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Tonya N. Jefferson
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Communicator
                  </span>

                  <span className="dis-block t-center txt36 p-b-25">USA</span>

                  <p className="t-center">
                    CEO, Transnational Imports & Exports, LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
