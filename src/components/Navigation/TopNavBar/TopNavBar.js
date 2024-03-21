import React from 'react';
import './TopNavBar.css'; 
import { Bell, User,HelpCircle, Users } from 'react-feather';

const TopNavBar = () => {
  return (
    <div className="top-bar-nav">
    <div className="top-bar-nav-right">
      <div className="announcement-icon">
        <Users color="black" />
      </div>
      <div className="profile-icon">
        <User color="black" />
      </div>
      <div className="help-icon">
        <HelpCircle color="black" />
      </div>
      <div className="notification-icon">
        <Bell color="black" />
      </div>
    </div>
  </div>
  
  );
};

export default TopNavBar;
