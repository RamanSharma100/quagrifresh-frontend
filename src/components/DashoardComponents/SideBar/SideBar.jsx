import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../../redux/actionCreators/auth.actionCreators";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("quagri_tkn");
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="fa fa-briefcase"> </i>
        <span className="logo_name">QuagriFresh</span>
      </div>
      <ul className="nav-links ps-0">
        <li>
          <a href="#" className="active">
            <i className="fas fa-table-cells"></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-box"></i>
            <span className="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-list-ul"></i>
            <span className="links_name">Order list</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-chart-pie"></i>
            <span className="links_name">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-coins"></i>
            <span className="links_name">Stock</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-book"></i>
            <span className="links_name">Total order</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-message"></i>
            <span className="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-heart"></i>
            <span className="links_name">Favourites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-home"></i>
            <span className="links_name">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-cog"></i>
            <span className="links_name">Settings</span>
          </a>
        </li>
        <li className="log_out">
          <a href="#" role="button" onClick={handleLogout}>
            <i className="fa fa-log-out"></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
