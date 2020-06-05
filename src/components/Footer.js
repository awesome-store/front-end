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
                <div className="footer__logo-container footer__top-left">
                    <img className="footer__logo" src={logo} alt="logo"/>
                </div>
                <div className="footer__bottom-left">
                    <div className="footer__contact-info-container">
                        <p>12345 Valley Ave 1, Seattle, WA</p>
                        <p>(800) 123-45-67</p>
                        <p>(800) 123-45-67</p>
                    </div>
                    <ExternalLink className="footer__link" href="mailto:mail@mail.com">
                        <p>mail@mail.com</p>
                    </ExternalLink>
                </div>
                <h3 className="footer__header footer__top-middle">Follow us</h3>
                <div className="footer__bottom-middle">
                    <p className="footer__lets-get-connected">Let’s get connected!</p>
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
                <h3 className="footer__top-right">Sign up for our newsletter</h3>
                <div className="footer__bottom-right">
                    <p className="footer__get-ten-percent-off">Get $10 off your next purchase.</p>
                    <input type="email"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;