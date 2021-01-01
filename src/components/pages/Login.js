import React, { useEffect } from 'react';
import LoginFormik from '../form/LoginFormik';

function Login(props) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            props.history.push('/account');
        }
    })

    const emailValidation = email => {
        // if (
        //     /^[a-zA-Z0-9.!#$%&’*+/=^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        //         email
        //     )
        // ) {
        //     return null;
        // }
        if (email.trim() === "") {
            return "Email is required";
        }
        return null;
        // return "Please enter a valid email";
    }

    const passwordValidation = password => {
        if (!password) {
            return "Password is required";
        }
        if (/[^a-zA-Z -]/.test(password)) {
            return "Invalid characters";
        }
        if (password.length < 4) {
            return "Passord needs to have at least 4 characters";
        }
        return null;
    }

    const validate = {
        email: emailValidation,
        password: passwordValidation
    }

    const initialValues = {
        email: "test",
        password: "test"
    }

    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__heading">Login</h1>
                <LoginFormik validate={validate} initialValues={initialValues}/>
            </div>
        </div>
    )
}

export default Login;