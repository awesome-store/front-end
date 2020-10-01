import React from "react";
import goldstar from "../../img/icons/gold-star.svg";
import star from "../../img/icons/star.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from "../../redux/reducer";

function Product (props) {
    // const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        const item = {
            image: props.img,
            productTitle: props.productTitle,
            price: props.price,
            unit: props.unit,
            rating: props.rating,
            id: props.id
        };
        dispatch(addtocart(item));
    }

    // const test = () => {
    //     console.log(props.cart);
    // }
    
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
            <span className="product-card__heading">{props.productTitle}</span>
            <div className="product-card__price-container">
                <span className="product-card__price">${props.price}</span>
                <span className="product-card__price-unit">/ {props.unit}</span>
                <span style={{display: "none"}}>{props.id}</span>
            </div>
            <div className="product-card__button pointer" onClick={() => addToCart()}>
                <span>Add to Cart</span>
            </div>
            {/* <div className="product-card__button pointer" onClick={() => test()}>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addtocart: (cartItem) => {dispatch(addtocart(cartItem))}
//     }
// }

export default Product;