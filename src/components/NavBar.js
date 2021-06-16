import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({notifications, deleteNotification}) => {
  const toDropDown = notifications.map(note => {
    return <li>
        <p>{note.title}</p>
        <button onClick={deleteNotification}>READ</button>
        </li>
  })

  return (
    <div className="NavBar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/messages">MESSAGES</NavLink>
      <div className="notification-icon">BELL
        <ul className="DropDown">
          { toDropDown }
        </ul>
      </div>
      
    </div>
  )
}

export default NavBar;