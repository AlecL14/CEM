import React, { useState } from 'react'
import UserNavbar from "./UserNavbar";
import UserHomeFilterBar from "./UserHomeFilterBar";

const UserHome = () => {

    return(
        <div className = "UserHomeContainer">
            <div className = "UserNavBarContainer"><UserNavbar /></div>
            <UserHomeFilterBar />
            
        </div>
    )
}
export default UserHome