import React, { useState } from 'react';
import Maps from '../Maps/Maps.js';
import houses from '../../data.js';
import Searchcard from '../Searchcard/Searchcard.js';
import './Searchpage.css';

const Searchpage = () => {
    const coordinates = [17.4065, 78.4772];
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(houses);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handelSearch = () => {
        const filteredData = houses.filter(elem =>
            elem.location.toLowerCase().includes(searchValue.toLowerCase())
        );
        setData(filteredData);
    };

    return (
        <div className='search_container'>
            <div className="box">
                <div className="search_box">
                    <div className="inps">
                        <label htmlFor="city" className='dim'>Search for Location</label><br />
                        <input type="text" onChange={handleInputChange} placeholder='search for city' id="city" />
                        <i className="fa-solid fa-magnifying-glass search-icon" onClick={handelSearch}></i>
                    </div>
                    <div className="cards">
                        {data.map(elem => (
                            <div className="cards-item" key={elem.id}>
                                <Searchcard id={elem.id} title={elem.title} location={elem.location} rate={elem.rate} beds={elem.beds} bathrooms={elem.bathrooms} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="map_box">
                    <Maps coordinates={coordinates}></Maps>
                </div>
            </div>
        </div>
    );
};

export default Searchpage;
