import React from 'react';
import logo from "../../img/logo.png";
import cart from "../../icons/cart.svg";
import user from "../../icons/user.svg";

function Header() {
    return (
        <div class="container">
            <header class="header">
                <img src={logo} alt="Awesome Store logo" class="logo"/>


            </header>
        </div>
    );
}

export default Header;

