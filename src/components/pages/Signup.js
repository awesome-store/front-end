import React from 'react';
// import { Link } from 'react-router-dom';
import SignupFormik from '../form/SignupForm';

function Signup() {
    const nameValidation = name => {
        if (name.trim() === "") {
            return "Name is required";
        }
        return null;
    }

    const emailValidation = email => {
        if (email.trim() === "") {
            return "Email is required";
        }
        return null;
    }

    const passwordValidation = password => {
        if (!password) {
            return "Password is required";
        }
        if (/[^a-zA-Z -]/.test(password)) {
            return "Invalid characters";
        }
        if (password.length < 4) {
            return "Password needs to have at least 4 characters";
        }
        return null;
    }

    const validate = {
        name: nameValidation,
        email: emailValidation,
        password: passwordValidation
    }

    const initialValues = {
        name: "test",
        email: "test",
        password: "test"
    }

    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__heading">New Account</h1>
                {/* <input className="login__input input" placeholder="Name"/>
                <input className="login__input input" placeholder="Email"/>
                <input className="login__input input" placeholder="Password"/>
                <div className="login__terms-container">
                    <input className="" type="checkbox"/>
                    <p>I agree with <Link className="link" to="/">Terms & Conditions</Link></p>
                </div>
                <div className="login__log-in-btn btn pointer">
                    <p>Sign up</p>
                </div> */}
                <SignupFormik validate={validate} initialValues={initialValues}/>
            </div>
        </div>
    )
}

export default Signup;