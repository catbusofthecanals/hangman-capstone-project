import React from "react";
//create notifcation component to display for 2 seconds to user has already keyed letter
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};
//export component to Game.js
export default Notification;
