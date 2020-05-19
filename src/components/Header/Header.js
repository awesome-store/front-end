import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../img/logo.png";
import cart from "../../icons/cart.svg";
import user from "../../icons/user.svg";

function Header() {
    return (
        <div className="container">
            <header className="header">
                <img src={logo} alt="Awesome Store logo" className="logo"/>

                <nav className="navigation">
                    <ul className="nav">
                        <li className="nav__item">
                            <Link to="#" className="nav__link">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#" className="nav__link">
                                <span>Store</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#" className="nav__link">
                                <span>Tutorials</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#" className="nav__link">
                                <span>Help</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search"/>
                </form>

                <div className="cart">
                    <img src={cart} alt="Cart" className="cart__img"/>
                    <span className="cart__text">Items</span>
                </div>

                <div className="user">
                    <img src={user} alt="User account" className="user__dropdown"/>
                </div>
            </header>
        </div>
    );
}

export default Header;

