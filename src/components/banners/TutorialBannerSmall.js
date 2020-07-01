import React from 'react';
import TutorialBanner from './TutorialBanner';

function TutorialBannerSmall(props) {
    return (
        <div className="tutorial-banner-small tutorial-banner-small--text-white" style={{color: props.textColor}}>
            <img className="tutorial-banner-small__image" src={props.img} alt="props.img"/>
            <span className="tutorial-banner-small__header">{props.header}</span>
            <div className="tutorial-banner-small__description">
                <p><b>{props.products}</b> promoted product</p>
                <p><b>{props.minutes}</b> min read</p>
            </div>
        </div>
    )
}

export default TutorialBannerSmall;