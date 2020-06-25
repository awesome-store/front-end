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
                <p>OR</p>
                <input className="input"/>
                <input className="input"/>
                <Link>
                    <p>Restore password</p>
                </Link>
                <div>
                    <p>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default Login;