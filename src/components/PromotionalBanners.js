import React from 'react';
import PromotionalBanner from './PromotionalBanner';
import vacuum from '../img/vacuum.png';
import card from '../img/card.png';

function PromotionalBanners() {
    return (
        <div className="home-page__promotional-banner-container">
            <PromotionalBanner topText={["50% Off Select", <br />, "Dyson Vacuums"]} bottomText="Free delivery. Today only" img={vacuum}/>
            <PromotionalBanner topText="Financing Available" bottomText="Up to 24 month financing. Terms & conditions apply" img={card}/>
        </div>
    )
}

export default PromotionalBanners;