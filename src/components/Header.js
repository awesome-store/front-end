import React, { useState } from 'react';
// import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';
import styled from 'styled-components';
import logo from "../img/logo.png";
import cartImg from "../img/icons/cart.svg";
import search from "../img/icons/search.svg";
import avatarDefault from "../img/icons/avatar-default.svg";
import avatar from "../img/avatar.png";
import caret from "../img/icons/caret-down.svg";
import { connect } from 'react-redux';
import { authSetToken, setLoginErrorMessage } from '../redux/reducer';

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

const Bubble = styled.div`
    display: ${({ openBubble }) => openBubble ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    z-index: 999999;
    top: 6rem;
    right: -10px;
    background-color: var(--color-primary);
    color: var(--color-black);
    border-radius: 4px;
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.07), 0 4px 8px 0 rgba(0,0,0,0.07);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.07), 0 4px 8px 0 rgba(0,0,0,0.07);

    &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: -5px;
        right: 17px;
        background: #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-box-shadow: -1px -1px 0 0 rgba(0,0,0,0.07);
        box-shadow: -1px -1px 0 0 rgba(0,0,0,0.07);
    }
`

const Header = (props) => {
    const { user, token } = props;
    const dispatch = useDispatch();

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openMobileSearch, setOpenMobileSearch] = useState(false);
    const [openBubble, setOpenBubble] = useState(false);
    const cart = useSelector(state => state.cart);
    const loginErrorMessage = useSelector(state => state.loginErrorMessage);

    const logOut = () => {
        // (token) ? do : do
        if (token || user) {
            dispatch(authSetToken(null, null));
        }
        if (loginErrorMessage) {
            dispatch(setLoginErrorMessage(null));
        }
    }

    return (
        <div className="header-container">
            <header className="header">
                <NavLink className="header__logo-container" to="/">
                    <img src={logo} alt="Awesome Store logo" className="logo"/>
                </NavLink>
                <nav className="navigation">
                    <ul className="nav">
                        <NavLink to="/" className="nav__link">
                            <li className="nav__item">Home</li>
                        </NavLink>
                        <NavLink to="/store" className="nav__link">
                            <li className="nav__item">Store</li>
                        </NavLink>
                        <NavLink to="/tutorials" className="nav__link">
                            <li className="nav__item">Tutorials</li>
                        </NavLink>
                        <NavLink to="/faq" className="nav__link">
                            <li className="nav__item">Help</li>
                        </NavLink>
                    </ul>
                </nav>
                <div className="header__right">
                    <form action="#" className="header__search pointer">
                        <img className="header__search-img" src={search} alt="search" onClick={() => setOpenMobileSearch(!openMobileSearch)}/>
                        <input type="text" className="search__input" placeholder="Search"/>
                    </form>
                    <NavLink className="nav-cart__link" to="/cart">
                        <div className="header__icons-container">
                            <div className="nav-cart">
                                <img src={cartImg} alt="Cart" className="nav-cart__img"/>
                                {cart.length === 0 ? (
                                    <p className="nav-cart__text nav-cart__text-number"></p>
                                ) : (
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
                    {user ? (
                        <div className="user">
                            <Link to="/account" className="user__link">
                                <div className="user__avatar-container">
                                    {/* {
                                        (user.type === "website") ? (
                                            <img src={avatar} alt="User account" className="user__dropdown"/>
                                        ) : (
                                            <img src={user.picture.data.url} alt="User account" className="user__dropdown"/>
                                        )
                                    } */}
                                    <img src={avatar} alt="User account" className="user__dropdown"/>
                                </div>
                            </Link>
                            <div className="user__caret-container pointer" onClick={() => setOpenBubble(!openBubble)}>
                                <img src={caret} alt="caret down"/>
                            </div>
                            <Bubble openBubble={openBubble}>
                                <p className="user-bubble-container__title arrow">Profile</p>
                                <Link className="user-bubble-container__link" to="/account">
                                    {
                                        (user.type === "website") ? (
                                            <p className="user-bubble-container__user-name pointer">{user.message}</p>
                                        ) : (
                                            <p className="user-bubble-container__user-name pointer">{user.name}</p>
                                        )
                                    }
                                </Link>
                                <Link to="/login">
                                    <div className="user-bubble-container__log-out-container pointer" onClick={() => logOut()}>
                                        <p>Log out</p>
                                    </div>
                                </Link>
                            </Bubble>
                            {/* <div className="user__user-bubble-container" >
                                <p className="user-bubble-container__title arrow">Profile</p>
                                <p className="user-bubble-container__user-name pointer">{user}</p>
                                <div className="user-bubble-container__log-out-container pointer">
                                    <p>Log out</p>
                                </div>
                            </div> */}
                        </div>
                        ) : (
                        <div className="user">
                            <Link to="/login" className="user__link">
                                <p className="user__login">Login</p>
                            </Link>
                            <Link to="/login" className="user__link">
                                <div className="user__avatar-container">
                                    <img src={avatarDefault} alt="User account" className="user__avatar user__dropdown"/>
                                </div>
                            </Link>
                        </div>
                    )}
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

export default connect(({user, token}) => ({user, token}))(Header);