import React from "react";
import "./styles/AdminSearchbar.css";
import Filter from "@mui/icons-material/FilterAlt";
import Note from "@mui/icons-material/NoteAdd";

const AddEditSearchbar = () => {
  return (
    <div className="adminSearchBarContainer">
      <div>Event name</div>
      <div className="Event name">
        <input 
          type="text" 
          className="Events" 
          placeholder="Search..." 
        />
      </div>

      <div>Club name</div>
      <div className="Club name">
        <input 
          type="text" 
          className="Clubs" 
          placeholder="Search..." 
        />
      </div>

      <div>Location name</div>
      <div className="Location name">
        <input 
          type="text" 
          className="Location" 
          placeholder="Search..." 
        />
      </div>

      <div>Time</div>
      <div className="Time">
        <input 
          type="text" 
          className="Time" 
          placeholder="Search..." 
        />
      </div>

      <div>Price</div>
      <div className="Price">
        <input 
          type="text" 
          className="Price" 
          placeholder="Search..." 
        />
      </div>

    </div>
      )
    }

export default AddEditSearchbar