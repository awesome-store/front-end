import React, { Component, useState } from "react";
import goldstar from "../../img/icons/gold-star.svg";
import star from "../../img/icons/star.svg";
import { connect } from 'react-redux';
import { addtocart } from "../../redux/reducer";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "https://source.unsplash.com/random",
            productTitle: "Ryobi Lithium-Ion Cordless Drill + Charger",
            price: "49.99",
            unit: "piece",
            rating: "4",
            id: 5
        }
    }
    // state = {
    //     image: "https://source.unsplash.com/random",
    //     productTitle: "Ryobi Lithium-Ion Cordless Drill + Charger",
    //     price: "49.99",
    //     unit: "piece",
    //     rating: "4"
    // }
    // const [productInfo, setProductInfo] = useState({
        // image: "https://source.unsplash.com/random",
        // productTitle: "Ryobi Lithium-Ion Cordless Drill + Charger",
        // price: "49.99",
        // unit: "piece",
        // rating: "4"
    // })

    addToCart = (item) => {
        console.log(item);
        this.props.addtocart(item);
    }

    test = () => {
        console.log(this.props.cart);
    }

    render() {
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
                <span className="product-card__heading">{this.state.productTitle}</span>
                <div className="product-card__price-container">
                    <span className="product-card__price">${this.state.price}</span>
                    <span className="product-card__price-unit">/ {this.state.unit}</span>
                    <span>{this.state.id}</span>
                </div>
                <div className="product-card__button pointer" onClick={() => this.addToCart(this.state)}>
                    <span>Add to Cart</span>
                </div>
                <div className="product-card__button pointer" onClick={() => this.test()}>
                    <span>Test</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addtocart: (cartItem) => {dispatch(addtocart(cartItem))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);