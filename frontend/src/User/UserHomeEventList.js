import React, { useState } from 'react'
import "./UserHomeEventList.css"
import HackathonImage from "../img/Hackathon.png"
import NatureImage from "../img/NatureWalk.png"
import PettingZooImage from "../img/PettingZoo.png"
import PlushyImage from "../img/Plushy.png"

import UserHomeEvent from "./UserHomeEvent"

const UserHomeEventList = () => {

    return(
        <div className="userHomeEventListContainer">
            <UserHomeEvent
                title="SWITCH x CSIT Hackathon | @Switch & @CSIT"
                image={HackathonImage}
                date="14-16 Sept 2024"
                fee="Free"
                location="TBD"
                description="Come join us for an amazing week of coding!"
            />
            <UserHomeEvent
                title="Nature walk with Brunch | @Walking club"
                image={NatureImage}
                date="19 Oct 2024"
                fee="19"
                location="Carlton Gardens"
                description="Take a walk with us through the beautiful carlton gardens, followed by a brunch and chat at the amazing Grand Tea Cafe!"
            />
            <UserHomeEvent
                title="Sow a plushy | @Sowing club"
                image={PlushyImage}
                date="10 Nov 2024"
                fee="Free"
                location="80:03:009"
                description="Who doesnt love plushies? Come make a plushy together! Yarn is provided, but feel free to bring your favourite colors!"
            />
            <UserHomeEvent
                title="Petting Zoo @ Student Central | @Rusu"
                image={PettingZooImage}
                date="19 Nov 2024"
                fee="5"
                location="Student Central"
                description="Were going to have all sorts of baby animals at student central on the 19th of Nov. Don’t miss this chance to cuddle with the cutest nature has to offer!"
            />
        </div>
    )
}
export default UserHomeEventList