import React from 'react';
import "./UserHomeCalendarPills.css";

const UserHomeCalendarPills = ({ day, month, event, club, time }) => {
    return (
        <div className="UserHomeCalendarPillsContainer">
            <div className="TagDetails">
                <div className="DateTag">
                    <span className="DateTagDay">{day}</span>
                    <span className="DateTagMonth">{month}</span>
                </div>
                <div className="DescriptionTag">
                    <span className="DescriptionTagEvent">{event}</span>
                    <span className="DescriptionTagClub">{club}</span>
                    <span className="DescriptionTagTime">{time}</span>
                </div>
            </div>
        </div>
    );
};

export default UserHomeCalendarPills;
