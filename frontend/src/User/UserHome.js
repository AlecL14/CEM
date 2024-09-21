import React, { useState } from 'react'
import "./UserHome.css"
import UserNavbar from "./UserNavbar";
import UserHomeFilterBar from "./UserHomeFilterBar";
import UserHomeEventList from "./UserHomeEventList"
import UserHomeCalendar from "./UserHomeCalendar";
import UserHomeCalendarPillsList from "./UserHomeCalendarPillsList";

const UserHome = () => {

    return(
        <div className="UserHomeContainer">
            <UserNavbar/>
            <UserHomeFilterBar/>
            <div className="UserHomeContent">
                <div className="UserHomeLeft"></div>
                <div className="UserHomeMiddle"><UserHomeEventList /></div>
                <div className="UserHomeRight">
                    <div className = "UserHomeCalendar"> <UserHomeCalendar /> </div>
                    <div className = "UserHomeCalendarPillsList"><UserHomeCalendarPillsList /></div>
                </div>
            </div>
        </div>
    )
}
export default UserHome