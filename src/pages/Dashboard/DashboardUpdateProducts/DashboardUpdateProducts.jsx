import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../../../components/DashoardComponents";
import {
  getProducts,
  updateProductAction,
} from "../../../redux/actionCreators/products.actionCreators";

const DashboardUpdateProducts = () => {
  const { id } = useParams();
  const { product, isLoading, token } = useSelector(
    (state) => ({
      product: state.products.products.find(
        (product) =>
          product.doc.productBy === state.auth.user._id && product.id === id
      ),
      isLoading: state.products.isLoading,
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
  const [inStock, setInStock] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      price,
      stock,
      description,
      inStock: inStock === "true" ? true : false,
      category: JSON.stringify(category),
      colors: JSON.stringify(colors),
      productBy: product.doc.productBy,
      left: product.doc.left,
      sold: product.doc.sold,
      views: product.doc.views,
      rating: product.doc.rating,
      buyers: product.doc.buyers,
    };

    dispatch(updateProductAction(data, id, token, setSuccess));
  };

  useEffect(() => {
    if (success) {
      navigate("/dashboard/products");
    }
  }, [success]);

  useEffect(() => {
    if (isLoading) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (product) {
      setName(product.doc.name);
      setPrice(product.doc.price);
      setStock(product.doc.stock);
      setDescription(product.doc.description);
      setCategory(JSON.parse(product.doc.category));
      setColors(JSON.parse(product.doc.colors));
      setInStock(product.doc.inStock);
    }
  }, [product]);

  if (!product) {
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <h1 className="py-5 text-center display-2">
          ERROR: 404 Product Not Found
        </h1>
      </div>
    </section>;
  }

  return (
    <section className="home-section">
      <TopBar />
      <div className="home-content">
        <h1 className="display-5 text-center">Update Product</h1>
        <form onSubmit={handleSubmit} className="col-md-8 mx-auto mt-5">
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
          <div className="form-group">
            <label htmlFor="instock">In Stock?</label>
            <select
              className="form-control"
              id="instock"
              value={inStock}
              onChange={(e) => setInStock(e.target.value)}
            >
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
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
          <div className="d-flex my-4">
            <button type="submit" className="btn btn-success mx-auto my-2">
              Update Product
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

export default DashboardUpdateProducts;
