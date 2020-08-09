import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);
    position: fixed;
    z-index: 10;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 50rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    border-left: 1px solid var(--color-light-gray);

    li {
        padding: 2rem 3.5rem;
        color: var(--color-black);
    }

    .mobile-menu__mobile-menu-login-signup-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding: 2rem 3.5rem;
    }

    .mobile-menu-login-signup-container__login-btn {
        border: 1px solid var(--color-black);
        border-radius: 6px;
        padding: 1rem;
        text-align: center;
        color: var(--color-black);
    }

    .mobile-menu-login-signup-container__login-btn--color-white {
        color: var(--color-primary);
    }
`;

const MobileMenu = ({ open, setOpen }) => {
    return (
        <Ul open={open}>
            <div className="mobile-menu__mobile-menu-login-signup-container">
                <Link onClick={() => setOpen(!open)}  to="/login">
                    <p className="mobile-menu-login-signup-container__login-btn">Login</p>
                </Link>
                <Link onClick={() => setOpen(!open)}  to="/signup">
                    <p className="mobile-menu-login-signup-container__login-btn mobile-menu-login-signup-container__login-btn--color-white btn">Sign up</p>
                </Link>
            </div>
            <Link onClick={() => setOpen(!open)} to="/">
                <li>Home</li>
            </Link>
            <Link  onClick={() => setOpen(!open)} to="/store">
                <li>Store</li>
            </Link>
            <Link onClick={() => setOpen(!open)}  to="/tutorials">
                <li>Tutorials</li>
            </Link>
            <Link onClick={() => setOpen(!open)}  to="/faq">
                <li>Help</li>
            </Link>
        </Ul>
    )
}

export default MobileMenu;