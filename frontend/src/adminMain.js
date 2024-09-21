import React from 'react';
import { useLocation } from 'react-router-dom';

const UserMain = () => {
  const location = useLocation();
  const { loggedIn = false, email = '' } = location.state || {}; // Default values if state is undefined

  const onButtonClick = () => {
    // You'll update this function later
  };

  return (
    <div className="userMain">
        <div>Add Admin Content here</div>
    </div>
  );
};

export default UserMain;