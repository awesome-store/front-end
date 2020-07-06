import React from "react";
import goldstar from "../../img/icons/gold-star.svg";
import star from "../../img/icons/star.svg";

function Product(props) {
    return (
        <div className="product-cards__product-card">
            <div className="product-card__img-container">
                <img className="product-card__img" src={props.img} alt={props.img}/>
            </div>
            <div className="product-card__stars">
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={star} alt="star"/>
            </div>
            <span className="product-card__heading">Ryobi Lithium-Ion<br/>Cordless Drill + Charger</span>
            <div className="product-card__price-container">
                <span className="product-card__price">$49.99</span>
                <span className="product-card__price-unit">/ piece</span>
            </div>
            <div className="product-card__button pointer">
                <span>Add to Cart</span>
            </div>
        </div>
    )
}

export default Product;