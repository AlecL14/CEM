import React, { useState } from 'react'
import UserNavbar from "./UserNavbar";
import UserHomeFilterBar from "./UserHomeFilterBar";
import UserHomeEventList from "./UserHomeEventList"

const UserHome = () => {

    return(
        <div className = "UserHomeContainer">
            <UserNavbar />
            <UserHomeFilterBar />
            <UserHomeEventList />
            
        </div>
    )
}
export default UserHome