import React from 'react';
import Review from './Review';
import avatar from '../img/avatar.png';

function Reviews(props) {
    const reviewsData = [
        {
            img: avatar,
            name: {first: "Chomkwan", last: "Wattana"},
            title: "Very good",
            review: "Cheddar parmesan cream cheese. Babybel boursin chalk and cheese cottage cheese croque monsieur pepper jack hard cheese cheese and biscuits. Red leicester cheddar macaroni cheese goat lancashire croque monsieur boursin cream cheese. When the cheese comes out everybody's happy cheesy grin stilton mascarpone cheese strings boursin."
        },
        {
            img: avatar,
            name: {first: "Chomkwan", last: "Wattana"},
            title: "Very good",
            review: "Cheddar parmesan cream cheese. Babybel boursin chalk and cheese cottage cheese croque monsieur pepper jack hard cheese cheese and biscuits. Red leicester cheddar macaroni cheese goat lancashire croque monsieur boursin cream cheese. When the cheese comes out everybody's happy cheesy grin stilton mascarpone cheese strings boursin."
        },
        {
            img: avatar,
            name: {first: "Chomkwan", last: "Wattana"},
            title: "Very good",
            review: "Cheddar parmesan cream cheese. Babybel boursin chalk and cheese cottage cheese croque monsieur pepper jack hard cheese cheese and biscuits. Red leicester cheddar macaroni cheese goat lancashire croque monsieur boursin cream cheese. When the cheese comes out everybody's happy cheesy grin stilton mascarpone cheese strings boursin."
        },
        {
            img: avatar,
            name: {first: "Chomkwan", last: "Wattana"},
            title: "Very good",
            review: "Cheddar parmesan cream cheese. Babybel boursin chalk and cheese cottage cheese croque monsieur pepper jack hard cheese cheese and biscuits. Red leicester cheddar macaroni cheese goat lancashire croque monsieur boursin cream cheese. When the cheese comes out everybody's happy cheesy grin stilton mascarpone cheese strings boursin."
        }
    ]

    const reviews = reviewsData.map((review, index) =>
        <Review key={index} img={review.img} name={review.name} title={review.title} text={review.review}/>
    );
    return (
        <div className={"reviews-container " + props.className}>
            <h1 className="heading-primary">Reviews</h1>
            <div className="reviews">
                { reviews }
            </div>
        </div>
    )
}

export default Reviews;