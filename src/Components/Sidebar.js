import React from 'react';
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact Information</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
