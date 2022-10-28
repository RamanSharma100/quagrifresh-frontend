import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { TopBar } from "../../../components/DashoardComponents";
import { getProducts } from "../../../redux/actionCreators/products.actionCreators";
import draftToHtmlPuri from "draftjs-to-html";

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import {
  getEvents,
  updateEventAction,
} from "../../../redux/actionCreators/events.actionCreators";
import { toast } from "react-toastify";

const DashboardUpdateEvent = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryCost, setDeliveryCost] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [success, setSuccess] = useState(false);

  const { products, event, isLoading, isLoadingEvents, token, userId } =
    useSelector(
      (state) => ({
        event: state.events.events.find(
          (event) =>
            event.doc.eventBy === state.auth.user._id && event.doc._id === id
        ),
        products: state.products.products.filter(
          (product) => product.doc.productBy === state.auth.user._id
        ),
        isLoading: state.events.isLoading,
        token: state.auth.token,
        userId: state.auth.user._id,
        isLoadingEvents: state.events.isLoading,
      }),
      shallowEqual
    );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      startDate,
      endDate,
      deliveryDate,
      deliveryCost,
      products: selectedProducts,
      eventBy: userId,
      description: draftToHtmlPuri(
        convertToRaw(description.getCurrentContent())
      ),
      buyers: event.doc.buyers,
    };

    dispatch(updateEventAction(formData, id, token, setSuccess));
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (isLoadingEvents) {
      dispatch(getEvents());
    }
  }, [dispatch, isLoadingEvents]);

  useEffect(() => {
    if (success) {
      toast.success("Event Created Successfully!!");
      navigate("/dashboard/events");
    }
  }, [success]);

  useEffect(() => {
    if (event) {
      setTitle(event.doc.title);
      setDescription(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(event.doc.description)
          )
        )
      );
      setStartDate(event.doc.startDate);
      setEndDate(event.doc.endDate);
      setDeliveryDate(event.doc.deliveryDate);
      setDeliveryCost(event.doc.deliveryCost);
      setSelectedProducts(event.doc.products);
    }
  }, [event]);

  return (
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <h1 className="display-5 text-center">Create Product</h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/formdata"
          className="col-md-8 mx-auto mt-5"
        >
          <div className="form-group my-2">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event Title"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="description">Description</label>
            <Editor
              editorState={description}
              toolbarClassName="toolbarClassName"
              wrapperClassName="bg-white form-control"
              editorClassName="bg-white "
              onEditorStateChange={(editorState) => setDescription(editorState)}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="startdate">Start Date</label>
            <input
              type="datetime-local"
              className="form-control"
              id="startdate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Enter event Start Date"
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="enddate">End Date</label>
            <input
              type="datetime-local"
              className="form-control"
              id="enddate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="Enter event End Date"
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="deliverydate">Delivery Date</label>
            <input
              type="datetime-local"
              className="form-control"
              id="deliverydate"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              placeholder="Enter event Delivery Date"
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="deliverycost">Delivery Cost</label>
            <input
              type="number"
              className="form-control"
              id="deliverycost"
              value={deliveryCost}
              onChange={(e) => setDeliveryCost(e.target.value)}
              placeholder="Enter event Delivery Cost"
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="products">Add Products</label>
            <div className="products">
              {products.map((product) => (
                <div key={product.doc._id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={product.doc._id}
                    id={product.doc._id}
                    checked={selectedProducts.includes(product.doc._id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedProducts([
                          ...selectedProducts,
                          e.target.value,
                        ]);
                      } else {
                        setSelectedProducts(
                          selectedProducts.filter(
                            (product) => product !== e.target.value
                          )
                        );
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor={product.doc._id}>
                    {product.doc.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex my-4">
            <button type="submit" className="btn btn-success mx-auto my-2">
              Update Event
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-danger mx-auto my-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DashboardUpdateEvent;
