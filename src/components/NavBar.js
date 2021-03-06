import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import logo from '../../src/theorem-logo.png'


const NavBar = ({notifications, deleteNotification}) => {
  const [visible, setVisible] = useState(false);

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
        <img src={logo}/>
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
      <div className={ visible ? "notification-icon-show" : "notification-icon"} 
      onClick={() => setVisible(!visible)}>
      <FontAwesomeIcon 
        icon={faBell} 
        size="lg"
        color="#B45AD3"
        style={{cursor: "pointer"}}/>
        {notifications.length}
        <div className="DropDown">
          <h2 className="drop-title">Notifications({notifications.length})</h2>
          <ul className="droplist">
            { toDropDown }
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar;