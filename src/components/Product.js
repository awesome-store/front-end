import React from "react";
import drill from "../img/drill.png";

function Product() {
    return (
        <div className="products-container__item">
            <div className="products-container__item-img-container">
                <img className="products-container__item-img" src={drill}/>
            </div>
            <div className="products-container__item-stars">
                <span>Star</span>
            </div>
            <span className="products-container__item-heading">Ryobi Lithium-Ion<br/>Cordless Drill + Charger</span>
            <div className="products-container__item-price">
                <span>$49.99</span>
                <span>/ piece</span>
            </div>
            <div className="products-container__item-button">
                <span>Add to Cart</span>
            </div>
        </div>
    )
}

export default Product;