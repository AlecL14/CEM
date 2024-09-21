import React, { useState } from 'react';
import "./UserHome.css";
import UserNavbar from "./UserNavbar";
import UserHomeFilterBar from "./UserHomeFilterBar";
import UserHomeEventList from "./UserHomeEventList";
import UserHomeCalendar from "./UserHomeCalendar";
import UserHomeCalendarPillsList from "./UserHomeCalendarPillsList";
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import UserHomePopoutOptions from "./UserHomePopoutOptions";

const UserHome = () => {
    const [isRightArrow, setIsRightArrow] = useState(true);
    const [isContainerVisible, setContainerVisible] = useState(false);

    const handleMoreOptionsClick = () => {
        setIsRightArrow(!isRightArrow);
        setContainerVisible(prev => !prev);
    };

    return (
        <div className="UserHomeContainer">
            <UserNavbar />
            <UserHomeFilterBar />
            <div className="UserHomeContent">
                <div className="UserHomeLeft">
                    <div className={`UserMenuMoreOptions ${isContainerVisible ? 'visible' : ''}`}
                         onClick={handleMoreOptionsClick}>
                        {isRightArrow ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                    </div>
                    <div className={`sliding-container ${isContainerVisible ? 'visible' : ''}`}>
                        <UserHomePopoutOptions />
                    </div>
                </div>
                <div className="UserHomeMiddle" style={{ marginLeft: isContainerVisible ? '300px' : '0' }}>
                    <UserHomeEventList />
                </div>
                <div className="UserHomeRight">
                    <div className="UserHomeCalendar"><UserHomeCalendar /></div>
                    <div className="UserHomeCalendarPillsList"><UserHomeCalendarPillsList /></div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
