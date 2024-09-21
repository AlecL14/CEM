import React, { useState } from 'react'
import "./UserHomeFilterBar.css"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import DateRange from "@mui/icons-material/DateRange"


const UserHomeFilterBar = () => {

    return(
        <div className = "UserHomeFilterContainer">
            <div className = "CategoryDropdownFilter">
                Category
            </div>
            
            <div className = "RelevanceDropdownFilter">
                Relevance
            </div>
            
            {/*<div ClassName = "DateSelectorFilter">*/}
            {/*    <div className = "DateSelectorCalendarIcon"><DateRange  /></div>*/}
            {/*    <div className = "">From</div>*/}
            {/*    <div className = "DateSelectorTo">To</div>*/}
            {/*</div>*/}
        </div>
    )
}
export default UserHomeFilterBar