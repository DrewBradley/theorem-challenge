import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({notifications, deleteNotification}) => {
  const toDropDown = notifications.map(note => {
    return <li className="dropdown-item">
          <img className="dropdown-image" src={`${note.image}`}/> 
          <section className="dropdown-info">
            <p>{note.title}</p>
            <p>{note.date}</p>
          </section>
          <button className="dropdown-read" onClick={() => deleteNotification(note.id)}>READ</button>
        </li>
  })

  return (
    <div className="NavBar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/messages">MESSAGES</NavLink>
      <a className="notification-icon">BELL({notifications.length})
        <ul className="DropDown">
          Notifications
          { toDropDown }
        </ul>
      </a>
      
    </div>
  )
}

export default NavBar;