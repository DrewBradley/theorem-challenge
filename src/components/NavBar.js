import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from './DropDown';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/messages">MESSAGES</NavLink>
      <div className="notification-icon">BELL
        <DropDown />
      </div>
      
    </div>
  )
}

export default NavBar;