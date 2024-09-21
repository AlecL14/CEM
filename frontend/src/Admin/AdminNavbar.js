import React from "react";
import "./styles/AdminNavbar.css";
import logo from "../img/Logo.png";
import Person from "@mui/icons-material/Person";
import Home from "@mui/icons-material/Home";
import Notifications from "@mui/icons-material/Notifications";

const AdminNavbar = () => {
  return (
    <div className="adminNavBarContainer">
      <Home />
      <div className="adminNavbarLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="adminNavbarProfile">
        <div className="notification">
          <Notifications />
        </div>
        <div className="person">
          <Person />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
