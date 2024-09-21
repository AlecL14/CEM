import React, { useState } from 'react'
import "./UserHomePopoutOptions.css"
import {CheckBoxOutlineBlank} from "@mui/icons-material";

const UserHomePopoutOptions = () => {

    return(
        <div className="UserHomePopoutOptionsContainer">
            <div className="Clubs">
                <div className="Arts">
                    Arts
                    <div className="ArtClubs">
                        <span className="Paintings"><CheckBoxOutlineBlank/> Paintings</span>
                        <span className="LifeFigures"><CheckBoxOutlineBlank/> Life Figures</span>
                    </div>
                </div>
                <div className="Engineering">
                    Engineering
                </div>
                <div className="IT">
                    IT
                    <div className="ITClubs">
                        <span className="CSIT"><CheckBoxOutlineBlank/> CSIT</span>
                        <span className="SWITCH"><CheckBoxOutlineBlank/> SWITCH</span>
                        <span className="Hackathon"><CheckBoxOutlineBlank/> Hackathon</span>
                        <span className="CodeMonkeys"><CheckBoxOutlineBlank/> Code Monkeys</span>
                    </div>
                </div>
                <div className="Sports">
                    Sports
                </div>
                <div className="Culinary">
                    Culinary
                </div>
                <div className="Science">
                    Science
                </div>
            </div>
            <div className="SeperatorLine">
            </div>
            <div className="ToggleOptions">
                <span className="IncludePastEvents"><CheckBoxOutlineBlank/> Include Past Events</span>

            </div>
            <div className="ResetFilters">
                Reset filters
            </div>
        </div>
    )
}
export default UserHomePopoutOptions