import { useState, useContext } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import SidebarComponent from "../../sidebar/SidebarComponent";
import MobileNav from "../../mobileNav/MobileNav";
import AuthContext from "../../../context/AuthContext";
import "./Layout.css";
function Layout() {
  const { darken, user, dispatch } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const className = showSidebar ? `sideBar display` : `sideBar`;

  const handleLoginLogout = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
    if (user) {
      dispatch({ type: "LOGOUT" });
    }
    navigate("/login");
  };
  return (
    <div className="routes">
      <MobileNav setState={setShowSidebar} state={showSidebar} />
      <div className={className}>
        <SidebarComponent setState={setShowSidebar} state={showSidebar} />
      </div>
      <Link to="/" className="loginLogout" onClick={handleLoginLogout}>
        {user ? <p>Logout</p> : <p>Login</p>}
      </Link>
      <Outlet />
      {darken ? <div className="darken"></div> : null}
    </div>
  );
}

export default Layout;
