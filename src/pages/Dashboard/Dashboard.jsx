import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SideBar } from "../../components/DashoardComponents";
import { login, logout } from "../../redux/actionCreators/auth.actionCreators";

import "./Dashboard.css";
import DashboardProducts from "./DashboardProducts/DashboardProducts";
import DashboardHome from "./DashboardHome/DashboardHome";
import DashboardOrders from "./DashboardOrders/DashboardOrders";
import DashboardStocks from "./DashboardStocks/DashboardStocks";
import _404 from "../_404/_404";
import DashboardUpdateProducts from "./DashboardUpdateProducts/DashboardUpdateProducts";
import DashboardCreateProduct from "./DashboardCreateProduct/DashboardCreateProduct";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedin = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // check token and redirect to login if not present
    const token = localStorage.getItem("quagri_tkn");

    if (!token) {
      dispatch(logout());
      navigate("/login");
      toast.warn(
        "You are not allowed to access this page!, Please login first!"
      );
    } else {
      const decodedToken = jwtDecode(JSON.parse(token));

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logout());
        navigate("/login");
        toast.warn("Your session has expired!, Please login again!");
      } else {
        dispatch(login({ token: JSON.parse(token), user: decodedToken }));
      }
    }
  }, [dispatch]);

  if (!isLoggedin) {
    return (
      <h1 className="text-danger my-5 text-center">
        You are not allowed to access this page!, Please login first!
      </h1>
    );
  }
  return (
    <div className="dashboard">
      <SideBar />
      <Routes>
        <Route path="" element={<DashboardHome />} />
        <Route path="products" element={<DashboardProducts />} />
        <Route
          path="products/update/:id"
          element={<DashboardUpdateProducts />}
        />
        <Route path="products/create" element={<DashboardCreateProduct />} />
        <Route path="orders" element={<DashboardOrders />} />
        <Route path="stocks" element={<DashboardStocks />} />

        <Route path="*" element={<_404 />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
