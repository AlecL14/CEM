import React from "react";

function EventItem({ title, club, location, date, time, price, views, color }) {
  return (
    <div className="eventItem" style={{ backgroundColor: color }}>
      <div className="event-header">
        <h1>{title}</h1>
        <p>{club}</p>
      </div>
      <div className="event-details">
        <p>📅 {date}</p>
        <p>🕒 {time}</p>
        <p>📍 {location}</p>
        <p>💵 {price}</p>
      </div>
      <div className="event-footer">
        <p>{views} views</p>
      </div>
    </div>
  );
}

export default EventItem;