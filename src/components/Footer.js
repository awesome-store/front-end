import React from 'react';
import logo from '../img/logo.png';
import icon from '../img/icons/cart.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__footer-content">
                <div>
                    <div>
                        <img src={logo}/>
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
                        <img src={icon}/>
                        <img src={icon}/>
                        <img src={icon}/>
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