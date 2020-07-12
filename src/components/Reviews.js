import React from 'react';
import Review from './Review';

function Reviews(props) {
    // let obj = {first: "Chomkwan", last: "Wattana"};
    return (
        <div className={"reviews-container " + props.className}>
            <h1 className="heading-primary">Reviews</h1>
            <div className="reviews">
                <Review name={ {first: "Chomkwan", last: "Wattana"} }/>
                {/* <Review name="name"/> */}
                {/* <Review name={obj}/> */}
                <Review/>
                <Review/>
                <Review/>
            </div>
        </div>
    )
}

export default Reviews;