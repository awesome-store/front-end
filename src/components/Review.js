import React from 'react';
import goldstar from "../img/icons/gold-star.svg";
import star from "../img/icons/star.svg";

function Review(props) {
    return (
        <div className="review">
            <div className="review__top">
                <img src={props.img} alt="avatar"/>
                <div className="review__review-author-container">
                    <p>{props.name && props.name.first}</p>
                    <p>{props.name && props.name.last}</p>
                </div>
            </div>
            <div className="review__content">
                <p className="review__heading">{props.title}</p>
                <div className="product-card__stars">
                    <img src={goldstar} alt="goldstar"/>
                    <img src={goldstar} alt="goldstar"/>
                    <img src={goldstar} alt="goldstar"/>
                    <img src={goldstar} alt="goldstar"/>
                    <img src={star} alt="star"/>
                </div>
                <p className="review__review-container">{props.text}</p>
            </div>
        </div>
    )
}

export default Review;