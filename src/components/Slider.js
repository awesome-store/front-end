import React from 'react';
// import sliderChair from '../img/banner.png';

function Slider() {
    return (
        <div className="top-slider__top-slider-content-container">
            <div className="top-slider__image-container">
                {/* <img className="top-slider__image" src={sliderChair} alt="toolkit"/> */}
            </div>
            <div className="top-slider__text-container">
                <h1 className="top-slider__heading">Furniture<br/>week</h1>
                <p className="top-slider__text">Up to 50% off<br/>select furniture</p>
                <div className="btn btn--small-screen">
                    <span>Browse in Store</span>
                </div>
            </div>
        </div>
    )
}

export default Slider;