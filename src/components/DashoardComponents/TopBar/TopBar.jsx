import { useSelector } from "react-redux";
import Avatar from "../../../assets/img/images/2.png";

const TopBar = () => {
  const { user, isLoggedIn } = useSelector((state) => ({
    user: state.auth.user,
    isLoggedIn: state.auth.isAuthenticated,
  }));

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
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="profile-details">
        <img src={Avatar} alt="" />
        <span className="admin_name">{user?.name}</span>
        <i className="bx bx-chevron-down"></i>
      </div>
    </nav>
  );
};

export default TopBar;
