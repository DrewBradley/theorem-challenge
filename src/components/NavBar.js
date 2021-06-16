import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({notifications, deleteNotification}) => {
  const toDropDown = notifications.map(note => {
    return <li className="dropdown-item">
          <img src={`${note.image}`}/> 
          <p>{note.title}</p>
          <p>{note.date}</p>
          <button onClick={() => deleteNotification(note.id)}>READ</button>
        </li>
  })

  return (
    <div className="NavBar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/messages">MESSAGES</NavLink>
      <a className="notification-icon">BELL
        <ul className="DropDown">
          Notifications
          { toDropDown }
        </ul>
      </a>
      
    </div>
  )
}

export default NavBar;