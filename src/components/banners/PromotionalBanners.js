import React from 'react';
import PromotionalBanner from './PromotionalBanner';
import vacuum from '../../img/vacuum.png';
import card from '../../img/card.png';

function PromotionalBanners(props) {
    return (
        <div className={"promotional-banner-container " + props.className}>
            <PromotionalBanner topText={["50% Off Select", <br />, "Dyson Vacuums"]} bottomText="Free delivery. Today only" img={vacuum} bgColor="#BF90FB"/>
            <PromotionalBanner topText="Financing Available" bottomText="Up to 24 month financing. Terms & conditions apply" img={card} bgColor="#739AFF"/>
        </div>
    )
}

export default PromotionalBanners;