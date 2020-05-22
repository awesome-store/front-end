import React from 'react';
import logo from '../img/logo.png';
import facebook from '../img/icons/facebook.svg';
import twitter from '../img/icons/twitter.svg'
import instagram from '../img/icons/instagram.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__footer-content">
                <div>
                    <div className="footer__logo-container">
                        <img className="footer__logo" src={logo}/>
                    </div>
                    <div>
                        <p>12345 Valley Ave 1, Seattle, WA</p>
                        <p>(800) 123-45-67</p>
                        <p>(800) 123-45-67</p>
                    </div>
                    <p>mail@mail.com</p>
                </div>
                <div>
                    <h3>Follow us</h3>
                    <p>Let’s get connected!</p>
                    <div>
                        <img src={facebook}/>
                        <img src={twitter}/>
                        <img src={instagram}/>
                    </div>
                </div>
                <div>
                    <h3>Sign up for our newsletter</h3>
                    <p>Get $10 off your next purchase.</p>
                    <input/>
                </div>
            </div>
        </div>
    );
}

export default Footer;