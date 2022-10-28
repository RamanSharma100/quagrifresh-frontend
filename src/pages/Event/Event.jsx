import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getEvents } from "../../redux/actionCreators/events.actionCreators";
import PlaceHolderImage from "../../assets/img/quagrifresh.png";

import "./Event.css";
import { getProducts } from "../../redux/actionCreators/products.actionCreators";
const Event = () => {
  const { id, title } = useParams();

  const { event, products, isLoading, userId, isAuthenticated } = useSelector(
    (state) => ({
      event: state.events.events.find((event) => event.id === id),
      products: state.products.products.filter((product) =>
        state.events.events
          .find((event) => event.id === id)
          ?.doc.products.includes(product.id)
      ),
      isLoading: state.events.isLoading,
      userId: state.auth.isAuthenticated && state.auth.user?._id,
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (isLoading) {
      dispatch(getEvents());
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (event) {
      const BACKEND_ENDPOINT = import.meta.env.QUAGRI_ENDPOINT_URL;
      axios
        .get(`${BACKEND_ENDPOINT}/api/user/get/${event.doc.eventBy}`)
        .then((res) => {
          setUserInfo(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [event]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-md-12">
                {/* add image  */}
                {event.doc.images.length > 1 ? (
                  <div
                    id="carouselExampleControls"
                    className="carousel banner slide w-100 h-100"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner w-100 h-100">
                      {event.doc.images.map((image, index) => (
                        <div
                          key={index * 45}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <img
                            src={image.secure_url}
                            className="d-block w-100"
                            alt={image.original_filename}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="carousel-indicators">
                      {event.doc.images.map((image, index) => (
                        <button
                          key={index * 456}
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide-to={index}
                          className={index === 0 ? "active" : ""}
                          aria-current="true"
                          aria-label={`Slide ${index + 1}`}
                        ></button>
                      ))}{" "}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                ) : event.doc.images.length === 1 ? (
                  <img
                    src={event.doc.images[0].secure_url}
                    alt={event.doc.images[0].original_filename}
                    className="img-fluid banner h-100 w-100"
                  />
                ) : (
                  <img
                    src={PlaceHolderImage}
                    alt="EventImage"
                    className="img-fluid banner h-100 w-100"
                  />
                )}
              </div>
            </div>
            <div className="row pt-5 px-5">
              <div className="col-md-3 pl-5">
                <div className="profile d-flex align-items-center gap-3">
                  <div className="profile-pic ms-2">
                    <img
                      src={
                        userInfo?.avatar
                          ? userInfo?.avatar.secure_url
                          : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      }
                      alt={"profile"}
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <Link
                      to={{
                        pathname: `/profile/${userInfo?._id}`,
                      }}
                      className="text-dark mt-3"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {userInfo?.name}
                    </Link>

                    <p className="text-muted">{userInfo?.email}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ms-auto d-flex align-items-center justify-content-end">
                <p className="bg-success small mt-3 me-2 rounded-5 fw-bold text-center text-white py-1 px-4">
                  {userInfo?.type}
                </p>
                {userId === event.doc.eventBy && isAuthenticated && (
                  <p className="bg-primary small mt-3 me-2 rounded-5 fw-bold text-center text-white py-1 px-4">
                    Event By You
                  </p>
                )}
                <button className="btn btn-dark" onClick={() => navigate(-1)}>
                  <i className="fa fa-angle-left"></i> Go Back
                </button>
              </div>
            </div>

            <div className="row px-5">
              <div className="col-md-12 p-5">
                <h1 className="SeePost__post_title display-3">
                  {title.toUpperCase()}
                </h1>
                <p
                  className="description text-left pr-5 pt-5 pb-3 text-wrap"
                  style={{ wordWrap: "break-word" }}
                  dangerouslySetInnerHTML={{ __html: event.doc.description }}
                ></p>
              </div>
            </div>

            <div className="row pt-0 mt-0 px-5">
              {/* show products  */}
              <div className="col-md-12 px-5">
                <h1 className="SeePost__post_title display-5 mb-5">Products</h1>
                <div className="row ga-2">
                  {products &&
                    products?.map((product, index) => (
                      <div className="col-md-4">
                        <div className="card">
                          <img
                            src={product?.doc.images[0].secure_url}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product?.doc.name}</h5>
                            <p className="card-text">
                              {product?.doc.description.slice(0, 150)}...
                            </p>
                            <p className="card-text">
                              Price: ${product?.doc.price}
                            </p>
                            <Link
                              to={`/product/${product?.id}`}
                              className="btn ms-5 btn-primary"
                            >
                              View Product
                            </Link>
                            <button className="btn ms-5 btn-outline-primary">
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Event;
