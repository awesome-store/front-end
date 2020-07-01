import React from 'react';

function PromotionalBanner(props) {
    return (
        <section className="promotional-banner-small">
            <div  className="promotional-banner-small__text-container promotional-banner-small__text-container--purple">
                <span className="promotional-banner-small__header">{props.topText}</span>
                <span className="promotional-banner-small__description">{props.bottomText}</span>
            </div>
            <div className="promotional-banner-small__img-container" style={{background: `url(${props.img}) center/cover`}}></div>
        </section>
    )
    
}

export default PromotionalBanner;