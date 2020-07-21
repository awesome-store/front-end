import React from 'react';
import paint from '../../img/paint.png';

function Cart() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <h1 className="heading-primary">Shopping Cart</h1>
                <p>3 items</p>
                <div className="cart">
                    <div className="cart-row">
                        <p>Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p></p>
                    </div>
                    <div className="cart-row">
                        <div className="cart-row__product-info-container">
                            <img className="img-fluid" src={paint} alt="paint"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;