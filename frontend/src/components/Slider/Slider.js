import React from 'react'
import {Link} from 'react-router-dom'
import './Slider.css'
const Slider = () => {
  return (
    <div className='sec1-container'>
       <div className="slide-text">
        <span>FIND YOUR</span><br/><span>PERFECT HOME</span>
        <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elitLibero ducimus quisquam<br/> quasi error nam explicabo magnam iure eos! Odio, beatae.</p>
       <button className='slide-btn'><Link to ='/search'>Browse Listing</Link></button>
        </div>  
    </div>
  )
}

export default Slider
