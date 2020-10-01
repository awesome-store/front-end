import React, { useState } from "react";
import goldstar from "../../img/icons/gold-star.svg";
import star from "../../img/icons/star.svg";
import { connect, useDispatch, useSelector } from 'react-redux';
import { addtocart } from "../../redux/reducer";

function Product () {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        const item = {
            image: this.props.img,
            productTitle: this.props.productTitle,
            price: this.props.price,
            unit: this.props.unit,
            rating: this.props.rating,
            id: this.props.id
        };
        this.props.addtocart(item);
    }

    const test = () => {
        console.log(this.props.cart);
    }

    
    return (
        <div className="product-cards__product-card">
            <div className="product-card__img-container">
                <img className="product-card__img" src={this.props.img} alt={this.props.img}/>
            </div>
            <div className="product-card__stars">
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={goldstar} alt="goldstar"/>
                <img src={star} alt="star"/>
            </div>
            <span className="product-card__heading">{this.props.productTitle}</span>
            <div className="product-card__price-container">
                <span className="product-card__price">${this.props.price}</span>
                <span className="product-card__price-unit">/ {this.props.unit}</span>
                <span style={{display: "none"}}>{this.props.id}</span>
            </div>
            <div className="product-card__button pointer" onClick={() => this.addToCart()}>
                <span>Add to Cart</span>
            </div>
            {/* <div className="product-card__button pointer" onClick={() => this.test()}>
                <span>Test</span>
            </div> */}
        </div>
    )
    
}

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        addtocart: (cartItem) => {dispatch(addtocart(cartItem))}
    }
}

export default Product;