import React from "react";
import "./styles/AdminNavbar.css";
import logo from "../img/Logo.png";
import Person from "@mui/icons-material/Person";
import Home from "@mui/icons-material/Home";
import Notifications from "@mui/icons-material/Notifications";

const AddEditNavbar = () => {
  return (
    <div className="addEditNavbarContainer">
      <Home />
      <div className="addEditNavbarLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="addEditNavbarProfile">
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

export default AddEditNavbar;