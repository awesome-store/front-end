import React from 'react';
import avatar from '../img/avatar.png';
import goldstar from "../img/icons/gold-star.svg";
import star from "../img/icons/star.svg";

function Reviews() {
    return (
        <div className="reviews-container">
            <h1 className="heading-primary">Reviews</h1>
            <div className="reviews">
                <div className="review">
                    <div className="review__top">
                        <img src={avatar} alt="avatar"/>
                        <div className="review__review-author-container">
                            <p>Chomkwan</p>
                            <p>Wattana</p>
                        </div>
                    </div>
                    <div className="review__content">
                        <p className="review__heading">Very good</p>
                        <div className="product-card__stars">
                            <img src={goldstar} alt="goldstar"/>
                            <img src={goldstar} alt="goldstar"/>
                            <img src={goldstar} alt="goldstar"/>
                            <img src={goldstar} alt="goldstar"/>
                            <img src={star} alt="star"/>
                        </div>
                        <p>Cheddar parmesan cream cheese. Babybel boursin chalk and cheese cottage cheese croque monsieur pepper jack hard cheese cheese and biscuits. Red leicester cheddar macaroni cheese goat lancashire croque monsieur boursin cream cheese. When the cheese comes out everybody's happy cheesy grin stilton mascarpone cheese strings boursin.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Reviews;