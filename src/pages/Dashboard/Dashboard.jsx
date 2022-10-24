import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SideBar } from "../../components/DashoardComponents";
import { login, logout } from "../../redux/actionCreators/auth.actionCreators";

import "./Dashboard.css";
import DashboardHome from "./DashboardHome/DashboardHome";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        dispatch(login({ token, user: decodedToken }));
      }
    }
  }, [dispatch]);

  return (
    <>
      <SideBar />
      <DashboardHome />
    </>
  );
};

export default Dashboard;
