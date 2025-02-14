import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisbile] = useState(true);
    const [type, setType] = useState('password');

    const handleClick = () => {
        setType(prevType => (prevType === 'password' ? 'text' : 'password'));
        setIsVisbile(!isVisible);
    };
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        const username = 'Coder';
        document.cookie = `username=${username}; max-age=60; path=/`;
            navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="head">
                    <p><b>Log In</b></p>
                    <p><i className="fa-regular fa-circle-xmark icon"></i></p>
                </div>
                <div className="inp">
                    <i className="fa-solid fa-envelope mail-icon icon"></i>
                    <input type="email" onChange={handleInputChange} name="email" id="e-mail" placeholder='user/email address' />
                </div>
                <div className="inp">
                    <i className="fa-solid fa-lock icon "></i>
                    <input type={type} onChange={handleInputChange} name="password" id="password" placeholder='password' />
                    <i className={isVisible ? 'fa-solid fa-eye-slash icon' : 'fa-solid fa-eye icon'} onClick={handleClick}></i>
                </div>
                <div className="opt">
                    <div>
                        <input type="checkbox" name="remember" id="rem" value="remember" />
                        <label htmlFor="rem"><b>Remember</b></label>
                    </div>
                    <Link to="/resetpassword" id="forget"><b>Forget Password</b></Link>
                </div>
                <div className="login-submit">
                    <input onClick={handleSubmit} type="button" name="log-in" id="log" value="Log in" />
                </div>
                <div className="login-text">
                    <p id='acc-text'>Don't have an account?</p>
                    <Link to="/signup"><b>Create Account</b></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
