import React, { useState } from "react";
import goldstar from "../../img/icons/gold-star.svg";
import star from "../../img/icons/star.svg";

function Product(props) {
    const [productInfo, setProductInfo] = useState({
        image: "https://source.unsplash.com/random",
        productTitle: "Ryobi Lithium-Ion Cordless Drill + Charger",
        price: "49.99",
        unit: "piece",
        rating: "4"
    })

    const addToCart = () => {
        console.log(productInfo);
    }

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
            <span className="product-card__heading">{productInfo.productTitle}</span>
            <div className="product-card__price-container">
                <span className="product-card__price">${productInfo.price}</span>
                <span className="product-card__price-unit">/ {productInfo.unit}</span>
            </div>
            <div className="product-card__button pointer" onClick={() => addToCart()}>
                <span>Add to Cart</span>
            </div>
        </div>
    )
}

export default Product;