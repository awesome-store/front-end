import React from 'react';
import PromotionalBanner from './PromotionalBanner';
import vacuum from '../../img/vacuum.png';
import card from '../../img/card.png';

function PromotionalBanners(props) {
    // https://reactjs.org/docs/lists-and-keys.html#keys
    const bannersData = [
        {
            topText: ["50% Off Select", <br />, "Dyson Vacuums"],
            bottomText: "Free delivery. Today only",
            img: vacuum,
            bgColor: "#BF90FB"
        },
        {
            topText: "Financing Available",
            bottomText: "Up to 24 month financing. Terms & conditions apply",
            img: card,
            bgColor: "#739AFF"
        }
    ];

    const banners = bannersData.map((banner, index) =>
        <PromotionalBanner key={index.toString()} topText={banner.topText} bottomText={banner.bottomText} img={banner.img} bgColor={banner.bgColor}/>
    )

    return (
        <div className={"promotional-banner-container " + props.className}>
            { banners }
        </div>
    )
}

export default PromotionalBanners;