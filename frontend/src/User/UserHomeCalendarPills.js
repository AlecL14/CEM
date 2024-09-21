import React, { useState } from 'react'
import "./UserHomeCalendarPills.css"

const UserHomeCalendarPills = () => {

    return(
        <div className = "UserHomeCalendarPillsContainer">
            <div className="TagDetails">
                <div className="DateTag">
                    <span className="DateTagDay">14</span>
                    <span className="DateTagMonth">Sept</span>
                </div>
                <div className="DescriptionTag">
                    <span className="DescriptionTagEvent">Hackathon</span>
                    <span className="DescriptionTagClub">CSIT</span>
                    <span className="DescriptionTagTime">8:00am to 11:59pm</span>
                </div>
            </div>
        </div>
    )
}
export default UserHomeCalendarPills