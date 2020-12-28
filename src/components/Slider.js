import React from 'react';
// import sliderChair from '../img/banner.png';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div className="top-slider__top-slider-content-container">
            <div className="top-slider__image-container">
                {/* <img className="top-slider__image" src={sliderChair} alt="toolkit"/> */}
            </div>
            <div className="top-slider__text-container">
                <h1 className="top-slider__heading">Furniture<br/>week</h1>
                <p className="top-slider__text">Up to 50% off<br/>select furniture</p>
                <Link to="/store">
                    <div className="btn btn--small-screen pointer">
                        <span>Browse in Store</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Slider;