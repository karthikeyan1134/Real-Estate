import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import img from '../Searchone/profile.webp';
import { useNavigate } from 'react-router-dom';
import houses from '../../data.js';
import Mylist from '../Mylist/Mylist.js';
import './Profile.css';

const Profile = () => {
  const [disable, setdisable] = useState(true);
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);

  const handleshowclick = (e) => {
    e.preventDefault();
    setShowComponent(!showComponent);
  };

  const handleUpdateClick = () => {
    setdisable(!disable);
  };
  const handleLogout = () => {
    document.cookie = 'username=; max-age=0; path=/';
  };
  const handleclick = () => {
    navigate('./post');
  };


  return (
    <>
      <Navbar />
      <div className="profile">
        <h1>Profile</h1>
        <div>
          <img src={img} className="pro-img" alt="Profile" />
        </div>
        <div className="pro-inp">
          <div>
            <input id='txt' type="text" value={"coder"} disabled={disable} />
          </div>
          <div><input id='mail' type="email" value={"coder@gmail.co"} disabled={disable} /></div>
          <div>
            <input id='pro-password' type="password" value={"code@1122"} disabled={disable} />
          </div>
        </div>
        <div className="pro-inp">
          <div>
            <input type="button" id="edit-btn" value={"Update"} onClick={handleUpdateClick} />
          </div>
          <div>
            <input type="button" id="post-btn" value={"Create Listing"} onClick={handleclick} />
          </div>
        </div>
        <div className="links">
          <a href="/" className='pro-link' onClick={(e) => {
            e.preventDefault()
            navigate('/signup')
          }}>Delete Account</a>
          <a href="/" className='pro-link' onClick={handleLogout} >Sign Out</a>
        </div>
        <div>
          <a href="/" className='pro-list' onClick={handleshowclick}> {showComponent ? "Hide Listing" : "Show Listing"}</a>
        </div>
        
        {showComponent && 
          <div className='mylist'>
            <div className="myitem">
              {houses.map(elem => (
                <Mylist key={elem.id} title={elem.title} id={elem.id} />
              ))}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Profile;
