import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addquantity, substractquantity, removefromcart } from '../../redux/reducer';

function Cart() {
    const cart = useSelector(state => state.cart);
    console.log(cart);

    const estimate = cart.reduce((total, current) => total + current.quantity * current.price, 0);
    const tax = estimate / 100 * 10.1;
    const finalPrice = estimate + tax;
    const dispatch = useDispatch();

    const addQuantity = (id) => {
        dispatch(addquantity(id));
    }

    const substractQuantity = (id) => {
        dispatch(substractquantity(id));
    }

    const removeFromCart = (id) => {
        dispatch(removefromcart(id));
    }

    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="cart-container">
                    <h1 className="heading-primary">Shopping Cart</h1>
                    {cart.length === 0 ? (
                        <p style={{paddingBottom: "8rem"}} className="heading-secondary cart__items-quantity">There are no items in the cart</p>
                    ) : (
                        <p className="heading-secondary cart__items-quantity">{cart.reduce((total, current) => total + current.quantity, 0)} items</p>
                    )}
                
                    {cart.length === 0 ? (
                        <p></p>
                    ) : (
                        <div className="cart">
                            <div className="cart-header">
                                <p className="cart-header__item">NAME</p>
                                <p className="cart-header__item">PRICE</p>
                                <p className="cart-header__item">QUANTITY</p>
                                <p className="cart-header__item"></p>
                            </div>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div className="cart-row">
                                            <div className="cart-row__product-info-container">
                                                <img className="img-fluid" src={item.image} alt="paint"/>
                                                <p className="cart-row__product-info-text">{item.productTitle}</p>
                                            </div>
                                            <div className="cart-row__price-container">
                                                <p className="cart-row__price">${item.price}</p>
                                                <p className="cart-row__price-unit">/price</p>
                                            </div>
                                            <div className="cart-row__quantity-container">
                                                <div className="cart-row__quantity-inner-container">
                                                    <p className="cart-row__quantity-container-value">{item.quantity}</p>
                                                    <div className="cart-row__quantity-container-actions-container pointer">
                                                        <p className="cart-row__quantity-container-action" onClick={() => addQuantity(item.id)}>+</p>
                                                        <p className="cart-row__quantity-container-action" onClick={() => substractQuantity(item.id)}>-</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-row__remove-item-container pointer" onClick={() => removeFromCart(item.id)}>
                                                <p>x</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="cart-row cart-row--total">
                                <div className="cart-row__product-info-container">
                                </div>
                                <div className="cart-row__quantity-container">
                                </div>
                                <div className="cart-row__estimate-amount-container">
                                    <p className="cart-row__estimate-value">${tax.toFixed(2)}</p>
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
                                    {/* <p className="cart-row__estimate-value">$ {cart.reduce((total, current) => total + current.quantity * current.price, 0)}</p> */}
                                    <p className="cart-row__estimate-value">$ {finalPrice.toFixed(2)}</p>
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
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart;