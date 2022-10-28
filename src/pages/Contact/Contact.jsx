import { useEffect } from "react";
import "./Contact.css";
// AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI
import { Map, GoogleApiWrapper } from "google-maps-react";

const Contact = (props) => {
  return (
    <section className="contact_section layout_padding2-top layout_padding-bottom">
      <div className="container">
        <h2 className="display-2 py-5 text-center text-black">Get In Touch</h2>
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="form_container">
              <form action="">
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className="message-box form-control"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="map_container">
              <div className="map">
                <div id="googleMap">
                  <Map
                    google={props.google}
                    zoom={14}
                    style={{
                      width: "600px",
                      height: "442px",
                    }}
                    initialCenter={{
                      lat: -40.712775,
                      lng: -74.005973,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.QUAGRI_API_GOOGLE_KEY,
})(Contact);
