import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { TopBar } from "../../../components/DashoardComponents";
import { getProducts } from "../../../redux/actionCreators/products.actionCreators";

const DashboardCreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryCost, setDeliveryCost] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [image, setImage] = useState([""]);

  const { products, isLoading } = useSelector(
    (state) => ({
      products: state.products.products.filter(
        (product) => product.doc.productBy === state.auth.user._id
      ),
      isLoading: state.products.isLoading,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

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
              //   toolbarClassName="toolbarClassName"
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

          <div className="form-group my-2">
            <label>Images</label>
            {image.map((img, index) => (
              <div key={index} className="d-flex align-items-center">
                <input
                  type="file"
                  className="form-control my-2"
                  onChange={(e) =>
                    setImage((prevImages) => {
                      const newImages = [...prevImages];
                      newImages[index] = e.target.files[0];
                      return newImages;
                    })
                  }
                />
                {image.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger mx-2"
                    onClick={() =>
                      setImage((prevImages) => {
                        const newImages = [...prevImages];
                        newImages.splice(index, 1);
                        return newImages;
                      })
                    }
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                )}
              </div>
            ))}
            {image.length < 3 && (
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => {
                  if (image.length === 3) {
                    return toast.info("You can only upload 2 images");
                  }
                  setImage((prevImages) => [...prevImages, ""]);
                }}
              >
                <i className="fas fa-plus"></i>

                <span className="mx-2">Add Image</span>
              </button>
            )}
          </div>
          <div className="d-flex my-4">
            <button type="submit" className="btn btn-success mx-auto my-2">
              Create Product
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

export default DashboardCreateEvent;
