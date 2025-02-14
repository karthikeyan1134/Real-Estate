import React from 'react'
import './Lists.css'
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';
import img6 from '../../images/img-6.jpg';
import img7 from '../../images/img-7.jpg';
import img8 from '../../images/img-8.jpg';
import img9 from '../../images/img-9.jpg';
import img10 from '../../images/img-10.jpg';
import img11 from '../../images/img-11.jpg';

import Listcard  from '../Listcard/Listcard';
import houses from '../../data.js'
const Lists = () => {
 const imgs=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11]
  return (
    <div className="li-container">
      <h2><b>popular listing</b></h2>
      <div className="li-items">
        { houses.map((elem)=>{
           const imgIndex = (elem.id - 1) % imgs.length;
          return <div className="li-item">
            <Listcard key={elem.id}id={elem.id} title={elem.title} description={elem.description} image={imgs[imgIndex]} beds={elem.beds}
             bathrooms={elem.bathrooms} rate={elem.rate} discount={elem.discount} area={elem.area} location={elem.location} added={elem.added}
            ></Listcard>
          </div>
        })}
      </div>     
    </div>
  )
}

export default Lists
