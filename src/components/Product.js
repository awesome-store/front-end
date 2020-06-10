import React from "react";
import goldstar from "../img/icons/gold-star.svg";
import star from "../img/icons/star.svg";

function Product(props) {
    return (
        <div className="products-container__item">
            <div className="products-container__item-img-container">
                <img className="products-container__item-img" src={props.img} alt={props.img}/>
            </div>
            <div className="products-container__item-stars">
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={star} alt="star"/>
            </div>
            <span className="products-container__item-heading">Ryobi Lithium-Ion<br/>Cordless Drill + Charger</span>
            <div className="products-container__item-price-container">
                <span className="products-container__item-price">$49.99</span>
                <span className="products-container__item-price-unit">/ piece</span>
            </div>
            <div className="products-container__item-button pointer">
                <span>Add to Cart</span>
            </div>
        </div>
    )
}

export default Product;