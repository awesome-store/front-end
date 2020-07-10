import React from 'react';
import avatar from '../img/avatar.png';

function Reviews() {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="review">
                <div className="review__top">
                    <img src={avatar} alt="avatar"/>
                    <div className="review__review-author-container">
                        <p className="review-author-container__first-name">First</p>
                        <p className="review-author-container__last-name">Last</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;