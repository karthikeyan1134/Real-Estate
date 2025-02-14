import React from 'react'
import { Link } from 'react-router-dom';
import './Otp.css';
import { useNavigate } from "react-router-dom";
const Otp = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/login')
    }
    return (
        <div className='otp-container'>
            <div className="otp-form">
                <div className="head">
                    <p><b>Enter otp</b></p>
                    <p><i className="fa-regular fa-circle-xmark icon"></i></p>
                </div>
                <p id="sub">Please check your mail,We sent an otp code</p>
                <div className="boxes">
                    <input type="number" className='num-cls' />
                    <input type="number" className='num-cls' />
                    <input type="number" className='num-cls' />
                    <input type="number" className='num-cls' />
                </div>
                <div className="submit">
                    <input onClick={handleClick} type="button" name="log-in" id="log" value="Confirm" />
                </div>
                <div className="otp-text">
                    Remember the password?
                    <Link to="/login"><b>Log in</b></Link>
                </div>
            </div>
        </div>
    )
}

export default Otp
