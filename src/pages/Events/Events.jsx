import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/actionCreators/events.actionCreators';

import BannerImage from '../../assets/img/background/banner-02.jpg';
import PlaceHolderImage from '../../assets/img/quagrifresh.png';
import { Link } from 'react-router-dom';

const Events = () => {
  const { events, isLoading, userId, isAuthenticated } = useSelector(
    (state) => ({
      events: state.events.events,
      isLoading: state.events.isLoading,
      userId: state.auth.isAuthenticated && state.auth.user?._id,
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getEvents());
    }
  }, [dispatch, isLoading]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <section
            className="bg-title-page flex-c-m "
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(' +
                BannerImage +
                ')',
            }}>
            <h2 className="tit6 t-center">Events</h2>
          </section>
          <section id="aa-event-category">
            <div className="container">
              <div className="row py-5 gap-2">
                {events.map((event) => (
                  <div className="col-md-4 px-0 card" key={event.id}>
                    {event.doc.images.length > 1 ? (
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide card-img-top"
                        data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          {event.doc.images.map((image, index) => (
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={index}
                              className={index === 0 ? 'active' : ''}
                              aria-current="true"
                              aria-label={'Slide ' + index}
                              key={index}></button>
                          ))}
                        </div>
                        <div className="carousel-inner">
                          {event.doc.images.map((image, index) => (
                            <div
                              className={
                                index === 0
                                  ? 'carousel-item active'
                                  : 'carousel-item'
                              }
                              key={index}>
                              <img
                                src={image.secure_url}
                                className="d-block w-100"
                                alt={image.original_filename}
                              />
                            </div>
                          ))}
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    ) : event.doc.images.length === 0 ? (
                      <img
                        src={PlaceHolderImage}
                        className="card-img-top"
                        alt="Event Image"
                      />
                    ) : (
                      event.doc.images.length === 1 && (
                        <img
                          src={event.doc.images[0].secure_url}
                          className="card-img-top"
                          alt={event.doc.images[0].original_filename}
                        />
                      )
                    )}

                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <h5 className="card-title">{event.doc.title}</h5>

                        {isAuthenticated && userId === event.doc.eventBy && (
                          <span className="badge bg-primary mx-2">
                            Your Event
                          </span>
                        )}

                        {new Date(event.doc.startDate) > new Date() ? (
                          <span className="small badge bg-primary">
                            Upcoming
                          </span>
                        ) : new Date(event.doc.endDate) < new Date() ? (
                          <span className="small badge bg-success">
                            Completed
                          </span>
                        ) : (
                          <span className="small badge bg-warning">
                            Ongoing
                          </span>
                        )}
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            event.doc.description.indexOf('<p>') !== -1
                              ? event.doc.description.slice(
                                  event.doc.description.indexOf('<p>'),
                                  151
                                ) + '...'
                              : event.doc.description.slice(0, 151) + '...',
                        }}
                        className="card-text mt-4"></p>
                    </div>
                    <div className="card-footer border-top-0 bg-white">
                      <Link
                        to={`/event/${event.doc.title}/${event.id}`}
                        className="btn form-control btn-primary">
                        Read More
                      </Link>
                    </div>

                    {isAuthenticated && userId === event.doc.eventBy && (
                      <div className="card-footer border-top-0 bg-white">
                        <Link
                          to={`/dashboard/events/update/${event.id}`}
                          className="btn form-control btn-outline-primary">
                          Edit
                        </Link>

                        {/* <Link to={`/dashboard/events/delete/${event.id}`} className="btn form-control btn-danger mt-2">
                                    Delete
                                </Link> */}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Events;
