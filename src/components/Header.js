import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import styled from 'styled-components';
import logo from "../img/logo.png";
import cart from "../img/icons/cart.svg";
import search from "../img/icons/search.svg";
import avatarDefault from "../img/icons/avatar-default.svg";
// import hamburger from "../img/icons/menu.svg";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: ${({ open }) => open ? 'fixed' : 'static'};
    top: 1.7rem;
    right: 2rem;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#333' : '#ccc'};
        // background-color #ccc;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);

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
                <div className="header__right">
                    <form action="#" className="header__search">
                        <img className="header__search-img" src={search} alt="search"/>
                        {/* <input type="text" className="search__input" placeholder="Search"/> */}
                    </form>
                    <NavLink to="/cart">
                        <div className="header__icons-container">
                            <div className="nav-cart">
                                <img src={cart} alt="Cart" className="nav-cart__img"/>
                                <p className="nav-cart__text nav-cart__text-number">12</p>
                                <p className="nav-cart__text nav-cart__text-items">&nbsp;items</p>
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
                    <div className="navigation-mobile">
                        {/* <img className="navigation-mobile__hamburger pointer" src={hamburger} alt="Hamburger"/> */}
                        <StyledBurger className="pointer" open={open} onClick={() => setOpen(!open)}>
                            <div />
                            <div />
                            <div />
                        </StyledBurger>
                        <MobileMenu open={open} setOpen={setOpen}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;