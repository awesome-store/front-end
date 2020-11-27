import React from 'react';
import PromotionalBanner from './PromotionalBanner';
import vacuum from '../../img/vacuum.png';
import card from '../../img/card.png';

function PromotionalBanners(props) {
    // https://reactjs.org/docs/lists-and-keys.html#keys
    const bannersData = [
        {
            id: "11111",
            topText: ["50% Off Select", <br />, "Dyson Vacuums"],
            bottomText: "Free delivery. Today only",
            img: vacuum,
            bgColor: "#BF90FB"
        },
        {
            id: "222222",
            topText: "Financing Available",
            bottomText: "Up to 24 month financing. Terms & conditions apply",
            img: card,
            bgColor: "#739AFF"
        }
    ];

    // console.log(bannersData);
    const banners = bannersData.map((banner, index) =>
        <PromotionalBanner key={index} id={index} topText={banner.topText} bottomText={banner.bottomText} img={banner.img} bgColor={banner.bgColor} />
    )

    return (
        <div className={"promotional-banner-container " + props.className}>
            { banners }
            {/* {bannersData.map((banner, index) => (
                <PromotionalBanner key={index} id={banner.id} topText={banner.topText}/>
            ))} */}
        </div>
    )
}

export default PromotionalBanners;