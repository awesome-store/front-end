import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png";
import cart from "../img/icons/cart.svg";
import user from "../img/avatar.png";

function Header() {
    return (
        <div className="container">
            <header className="header">
                <NavLink className="header__logo-container" to="/">
                    <img src={logo} alt="Awesome Store logo" className="logo"/>
                </NavLink>
                <nav className="navigation">
                    <ul className="nav">
                        <li className="nav__item">
                            <NavLink to="#" className="nav__link">
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="#" className="nav__link">
                                <span>Store</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="#" className="nav__link">
                                <span>Tutorials</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="#" className="nav__link">
                                <span>Help</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search"/>
                </form> */}

                <div className="cart">
                    <img src={cart} alt="Cart" className="cart__img"/>
                    <span className="cart__text">12 items</span>
                </div>

                <div className="user">
                    <span className="user__user-name">Mike Kainov</span>
                    <img src={user} alt="User account" className="user__dropdown"/>
                </div>
            </header>
        </div>
    );
}

export default Header;

