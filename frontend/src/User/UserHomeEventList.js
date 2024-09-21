import React, { useState } from 'react'
import "./UserHomeEventList.css"
import eventImage from "../img/Hackathon.png"

import UserHomeEvent from "./UserHomeEvent"

const UserHomeEventList = () => {

    return(
        <div className="userHomeEventListContainer">
            <UserHomeEvent
                title="SWITCH x CSIT Hackathon | @Switch & @CSIT"
                image={eventImage}
                date="14-16 Sept 2024"
                fee="Free"
                location="TBD"
                description="Come join us for an amazing week of coding!"
            />
            <UserHomeEvent
            />
            <UserHomeEvent
            />
            <UserHomeEvent
            />
        </div>
    )
}
export default UserHomeEventList