import React from "react";
import "./styles/AdminHomeEvent.css";
import EventItem from "./eventItem";
import { eventList } from "./eventList";

const colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#d1c4e9"];

const AdminHomeEvent = () => {
  return (
    <div className="adminHomeEventContainer">
      <div className="eventList">
        {eventList.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            club={event.club}
            location={event.location}
            date={event.date}
            time={event.time}
            price={event.price}
            views={event.views}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminHomeEvent;