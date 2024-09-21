import React, { useState } from 'react'
import UserNavbar from "./UserNavbar";
import UserHomeFilterBar from "./UserHomeFilterBar";
import UserHomeEventList from "./UserHomeEventList"
import UserHomeCalendar from "./UserHomeCalendar";

const UserHome = () => {

    return(
        <div className="UserHomeContainer">
            <UserNavbar/>
            <UserHomeFilterBar/>
            <div className="UserHomeContent">
                <div className="UserHomeLeft"></div>
                <div className="UserHomeMiddle"><UserHomeEventList/></div>
                <div className="UserHomeRight"><UserHomeCalendar /></div>
            </div>
        </div>
    )
}
export default UserHome