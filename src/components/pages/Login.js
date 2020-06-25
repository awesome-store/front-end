import React from 'react';
import fb from '../../img/icons/facebook.svg';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login">
                <h1>Login</h1>
                <div className="login__login-with-fb">
                    <img src={fb} alt="facebook"/>
                    <p>Log in with Facebook</p>
                </div>
            </div>
        </div>
    )
}