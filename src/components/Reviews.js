import React from 'react';
import Review from './Review';

function Reviews() {
    return (
        <div className="reviews-container">
            <h1 className="heading-primary">Reviews</h1>
            <div className="reviews">
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
        </div>
    )
}

export default Reviews;