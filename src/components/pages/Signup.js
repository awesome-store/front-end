import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import SignupFormik from '../form/SignupFormik';

function Signup(props) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            props.history.push('/account');
        }
    })

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
                <h1 className="login__heading login__heading--no-mb">New Account</h1>
                <SignupFormik validate={validate} initialValues={initialValues}/>
            </div>
        </div>
    )
}

export default Signup;