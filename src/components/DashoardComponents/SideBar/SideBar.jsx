import { NavLink } from "react-router-dom";
import LOGO from "../../../assets/img/logo.jpeg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <i>
          <img src={LOGO} alt="logo" height={40} className="rounded-circle" />
        </i>
        <span className="logo_name">QuagriFresh</span>
      </div>
      <ul className="nav-links ps-0">
        <li>
          <NavLink end to="/dashboard">
            <i className="fas fa-table-cells"></i>
            <span className="links_name">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products">
            <i className="fa fa-box"></i>
            <span className="links_name">Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/events">
            <i className="fa fa-calendar"></i>
            <span className="links_name">Events</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders">
            <i className="fa fa-list-ul"></i>
            <span className="links_name">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/stocks">
            <i className="fa fa-coins"></i>
            <span className="links_name">Stock</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/dashboard/">
            <i className="fa fa-book"></i>
            <span className="links_name">Total order</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/dashboard/messages">
            <i className="fa fa-message"></i>
            <span className="links_name">Messages</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/dashboard/favorites">
            <i className="fa fa-heart"></i>
            <span className="links_name">Favourites</span>
          </NavLink>
        </li>

        {/* <li>
          <a href="#">
            <i className="fa fa-home"></i>
            <span className="links_name">Home</span>
          </a>
        </li> */}
        {/* <li className="log_out">
          <a href="#" role="button" onClick={handleLogout}>
            <i className="fa fa-log-out"></i>
            <span className="links_name">Log out</span>
          </a>
        </li> */}
        <li className="log_out">
          <NavLink to="/dashboard/settings">
            <i className="fa fa-cog"></i>
            <span className="links_name">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
