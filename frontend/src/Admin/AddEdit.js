import React from "react";
import "./AddEdit.css";
import People from "@mui/icons-material/People";
import AddEditNavbar from "./AddEditNavbar";
import AddEditSearchbar from "./AddEditSearchBar";

const AddEdit = () => {
    return(
        <>
        <div classname="navbarContainer">
            <AddEditNavbar />
        </div>
        <div classname="addeditSearchBarContainer">
            <div classname="Event details">
                Event details
            </div>
            <div classname="people">
                <People />
            </div>
            <AddEditSearchbar />
        </div>
        </>
        
    )
}

export default AddEdit;