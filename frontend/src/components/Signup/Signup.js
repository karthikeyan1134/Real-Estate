import React, { useState } from 'react'
// import axios from 'axios'
import './Signup.css'
import { Link,useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const [isVisible, setIsVisbile] = useState(true);
    const [type, setType] = useState("password")
    const handleClick = () => {
        if (type.match("password")) {
            setType("text")
        }
        else {
            setType("password")
        }
        setIsVisbile(!isVisible)
    };
    const handlesubmit=()=>{
        const username = 'Coder';
        document.cookie = `username=${username}; max-age=60; path=/`;
        navigate('/')
    }
    return (
        <div className="signup-container">
            <div className="signup-form">
                <div className="head">
                    <p><b>Create Account</b></p>
                    <p><i className="fa-regular fa-circle-xmark icon"></i></p>
                </div>
                <div className="data">
                    <div className="inp">
                        <i className="fa-solid fa-user icon"></i>
                        <input type="text" name="username" id="name" placeholder='Username' />
                    </div>
                    <div className="inp">
                        <i className="fa-solid fa-envelope mail-icon icon"></i>
                        <input type="email" name="email" id="e-mail" placeholder='user/email address' />
                    </div>
                    <div className="inp">
                        <i className="fa-solid fa-lock icon "></i>
                        <input type={type} name="password" id="pass-word" placeholder='password' />
                        <i class={isVisible ? 'fa-solid fa-eye-slash icon' : 'fa-solid fa-eye icon'} onClick={handleClick}></i>
                    </div>
                    <div className="inp">
                        <i className="fa-solid fa-lock icon "></i>
                        <input type="password" name="password" id="password" placeholder='Confirm password' />
                    </div>
                    <div className="opt">
                        <input type="checkbox" name="remember" id="agree" value="remember" />
                        <label id="label2" htmlFor="agree">I agree to terms and conditions</label>
                    </div>
                    <div className="submit">
                        <input onClick={handlesubmit}type="button" name="sign-up" id="sign" value="Create Account" />
                    </div>
                    <div className="signup-text">
                        Have an account?
                        <Link to="/login"><b>Log in</b></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
