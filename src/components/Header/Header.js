import React from 'react';
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
                            <a href="#" class="nav__link">
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                <span>Store</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                <span>Tutorials</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                <span>Help</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

export default Header;

