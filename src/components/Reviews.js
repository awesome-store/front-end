import React from 'react';
import avatar from '../img/avatar.png';

function Reviews() {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="review">
                <img src={avatar}/>
                <p></p>
            </div>
        </div>
    )
}

export default Reviews;