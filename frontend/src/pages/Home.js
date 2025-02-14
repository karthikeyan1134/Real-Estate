import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Slider from '../components/Slider/Slider.js'
import Homecard from '../components/Homecards/Homecard.js'
import Lists from '../components/Lists/Lists.js';
import Footer from '../components/Footer/Footer.js'
const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Homecard/>
      <Lists/>
      <Footer/>
    </>
  )
}

export default Home
