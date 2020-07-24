import React from 'react';
import paint from '../../img/paint.png';

function Cart() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="cart-container">
                    <h1 className="heading-primary">Shopping Cart</h1>
                    <p className="heading-secondary cart__items-quantity">3 items</p>
                    <div className="cart">
                        <div className="cart-row">
                            <p>Name</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p></p>
                        </div>
                        <div className="cart-row">
                            <div className="cart-row__product-info-container">
                                <div className="cart-row__product-img-container">
                                    <img className="img-fluid" src={paint} alt="paint"/>
                                </div>
                                <p className="cart-row__product-info-text">10 INCH SPRING 10 INCH SPRING 10 INCH SPRING 10 INCH SPRING</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;