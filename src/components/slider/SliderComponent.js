import React from 'react';
// import sliderChair from '../img/banner.png';
import imgOne from "../../img/paint1.png";
import imgTwo from "../../img/paint2.png";
// import SliderBannerOne from './SliderBannerOne';
// import SliderBannerTwo from './SliderBannerTwo';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
    };
    return (
        <>
            <Slider {...settings} style={{width: "100%"}}>
                <div>
                    <h1>one</h1>
                    <img src={imgOne}/>
                </div>
                <div>
                    <h1>two</h1>
                    <img src={imgTwo}/>
                </div>
                <div className="top-slider__top-slider-content-container">
                    <div className="top-slider__image-container">
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
                {/* <div className="top-slider__top-slider-content-container">
                    <div className="top-slider__image-container">
                    </div>
                    <div className="top-slider__text-container">
                        <h1 className="top-slider__heading">Furniture<br/>month</h1>
                        <p className="top-slider__text">Up to 50% off<br/>select furniture</p>
                        <Link to="/store">
                            <div className="btn btn--small-screen pointer">
                                <span>Browse in Store</span>
                            </div>
                        </Link>
                    </div>
                </div> */}
            </Slider>
        </>
    )
}

export default SliderComponent;