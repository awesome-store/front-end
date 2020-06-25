import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="login-wrapper">
            <div className="login">
            <h1 className="login__heading">New Account</h1>
                <input className="login__input input" placeholder="Name"/>
                <input className="login__input input" placeholder="Email"/>
                <input className="login__input input" placeholder="Password"/>
                <div className="login__terms-container">
                    <input className="" type="checkbox"/>
                    <p>I agree with <Link className="link" to="/">Terms & Conditions</Link></p>
                </div>
                <div className="login__log-in-btn btn btn--yellow pointer">
                    <p>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;