import React, { useState } from "react";
import "./styles/AdminHomeEvent.css";
import EventItem from "./eventItem";
import { eventList } from "./eventList";
import AdminSearchbar from "./AdminSearchbar";

const colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd"];

const AdminHomeEvent = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventList);

  const handleSearch = (searchText) => {
    const lowercasedFilter = searchText.toLowerCase();
    const filtered = eventList.filter(event =>
      event.title.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredEvents(filtered);
  };

  const handleFilter = (filterValue) => {
    const filtered = eventList.filter(event =>
      event.club.toLowerCase() === filterValue.toLowerCase() || filterValue === ""
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="adminHomeEventContainer">
      <AdminSearchbar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="eventList">
        {filteredEvents.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            club={event.club}
            location={event.location}
            date={event.date}
            time={event.time}
            price={event.price}
            views={event.views}
            description={event.description}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminHomeEvent;