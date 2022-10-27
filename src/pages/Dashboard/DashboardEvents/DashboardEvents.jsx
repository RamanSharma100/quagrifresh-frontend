import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TopBar } from "../../../components/DashoardComponents";
import { numberWithCommas, sum } from "../../../methods";
import { getEvents } from "../../../redux/actionCreators/events.actionCreators";

const DashboardEvents = () => {
  const { events, totalBuyers, totalProductsUsed, isLoading } = useSelector(
    (state) => ({
      events: state.events.events.filter(
        (event) => event.doc.eventBy === state.auth.user._id
      ),
      totalBuyers: state.events.events.map(
        (event) =>
          event.doc.eventBy === state.auth.user._id && event.doc.buyers.length
      ),
      totalProductsUsed: state.events.events.map(
        (event) =>
          event.doc.eventBy === state.auth.user._id && event.doc.products.length
      ),
      isLoading: state.events.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      dispatch(getEvents());
    }
  }, [dispatch, isLoading]);
  return (
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Events</div>
              <div className="number">{events.length}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-food-menu cart my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Total Buyers</div>
              <div className="number">{numberWithCommas(sum(totalBuyers))}</div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-coin-stack cart two my-0 ms-4"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Products Added</div>
              <div className="number">
                {numberWithCommas(sum(totalProductsUsed))}
              </div>
              {/* <div className="indicator">
                <i className="bx bx-"></i>
                <span className="text">Up from yesterday</span>
              </div> */}
            </div>
            <i className="bx bx-coin-stack cart two my-0 ms-4"></i>
          </div>
        </div>
        <div className="sales-boxes px-4">
          <div
            className="recent-sales mx-auto mt-3 all-products box"
            style={{ width: "100%" }}
          >
            <div className=" d-flex align-items-center justify-content-between">
              <div className="title w-100">
                <h2>All Events</h2>
              </div>
              <div className="button">
                <Link
                  to="/dashboard/events/create"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="bx bx-plus"></i>

                  <span className="text my-0">Add New Event</span>
                </Link>
              </div>
            </div>
            <div className="sales-details">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Buyers</th>
                    <th scope="col">Products</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Delivery Date</th>
                    <th scope="col">Delivery Cost</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td>{event.doc.title}</td>
                      <td>{event.doc.description.slice(0, 50)}...</td>
                      <td>{event.doc.buyers.length}</td>
                      <td>{event.doc.products.length}</td>
                      <td>
                        <span className="small badge bg-primary">
                          {new Date(event.doc.startDate).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        <span className="small badge bg-danger">
                          {new Date(event.doc.endDate).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        <span className="small badge bg-success">
                          {new Date(event.doc.deliveryDate).toLocaleString()}
                        </span>
                      </td>
                      <td>${event.doc.deliveryCost}</td>
                      <td>
                        {/* add status according to event date  */}
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
                      </td>
                      <td className="d-flex ">
                        <button
                          className="btn btn-sm btn-primary"
                          title="Edit Event"
                          onClick={() =>
                            navigate(`/dashboard/events/update/${event.id}`)
                          }
                        >
                          <i className="bx bx-edit-alt"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          title="Delete Event"
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardEvents;
