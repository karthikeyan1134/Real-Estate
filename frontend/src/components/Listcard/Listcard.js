import React from 'react'
import './Listcard.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Listcard = (props) => {
  const [like, setlike] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setlike(!like)
  };
  const navigate = useNavigate();
  const myfun = () => {
    navigate(`/search/${props.id}`);
  }
  return (
    <div onClick={myfun}>
      <img id="li-img" src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p className='added-text'>{`Added: ${props.added}`}</p>
      <p className='card-p'> {props.description}</p>
      <p className='span-text'>
        <span className='span-in'>Bedrooms</span>
        <span className='span-in'>Bathrooms</span>
        <span className='span-in'>parking</span>
      </p>
      <div className='icons'>
        <div>
          <i class="fa-solid fa-bed card-icon inline-text"></i>
          <p className='inline-text'>{props.beds}</p>
        </div>
        <div>
          <i class="fa-solid fa-shower card-icon inline-text"></i>
          <p className='inline-text'>{props.bathrooms}</p>
        </div>
        <div>
          <i class="fa-solid fa-square-parking card-icon inline-text"></i>
          <p className="inline-text">{props.area}</p>
        </div>

        <div>
          {like ? (
            <i className="fas fa-heart scale-animation" style={{ color: '#a81a1a', fontSize:'30px',marginLeft:'20px' }} onClick={handleClick}></i>
          ) : (
            <i className="far fa-heart" style={{ fontSize:'25px' ,marginLeft:'20px'}}onClick={handleClick}></i>
          )}
        </div>
      </div>


    </div>
  )
}

export default Listcard
