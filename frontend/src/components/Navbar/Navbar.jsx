import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
     <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MindConnect</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/chat">AI Counselor</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/mood">Mood Tracker</Link></li>
        <li><Link to="/groups">Peer Groups</Link></li>
        <li><Link to="/exercises">Wellness</Link></li>
      </ul>

      <div className="navbar-auth">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;