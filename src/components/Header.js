import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MobileMenu from './MobileMenu';
import styled from 'styled-components';
import logo from "../img/logo.png";
import cartImg from "../img/icons/cart.svg";
import search from "../img/icons/search.svg";
import avatarDefault from "../img/icons/avatar-default.svg";

const MobileSearch = styled.div`
    position: absolute;
    z-index: 2;
    top: 5.5rem;
    width: 100%;
    display: ${({ openMobileSearch }) => openMobileSearch ? 'flex' : 'none'};
    background-color: var(--color-dark-gray);

    .mobile-menu__search-input {
        width: 100%;
        padding: 1rem;
        margin: 1rem;
    }
`;

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: ${({ openMobileMenu }) => openMobileMenu ? 'fixed' : 'static'};
    top: ${({ openMobileMenu }) => openMobileMenu ? '1.7rem' : 'auto'};
    right: ${({ openMobileMenu }) => openMobileMenu ? '2rem' : 'auto'};
    // top: 1.7rem;
    // right: 2rem;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ openMobileMenu }) => openMobileMenu ? '#333' : '#ccc'};
        // background-color #ccc;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ openMobileMenu }) => openMobileMenu ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ openMobileMenu }) => openMobileMenu ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ openMobileMenu }) => openMobileMenu ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ openMobileMenu }) => openMobileMenu ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openMobileSearch, setOpenMobileSearch] = useState(false);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        alert("lol")
        const token = localStorage.getItem('token');
        const options = {
            header: {
                authorization: token
            }
        };

        axios.get('https://aw-store.herokuapp.com/auth/user', options)
        .then(res => {
            console.log("res.data ========> ", res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="header-container">
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
                        <img className="header__search-img pointer" src={search} alt="search" onClick={() => setOpenMobileSearch(!openMobileSearch)}/>
                        {/* <input type="text" className="search__input" placeholder="Search"/> */}
                    </form>
                    <NavLink to="/cart">
                        <div className="header__icons-container">
                            <div className="nav-cart">
                                <img src={cartImg} alt="Cart" className="nav-cart__img"/>
                                {cart.length === 0 ? (
                                    <p className="nav-cart__text nav-cart__text-number"></p>
                                ) : (
                                    // <p className="nav-cart__text nav-cart__text-number">{cart[0].quantity}</p>
                                    <p className="nav-cart__text nav-cart__text-number">{cart.reduce((total, current) => total + current.quantity, 0)}</p>
                                )}
                                
                                
                                {cart.length === 0 ? (
                                <p className="nav-cart__text nav-cart__text-items"></p>
                                ) : (
                                    <p className="nav-cart__text nav-cart__text-items">&nbsp;items</p>
                                )}
                                
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
                        <StyledBurger className="pointer" openMobileMenu={openMobileMenu} onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                            <div />
                            <div />
                            <div />
                        </StyledBurger>
                        <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
                    </div>
                </div>
            </header>
            <MobileSearch openMobileSearch={openMobileSearch}>
                {/* <p>test</p> */}
                <input className="mobile-menu__search-input"/>
            </MobileSearch>
        </div>
    );
}

export default Header;