import React, { useState } from 'react'
import "./UserHomeCalendarPillsList.css"
import UserHomeCalendarPills from "./UserHomeCalendarPills";

const UserHomeCalendarPillsList = () => {

    return(
        <div className = "UserHomeCalendarPillsContainer">
            <UserHomeCalendarPills
                day="27"
                month="June"
                event="Light Jog"
                club="Exercise Club"
                time="1:00pm to 2:00pm"/>
            <UserHomeCalendarPills
                day="16"
                month="July"
                event="Pickleball Champ"
                club="Pickleball Club"
                time="9:00am to 3:00pm"/>
            <UserHomeCalendarPills
                day="14"
                month="Sept"
                event="Hackathon"
                club="CSIT"
                time="8:00am to 11:59pm" />
            <UserHomeCalendarPills
                day="30"
                month="Sept"
                event="High Tea"
                club="RUSU"
                time="10:00am to 1:30pm"/>
        </div>
    )
}
export default UserHomeCalendarPillsList