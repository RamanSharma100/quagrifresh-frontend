import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { TopBar } from "../../../components/DashoardComponents";
import { createProductAction } from "../../../redux/actionCreators/products.actionCreators";
// import {

// } from "../../../redux/actionCreators/products.actionCreators";

const DashboardCreateProduct = () => {
  const { token, userId } = useSelector(
    (state) => ({
      userId: state.auth.user._id,
      token: state.auth.token,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [colors, setColors] = useState([]);
  const [image, setImage] = useState([""]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   name,
    //   price,
    //   stock,
    //   description,
    //   inStock: inStock === "true" ? true : false,
    //   category: JSON.stringify(category),
    //   colors: JSON.stringify(colors),
    //   productBy: product.doc.productBy,
    //   left: product.doc.left,
    //   sold: product.doc.sold,
    //   views: product.doc.views,
    //   rating: product.doc.rating,
    //   buyers: product.doc.buyers,
    // };
    // name, price, description, colors, category, stock, productBy;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("colors", JSON.stringify(colors));
    formData.append("category", JSON.stringify(category));
    formData.append("stock", stock);
    formData.append("productBy", userId);
    image.forEach((img) => {
      formData.append("images", img);
    });

    dispatch(createProductAction(formData, token, setSuccess));
  };

  useEffect(() => {
    if (success) {
      navigate("/dashboard/products");
    }
  }, [success]);

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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Product Name"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Product Price"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              placeholder="Enter Product Description"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="colors">Colors</label>
            <input
              type="text"
              className="form-control"
              id="colors"
              value={colors.join(",")}
              onChange={(e) => setColors(e.target.value.split(","))}
              placeholder="Enter Product Colors with comma seperated"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category.join(",")}
              onChange={(e) => setCategory(e.target.value.split(","))}
              placeholder="Enter Product Category with comma seperated"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter Product Stock"
            />
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

export default DashboardCreateProduct;
