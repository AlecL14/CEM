import React from "react";
import "./styles/AdminSearchbar.css";
import Filter from "@mui/icons-material/FilterAlt";
import Note from "@mui/icons-material/NoteAdd";

const AdminSearchbar = () => {
  return (
    <div className="adminSearchBarContainer">
      <div className="adminSearchbar">
        <input 
          type="text" 
          className="adminSearchInput" 
          placeholder="Search..." 
        />
      </div>
      
      <div className="adminIconsContainer">
        <div className="filter">
          <Filter />
        </div>
        <div className="note">
          <Note />
        </div>
      </div>
    </div>
  );
};

export default AdminSearchbar;