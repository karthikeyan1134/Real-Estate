import React from 'react'
import './resetpassword.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Otp");
  };
    return (
        <div className='pass-set-container'>
            <div className="rp-form">
                <div className="head">
                    <p><b>Reset passsword</b></p>
                    <p><i className="fa-regular fa-circle-xmark icon"></i></p>
                </div>
                <p id="sub">Enter the email address associated with your account and we'll send and otp to it</p>
                <div className="data">
                    <div className="inp">
                        <i class="fa-solid fa-envelope mail-icon icon"></i>
                        <input type="email" name="email" id="e-mail" placeholder='user/email address' />
                    </div>
                </div>
                <div className="submit">
                    <input onClick={handleClick} type="button" name="up-pass" id="log" value="Get OTP" />
                </div>
                <div className="text-size">
                    Don't have an account?
                    <Link to="/signup"><b>Create Account</b></Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
