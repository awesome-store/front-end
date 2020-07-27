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
                        <div className="cart-header">
                            <p className="cart-header__item">NAME</p>
                            <p className="cart-header__item">PRICE</p>
                            <p className="cart-header__item">QUANTITY</p>
                            <p className="cart-header__item"></p>
                        </div>
                        <div className="cart-row">
                            <div className="cart-row__product-info-container">
                                <img className="img-fluid" src={paint} alt="paint"/>
                                <p className="cart-row__product-info-text">10 INCH SPRING AND GEL MEMORY FOAM HYBRID MATTRESS</p>
                            </div>
                            <div className="cart-row__price-container">
                                <p className="cart-row__price">$49.99</p>
                                <p className="cart-row__price-unit">/price</p>
                            </div>
                            <div className="cart-row__quantity-container">
                                <div className="cart-row__quantity-inner-container">
                                    <p className="cart-row__quantity-container-value">1</p>
                                    <div className="cart-row__quantity-container-actions-container pointer">
                                        <p className="cart-row__quantity-container-action">+</p>
                                        <p className="cart-row__quantity-container-action">-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-row__remove-item-container pointer">
                                <p>x</p>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-row__product-info-container">
                                <img className="img-fluid" src={paint} alt="paint"/>
                                <p className="cart-row__product-info-text">10 INCH SPRING AND GEL MEMORY FOAM HYBRID MATTRESS</p>
                            </div>
                            <div className="cart-row__price-container">
                                <p className="cart-row__price">$80.25</p>
                                <p className="cart-row__price-unit">/price</p>
                            </div>
                            <div className="cart-row__quantity-container">
                                <div className="cart-row__quantity-inner-container">
                                    <p className="cart-row__quantity-container-value">1</p>
                                    <div className="cart-row__quantity-container-actions-container pointer">
                                        <p className="cart-row__quantity-container-action">+</p>
                                        <p className="cart-row__quantity-container-action">-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-row__remove-item-container pointer">
                                <p>x</p>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-row__product-info-container">
                                <img className="img-fluid" src={paint} alt="paint"/>
                                <p className="cart-row__product-info-text">10 INCH SPRING AND GEL MEMORY FOAM HYBRID MATTRESS</p>
                            </div>
                            <div className="cart-row__price-container">
                                <p className="cart-row__price">$39.99</p>
                                <p className="cart-row__price-unit">/price</p>
                            </div>
                            <div className="cart-row__quantity-container">
                                <div className="cart-row__quantity-inner-container">
                                    <p className="cart-row__quantity-container-value">1</p>
                                    <div className="cart-row__quantity-container-actions-container pointer">
                                        <p className="cart-row__quantity-container-action">+</p>
                                        <p className="cart-row__quantity-container-action">-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-row__remove-item-container pointer">
                                <p>x</p>
                            </div>
                        </div>
                        <div className="cart-row cart-row--total">
                            <div className="cart-row__product-info-container">
                            </div>
                            <div className="cart-row__quantity-container">
                            </div>
                            <div className="cart-row__estimate-amount-container">
                                <p className="cart-row__estimate-value">$17.02</p>
                                <p className="cart-row__estimate-description">&nbsp; EST. TAX</p>
                            </div>
                            <div className="cart-row__remove-item-container pointer">
                            </div>
                        </div>
                        <div className="cart-row cart-row--total">
                            <div className="cart-row__product-info-container">
                            </div>
                            <div className="cart-row__quantity-container">
                            </div>
                            <div className="cart-row__estimate-amount-container">
                                <p className="cart-row__estimate-value">$187.25</p>
                                <p className="cart-row__estimate-description">&nbsp; FINAL PRICE</p>
                            </div>
                            <div className="cart-row__remove-item-container pointer">
                            </div>
                        </div>
                        <div className="cart-row cart-row--total">
                            <div className="cart-row__product-info-container">
                            </div>
                            <div className="cart-row__estimate-amount-container">
                            </div>
                            <div className="cart-row__quantity-container">
                                <div className="btn btn--yellow pointer">
                                    <p>Checkout</p>
                                </div>
                            </div>
                            <div className="cart-row__remove-item-container pointer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;