import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../img/logo.png";
import cart from "../img/icons/cart.svg";
// import avatar from "../img/avatar.png";
import avatarDefault from "../img/icons/avatar-default.svg";
import hamburger from "../img/icons/menu.svg";
// import search from "../img/icons/search.svg";

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
                            <NavLink to="/" className="nav__link">
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/store" className="nav__link">
                                <span>Store</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/tutorials" className="nav__link">
                                <span>Tutorials</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/faq" className="nav__link">
                                <span>Help</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <form action="#" className="header__search">
                    {/* <img src={search} alt="search"/> */}
                    <input type="text" className="search__input" placeholder="Search"/>
                </form>
                <NavLink to="/cart">
                    <div className="header__icons-container">
                        <div className="nav-cart">
                            <img src={cart} alt="Cart" className="nav-cart__img"/>
                            <p className="nav-cart__text nav-cart__text-number">12</p>
                            <p className="nav-cart__text nav-cart__text-items">&nbsp;items</p>
                        </div>
                        <div className="navigation-mobile">
                            <img className="navigation-mobile__hamburger" src={hamburger} alt="Hamburger"/>
                        </div>
                    </div>
                </NavLink>

                {/* <div className="user">
                    <span className="user__user-name">Mike Kainov</span>
                    <div className="user__avatar-container">
                        <img src={user} alt="User account" className="user__dropdown"/>
                    </div>
                </div> */}
                <div className="user">
                    <Link to="/login" className="user__link">
                        <p className="user__login">Login</p>
                    </Link>
                    <Link to="/account" className="user__link">
                        <div className="user__avatar-container">
                            <img src={avatarDefault} alt="User account" className=" user__avatar user__dropdown"/>
                        </div>
                    </Link>
                </div>
                
            </header>
        </div>
    );
}

export default Header;