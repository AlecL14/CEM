import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../img/Logo.png'
import Person from "@mui/icons-material/Person";



const userNavbar = () => {
    
    return(
        <div className = "userNavBarContainer">
            <div className="userNavbarLogo"><img src={logo}></img></div>
            <div className = "userNavbarSearchbar"></div>
            <div className = "userNavbarProfile"><Person /></div>
        </div>
    )
}
export default userNavbar