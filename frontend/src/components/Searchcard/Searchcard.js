import React from 'react'
import img from '../../images/home.jpg';
import './Searchcard.css'
import { useNavigate } from 'react-router-dom';
export default function Searchcard(props) {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate(`${props.id}`)

  }
  return (
    <>
      <img src={img} alt="" className='img-card' />
      <div className="card-det">
        <h3 className='card-tit' onClick={handleclick}>{props.title}</h3>
        <div className='card-text'>
          <i class="fa-solid fa-location-dot loc-icon"></i>
          <p className='card-loc'>{props.location}</p>
        </div>
        <button id='btn'>${props.rate}</button>
        <div className="icons">
          <div className="card-text">
            <i class="fa-solid fa-bed loc-icon"></i>
            <p className='card-loc'>{props.beds} Beds</p>
          </div>
          <div className="card-text">
          <i class="fa-solid fa-bath loc-icon"></i>
            <p className='card-loc'>{props.bathrooms}bathrooms</p>
          </div>
          <div className="card-text">
          <i class="fa-regular fa-comment loc-icon icon"></i>
          <i class="fa-regular fa-bookmark loc-icon icon"></i> 
          </div>
        </div>
      </div>
    </>

  )
}
