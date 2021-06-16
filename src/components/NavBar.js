import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

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
      <section className="navlinks">
        <NavLink 
          exact to="/" 
          className="navlink"
          activeClassName="selected">
          Home
        </NavLink>
        <NavLink 
          to="/messages"
          className="navlink"
          activeClassName="selected">
          Messages
        </NavLink>
      </section>
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