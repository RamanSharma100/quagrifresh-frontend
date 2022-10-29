import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actionCreators/auth.actionCreators";
import { toast } from "react-toastify";

import Avatar from "../../../assets/img/images/2.png";
import { clearCart } from "../../../redux/actionCreators/cart.actionCreators";

const TopBar = () => {
  const { user, isLoggedIn } = useSelector((state) => ({
    user: state.auth.user,
    isLoggedIn: state.auth.isAuthenticated,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("quagri_tkn");
    localStorage.removeItem("quagri_cart");
    dispatch(logout());
    dispatch(clearCart());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const handleToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    };
  };

  return (
    <nav>
      <div className="sidebar-button">
        <i
          className="bx bx-menu sidebarBtn cursor-pointer"
          onClick={handleToggle}
        ></i>
        <span className="dashboard">Dashboard</span>

        <span
          className="badge bg-success small ms-1 my-0"
          style={{ fontSize: "0.79rem" }}
        >
          {user?.type}
        </span>
        <span
          className="badge bg-primary small ms-1 my-0"
          style={{ fontSize: "0.79rem" }}
        >
          Beta
        </span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="dropdown">
        <button
          className="profile-details rounded-5 dropdown-toggle"
          type="button"
          id="avatar-dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={Avatar} alt="" />
          <span className="admin_name">{user?.name}</span>
          {/* <i className="bx bx-chevron-down"></i>   */}
        </button>
        <ul className="dropdown-menu w-100" aria-labelledby="avatar-dropdown">
          <li>
            <Link
              className="dropdown-item d-flex align-items-center gap-2"
              to={`/profile/${user?._id}`}
            >
              <i className="bx bx-user"></i>
              <span>My Account</span>
            </Link>
          </li>
          <li>
            <button
              className="dropdown-item text-danger d-flex align-items-center gap-2"
              onClick={handleLogout}
            >
              <i className="bx bx-log-out"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
