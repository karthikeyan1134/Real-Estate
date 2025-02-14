import React from 'react'
import './Searchone.css'
import img from './profile.webp';
import { useParams } from 'react-router-dom';
import houses from '../../data.js';
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.js'
import Maps from '../Maps/Maps.js'
const Searchone = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const coordinates = [28.6139, 77.2088];
    const handleimgclick = () => {
        navigate(`/search/${id}/images`)
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='list-container'>
                <div className="item1 grids">
                    <div className="images">
                        <div className="img1 img-grids" onClick={handleimgclick}></div>
                        <div className="img2 img-grids" onClick={handleimgclick}></div>
                        <div className="img3 img-grids" onClick={handleimgclick}></div>
                        <div className="img4 img-grids" onClick={handleimgclick}></div>
                    </div>
                </div>
                <div className="item2 grids">
                    <div className="info-container">
                        <div className="info-1">
                            <h3 className='title'>{houses[id].title}</h3>
                            <span className='span-info'><i class="fa-solid fa-location-dot"></i></span>
                            <span className='span-info'>123 hyderabad</span><br/>
                            <button className='info-btn'>$1000</button>
                        </div>
                        <div className="info-2">
                            <img className='profile-pic' src={img} alt="nothing to display" />
                            <p className='name'><b>Kevin</b></p>
                        </div>
                    </div>

                </div>
                <div className="item3 grids">
                    <p className='heading'><b>General</b></p>
                    <div className="gen">
                        <div className="gen-inline">
                            <i class="fa-solid fa-shield-dog gen-icon"></i>
                            <div className="matter">
                                <p className='gen-p'><b>utilities</b></p>
                                <p className='gen-p'>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="gen-inline">
                            <i class="fa-solid fa-screwdriver-wrench gen-icon"></i>
                            <div className="matter">
                                <p className='gen-p'><b>pet policy</b></p>
                                <p className='gen-p'>pets allowed</p>
                            </div>
                        </div>
                        <div className="gen-inline">
                            <i class="fa-solid fa-house gen-icon"></i>
                            <div className="matter">
                                <p className='gen-p'><b>Property Fees</b></p>
                                <p className='gen-p'>Must have the 3x the rent in total householf income</p>
                            </div>
                        </div>
                    </div>
                    <p className='heading'><b>Room Details</b></p>
                    <div className="room">
                        <div className="room-det">
                            <i class="fa-solid fa-compass-drafting gen-icon"></i>
                            <p className='room-p'>80sq(861sqft)</p>
                        </div>
                        <div className="room-det"><i class="fa-solid fa-bed gen-icon"></i>
                            <p className='room-p'>2 beds</p></div>
                        <div className="room-det"><i class="fa-solid fa-bath gen-icon"></i>
                            <p className='room-p'>2 bathrooms</p></div>
                    </div>
                    <p className='heading'><b>Nearby places</b></p>
                    <div className="room">
                        <div className="room-det">
                            <i class="fa-solid fa-school gen-icon"></i>
                            <p className='room-p'>school</p>
                        </div>
                        <div className="room-det"><i class="fa-solid fa-bus gen-icon"></i>
                            <p className='room-p'>bustop</p></div>
                        <div className="room-det"><i class="fa-solid fa-hotel gen-icon"></i>
                            <p className='room-p'>Restaurant</p></div>
                    </div>
                    <p className='heading'><b>Location</b></p>
                    <div className="map">
                        <Maps coordinates={coordinates}></Maps>
                    </div>
                    <div className="btns">
                        <button id='mail-btn'><i class="fa-solid fa-envelope mail-icon"></i><a href="mailto:satyagnaneswar@gmail.com">Send a message</a></button>
                        <button id='mail-btn' ><i class="fa-regular fa-bookmark mail-icon"></i>Save this place</button>
                    </div>

                </div>
                <div className="item4 grids">
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus non commodi necessitatibus nulla magnam blanditiis vero expedita porro repudiandae alias, incidunt, atque in asperiores ab voluptatem repellat illum explicabo.</p>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro optio neque aspernatur rem esse ex? Natus alias cupiditate molestias.</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsa, consequatur nobis accusamus eligendi excepturi! Asperiores, exercitationem adipisci reiciendis magni eos earum maxime nesciunt architecto quibusdam beatae explicabo at eius!</p>
                    
                </div>
            </div>
        </>
    )
}

export default Searchone
