import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../img/logo.png";
import cart from "../../icons/cart.svg";
import user from "../../icons/user.svg";

function Header() {
    return (
        <div class="container">
            <header class="header">
                <img src={logo} alt="Awesome Store logo" class="logo"/>

                <nav class="navigation">
                    <ul class="nav">
                        <li class="nav__item">
                            <Link to="#" class="nav__link">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link to="#" class="nav__link">
                                <span>Store</span>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link to="#" class="nav__link">
                                <span>Tutorials</span>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link to="#" class="nav__link">
                                <span>Help</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <form action="#" class="search">
                    <input type="text" class="search__input" placeholder="Search"/>
                </form>

                <div class="cart">
                    <img src={cart} alt="Cart" class="cart__img"/>
                    <span>Items</span>
                </div>

                <div className="user">
                    <img src={user} alt="User account" className="user__dropdown"/>
                </div>
            </header>
        </div>
    );
}

export default Header;

