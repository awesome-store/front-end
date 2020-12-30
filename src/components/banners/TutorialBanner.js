import React from 'react';

function TutorialBanner(props) {
    return (
        <div className="tutorial-banner tutorial-banner--text-white" style={{color: props.textColor}}>
            <img className="tutorial-banner__image" src={props.img} alt={props.img}/>
            <span className="tutorial-banner__header">{props.header}</span>
            <div className="tutorial-banner__description">
                <p><b>{props.products}</b> promoted product</p>
                <p><b>{props.minutes}</b> min read</p>
            </div>
        </div>
    )
}

export default TutorialBanner;