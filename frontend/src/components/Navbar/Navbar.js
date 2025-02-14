import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css'
import img from '../Searchone/profile.webp';
const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const usernameCookie = getCookie('username');
    if (usernameCookie) {
      setIsLoggedIn(true);
      setUsername(usernameCookie);
    }
  }, []);
  
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  const handleLogout = () => {
    document.cookie = 'username=; max-age=0; path=/';
    setIsLoggedIn(false);
    setUsername(null);
  };
  const handleProfileclick = () => {
    navigate('/profile')
  }
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-logo">RealEstateCo</a>
        <div className="navbar-search">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn"><Link to='/search'>
            Search</Link></button>
        </div>
        <ul className="navbar-menu">
          <li><a href="/" className="navbar-link">Home</a></li>
          <li><a href="/search" className="navbar-link">Properties</a></li>
          <li><a href="/about" className="navbar-link">About Us</a></li>
          <li><a href="/contact" className="navbar-link">Contact Us</a></li>
        </ul>
        <div className="navbar-buttons">
          {isLoggedIn ? (
            <div className="user-profile" >
              <img src={img} alt="" className='user-pic' onClick={handleProfileclick} />
              <span className="username" onClick={handleProfileclick}>{username}</span>
              <button onClick={handleLogout} className="btn btn-login">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-login">Login</Link>
              <Link to="/signup" className="btn btn-signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>


  )
}

export default Navbar
