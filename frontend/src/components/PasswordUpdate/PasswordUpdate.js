import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './PasswordUpdate.css'
const PasswordUpdate = () => {
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
  return (
    <div className='pass-update-container'>
      <div className="pu-form">
        <div className="head">
          <p><b>PassWordUpdate</b></p>
          <p><i class="fa-regular fa-circle-xmark icon"></i></p>
        </div>
        <p id="sub">Enter new password</p>
        <div className="inp">
          <i class="fa-solid fa-lock icon "></i>
          <input type={type} name="password" id="pass-word" placeholder='password' />
          <i class={isVisible ? 'fa-solid fa-eye-slash icon' : 'fa-solid fa-eye icon'} onClick={handleClick}></i>
        </div>
        <div className="inp">
          <i class="fa-solid fa-lock icon "></i>
          <input type={type} name="password" id="password" placeholder='Re-enter your password' />
        </div>
        <div className="submit">
          <input type="button" name="log-in" id="log" value="Update Password" />
        </div>
        <div className="pass-update-text">
          Remember the password?
          <Link to="/login"><b>Log in</b></Link>
        </div>

      </div>

    </div>
  )
}

export default PasswordUpdate
