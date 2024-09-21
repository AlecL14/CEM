import React, { useState } from "react";
import "./styles/AdminHomeEvent.css";

function EventItem({ title, club, location, date, time, price, views, color, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`eventItem ${isFlipped ? "flipped" : ""}`} style={{ backgroundColor: color }} onClick={handleFlip}>
      <div className="event-front">
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
      <div className="event-back">
        <div className="event-description">
          <p>{description}</p>
        </div>
        <button className="moreInfoButton">More Info</button>
      </div>
    </div>
  );
}

export default EventItem;