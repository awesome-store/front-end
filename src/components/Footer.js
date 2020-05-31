import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import logo from '../img/logo.png';
import facebook from '../img/icons/facebook.svg';
import twitter from '../img/icons/twitter.svg'
import instagram from '../img/icons/instagram.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__footer-content">
                <div className="footer-content__column">
                    <div className="footer__logo-container">
                        <img className="footer__logo" src={logo} alt="logo"/>
                    </div>
                    <div className="footercs">
                        <p>12345 Valley Ave 1, Seattle, WA</p>
                        <p>(800) 123-45-67</p>
                        <p>(800) 123-45-67</p>
                    </div>
                    <ExternalLink className="footer__link" href="mailto:mail@mail.com">
                        <p>mail@mail.com</p>
                    </ExternalLink>
                </div>
                <div className="footer-content__column">
                    <h3>Follow us</h3>
                    <p>Let’s get connected!</p>
                    <div>
                        <Link to="/">
                            <img src={facebook} alt="facebook"/>
                        </Link>
                        <Link to="/">
                            <img src={twitter} alt="twitter"/>
                        </Link>
                        <Link to="/">
                            <img src={instagram} alt="instagram"/>
                        </Link>
                    </div>
                </div>
                <div className="footer-content__column">
                    <h3>Sign up for our newsletter</h3>
                    <p>Get $10 off your next purchase.</p>
                    <input type="email"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;