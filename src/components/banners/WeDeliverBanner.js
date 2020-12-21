import React from 'react';
import { Link } from 'react-router-dom';
import wedelivercar from '../../img/we-deliver-car.png';

function WeDeliverBanner() {
    return (
        <div className="we-deliver-banner">
            <div className="we-deliver-banner__content">
                <p className="we-deliver-banner__text">WE DELIVER</p>
                <img className="we-deliver-banner__image" src={wedelivercar} alt="We Deliver. Fast. Efficient. Free."/>
            </div>
            <div className="we-deliver-banner__button-container">
                <Link to="/">
                    <div className="btn pointer">
                        <span>Find out more</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WeDeliverBanner;