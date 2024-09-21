import React, { useState } from 'react'
import EventImage from "../img/Hackathon.png"
import "./UserHomeEvent.css"

const UserHomeEvent = () => {

    return(
        <div className="UserHomeEventContainer">
            <div className="EventTitle">
                SWITCH x CSIT Hackathon | @Switch & @CSIT
            </div>
            <div className="EventInformation">
                <div className="EventImage"><img src={EventImage}/></div>

                <div className="EventDetails">
                    <div className="EventDate">
                        Date: 14-16 Sept 2024
                    </div>
                    <div className="EventFee">
                        Fee: Free
                    </div>
                    <div className="EventLocation">
                        Location: TBD
                    </div>
                    <div className="EventSeperatorLine"/>

                    <div className="EventDescription">
                        Come join us for an amazing week of coding!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserHomeEvent