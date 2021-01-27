import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';
import Hamburger from './Hamburger';
import logo from "../img/logo.png";
import cartImg from "../img/icons/cart.svg";
// import search from "../img/icons/search.svg";
import avatarDefault from "../img/icons/avatar-default.svg";
import avatar from "../img/avatar.png";
import exit from "../img/icons/exit.svg";
import { connect } from 'react-redux';
import { authSetToken, setLoginErrorMessage } from '../redux/reducer';

// const MobileSearch = styled.div`
//     position: absolute;
//     z-index: 2;
//     top: 5.5rem;
//     width: 100%;
//     display: ${({ openMobileSearch }) => openMobileSearch ? 'flex' : 'none'};
//     background-color: var(--color-dark-gray);

//     .mobile-menu__search-input {
//         width: 100%;
//         padding: 1rem;
//         margin: 1rem;
//     }
// `;

const Header = (props) => {
    const { user, token } = props;
    const dispatch = useDispatch();

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    // const [openMobileSearch, setOpenMobileSearch] = useState(false);
    const cart = useSelector(state => state.cart);
    const loginErrorMessage = useSelector(state => state.loginErrorMessage);

    const logOut = () => {
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
                    {/* <form action="#" className="header__search pointer">
                        <img className="header__search-img" src={search} alt="search" onClick={() => setOpenMobileSearch(!openMobileSearch)}/>
                        <input type="text" className="search__input" placeholder="Search"/>
                    </form> */}
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
                                    <img src={avatar} alt="User account" className="user__dropdown"/>
                                </div>
                            </Link>
                            <img className="header__logout pointer" src={exit} alt="logout" onClick={() => logOut()}/>
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
                        <Hamburger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                        <MobileMenu openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
                    </div>
                </div>
            </header>
            {/* <MobileSearch openMobileSearch={openMobileSearch}>
                <input className="mobile-menu__search-input"/>
            </MobileSearch> */}
        </div>
    );
}

export default connect(({user, token}) => ({user, token}))(Header);