import React from 'react';
import Review from './Review';
// import avatar from '../img/avatar.png';

function Reviews(props) {
    const reviewsNumber = [1, 2, 3, 4];
    const name = {first: "Chomkwan", last: "Wattana"};
    // const avatar = {avatar};
    const title = "Very good";
    const review = "Cheddar parmesan cream cheese. Babybel boursin chalk and cheese cottage cheese croque monsieur pepper jack hard cheese cheese and biscuits. Red leicester cheddar macaroni cheese goat lancashire croque monsieur boursin cream cheese. When the cheese comes out everybody's happy cheesy grin stilton mascarpone cheese strings boursin.";

    const reviewsItems = reviewsNumber.map((number) =>
        <Review key={number.toString()} name={name} title={title} text={review}/>
    );
    return (
        <div className={"reviews-container " + props.className}>
            <h1 className="heading-primary">Reviews</h1>
            <div className="reviews">
                { reviewsItems }
                {/* <Review name={name} title={title} text={review}/>
                <Review name={name} title={title} text={review}/>
                <Review name={name} title={title} text={review}/>
                <Review name={name} title={title} text={review}/> */}
            </div>
        </div>
    )
}

export default Reviews;