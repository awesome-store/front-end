import React from 'react';
import fb from '../../img/icons/fb.svg';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login">
                <h1>Login</h1>
                <div className="login__login-with-fb">
                    <img className="login-with-fb__facebook-btn" src={fb} alt="facebook"/>
                    <p className="login-with-fb__text">Log in with Facebook</p>
                </div>
            </div>
        </div>
    )
}

export default Login;