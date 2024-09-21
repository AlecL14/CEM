import React, { useState } from 'react'
import './UserHomeCalendar.css' 
import Calendar from 'react-calendar'

const UserHomeCalendar = () => {
    const markedDates = ['2024-09-08', '2024-09-14', '2024-09-21']; 

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = date.toISOString().split('T')[0];
            if (markedDates.includes(formattedDate)) {
                return <span className="dot"></span>;
            }
        }
        return null;
    };

    return (
        <div className="UserHomeCalendarContainer">
            <Calendar
                tileContent={tileContent}
            />
        </div>
    )
}

export default UserHomeCalendar;
