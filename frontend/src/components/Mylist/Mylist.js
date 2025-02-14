import React from 'react'
import './Mylist.css'
import { useNavigate } from 'react-router-dom'
import img from '../Imagepage/search_img.jpg'
const Mylist = (props) => {
  const navigate=useNavigate()
  const mynavigation=()=>{
navigate(`/search/${props.id}`)
  }
  return (
    <div className='my-cont'>
      <div >
        <img src={img}alt=""  className="my-img"/>
      </div>
      <div className="my-tit">
        <h3 onClick={mynavigation}>{props.title}</h3>
      </div>
      <div >
        <p className="my-opt1">Edit</p>
        <p className="my-opt2">Delete</p>
      </div>
    </div>
  )
}

export default Mylist
