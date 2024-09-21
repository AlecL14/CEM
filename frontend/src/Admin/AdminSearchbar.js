import React, { useState } from "react";
import "./styles/AdminSearchbar.css";
import Filter from "@mui/icons-material/FilterAlt";
import Note from "@mui/icons-material/NoteAdd";

const AdminSearchbar = ({ onSearch, onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    onFilter(value);
    setShowFilterOptions(false); 
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <div className="adminSearchBarContainer">
      <div className="adminSearchbar">
        <input
          type="text"
          className="adminSearchInput"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      <div className="adminIconsContainer">
        <div className="filter-icon" onClick={toggleFilterOptions}>
          <Filter />
        </div>
        {showFilterOptions && (
          <div className="filterOptions">
            <div onClick={() => handleFilterChange("")}>All</div>

            <div onClick={() => handleFilterChange("CSIT")}>CSIT</div>
            <div onClick={() => handleFilterChange("IEEE")}>IEEE</div>
            <div onClick={() => handleFilterChange("Judo Club")}>Judo Club</div>
            <div onClick={() => handleFilterChange("Ping Pong Club")}>
              Ping Pong Club
            </div>
            <div onClick={() => handleFilterChange("Badminton Club")}>
              Badminton Club
            </div>
            <div onClick={() => handleFilterChange("RMIT Weightlifting Club")}>
              RMIT Weightlifting Club
            </div>
            <div onClick={() => handleFilterChange("Cybersecurity Club")}>
              Cybersecurity Club
            </div>
            <div onClick={() => handleFilterChange("Data Science Club")}>
              Data Science Club
            </div>
            <div onClick={() => handleFilterChange("RMIT Blockchain Club")}>
              RMIT Blockchain Club
            </div>
          </div>
        )}
        <div className="note">
          <Note />
        </div>
      </div>
    </div>
  );
};

export default AdminSearchbar;
