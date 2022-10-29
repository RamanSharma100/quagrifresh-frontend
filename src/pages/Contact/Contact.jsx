// import { useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import "./Contact.css";
import { useEffect, useRef, useState } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

const Contact = (props) => {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-77.434769);
  const [mapLatitude, setMapLatitude] = useState(37.54129);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  useEffect(() => {
    let map = tt.map({
      key: import.meta.env.QUAGRI_API_TOMTOM_KEY,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    return () => map.remove();
  }, []);

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
                <div ref={mapElement} id="googleMap">
                  {/* <Map
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
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// GoogleApiWrapper({
//   apiKey: import.meta.env.QUAGRI_API_GOOGLE_KEY,
// })(
export default Contact;
