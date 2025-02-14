import React from 'react'
import './Homecard.css'
import img from './cartoon-home.jpg'
import card from './card.png'
import buy1 from './buy-home-removebg-preview.png'
const Homecards = () => {
  return (
    <div className="card-container">
      <div className="items">
        <img className="image" src={img} alt='' />
        <h2><b>Browse Houses</b></h2>
        <p className='card-text'>Find your place with immensive photo expeience and the most listings,including things you won't find anywhere else</p>
        <button className='card-btn'>Browse Homes</button>
      </div>
      <div className="items">
        <img src={buy1} className="image" alt='' />
        <h2><b>Buy a home</b></h2>
        <p className='card-text'>we're creating a seamless online experience from shopping on the largest rental network,to applying,to payment</p>
        <button className='card-btn'>Find rentals</button>
      </div>
      <div className="items">
        <img src={card} className="image" alt='' />
        <h2><b>Sell a home</b></h2>
        <p className='card-text'>No matter what path you take to sell your home,we can helo you navigate a succcessful sale.</p>
        <button className='card-btn'>See your options</button>
      </div>

    </div>
  )
}

export default Homecards
