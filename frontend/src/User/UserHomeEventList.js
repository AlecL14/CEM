import React, { useState } from 'react'
import "./UserHomeEventList.css"

import UserHomeEvent from "./UserHomeEvent"

const UserHomeEventList = () => {

    return(
        <div className = "userHomeEventListContainer">
            <UserHomeEvent />
            <UserHomeEvent />
            <UserHomeEvent />
        </div>
    )
}
export default UserHomeEventList