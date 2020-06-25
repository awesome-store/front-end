import React from 'react';
import fb from '../../img/icons/fb-white.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__heading">Login</h1>
                <div className="login__facebook-btn pointer">
                    <img className="login__facebook-img" src={fb} alt="facebook"/>
                    <p>Log in with Facebook</p>                    
                </div>
                <div className="login__or-container">
                    <div className="login__horizontal-line"></div>
                    <p>OR</p>
                    <div className="login__horizontal-line"></div>
                </div>
                <input className="login__input input" placeholder="Email"/>
                <input className="login__input input" placeholder="Password"/>
                <Link className="login__restore-link link">
                    <p>Restore password</p>
                </Link>
                <div className="login__log-in-btn btn btn--yellow pointer">
                    <p>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default Login;