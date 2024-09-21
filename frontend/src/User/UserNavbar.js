import React, { useState } from 'react'
import "./UserNavbar.css"
import logo from '../img/Logo.png'
import Person from "@mui/icons-material/Person";



const UserNavbar = () => {
    
    return(
        <div className = "userNavBarContainer">
            <div className="userNavbarLogo"><img src={logo}></img></div>
            <div className="userNavbarSearchbar">
                <span className="searchbar-text">Switch x CSIT Hackathon</span>
            </div>
            <div className="userNavbarProfile"><Person /></div>
        </div>
    )
}

export default UserNavbar