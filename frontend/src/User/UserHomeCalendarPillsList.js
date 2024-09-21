import React, { useState } from 'react'
import "./UserHomeCalendarPillsList.css"
import UserHomeCalendarPills from "./UserHomeCalendarPills";

const UserHomeCalendarPillsList = () => {

    return(
        <div className = "UserHomeCalendarPillsContainer">
            <UserHomeCalendarPills />
            <UserHomeCalendarPills />
            <UserHomeCalendarPills />
            <UserHomeCalendarPills />
        </div>
    )
}
export default UserHomeCalendarPillsList