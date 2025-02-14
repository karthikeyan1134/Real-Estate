import React, { useState } from 'react'
import './Imagepage.css';
import img1 from './search_img.jpg';
import img2 from './search_img2.jpeg';
import img3 from './search_img3.jpg';
import img4 from './search_img4.jpg';

const Imagepage = () => {
    const img_arr = [img1, img2, img3, img4];
    const [source, setsource] = useState(0)
    const moveRight = () => {
        if (source > 0)
            setsource(source - 1)
    }
    const moveLeft = () => {
        if (source < img_arr.length - 1)
            setsource(source + 1)
    }
    
    return (
        <div className='black-container'>
            <div className="img-container">
                <div>
                    <i className={`fa-solid fa-chevron-left arr-icon ${source === 0 ? 'disabled' : ''}`}
                        onClick={moveRight}></i>
                </div>
                <img className="search_img" src={img_arr[source]} alt="" />
                <div>
                    <i onClick={moveLeft} className={`fa-solid fa-chevron-right arr-icon ${source === img_arr.length - 1 ? 'disabled' : ''}`} ></i>
                </div>
            </div>

        </div>
    )
}

export default Imagepage
