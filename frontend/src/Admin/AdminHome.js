import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSearchbar from "./AdminSearchbar";
import AdminHomeEvent from "./AdminHomeEvent";

const AdminHome = () => {
  return (
    <>
      <div className="adminNavBarContainer">
        <AdminNavbar />
      </div>
      <div className="adminSearchBarContainer">
      <AdminSearchbar />
      </div>
      <div className="adminHomeEventContainer">
      <AdminHomeEvent />
      </div>
    </>
  );
};
export default AdminHome;
