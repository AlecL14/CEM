import React from 'react';
import "./UserHomeEvent.css";

const UserHomeEvent = ({ title, image, date, fee, location, description }) => {
    return (
        <div className="UserHomeEventContainer">
            <div className="EventTitle">
                {title}
            </div>
            <div className="EventInformation">
                <div className="EventImage">
                    <img src={image} alt="Event" />
                </div>
                <div className="EventDetails">
                    <div className="EventDate">
                        Date: {date}
                    </div>
                    <div className="EventFee">
                        Fee: {fee}
                    </div>
                    <div className="EventLocation">
                        Location: {location}
                    </div>
                    <div className="EventSeperatorLine" />
                    <div className="EventDescription">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHomeEvent;
