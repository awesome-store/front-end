import React, { useState } from 'react';
import fb from '../../img/icons/fb-white.svg';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function Login(props) {
    const [credentials, setCredentials] = useState({
        name: 'test',
        email: '',
        password: ''
    });

    const componentClicked = () => {
        console.log("clicked");
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        // console.log(this.state.email);
        // console.log(this.state.password);
    };

    const login = e => {
        // alert('lol')
        e.preventDefault();
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                console.log('token =>>>', localStorage.getItem('token'));
                props.history.push('/account');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__heading">Login</h1>
                <FacebookLogin
                    appId="791454958258166"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                    render={renderProps => (
                        <div onClick={renderProps.onClick} className="login__facebook-btn pointer">
                            <img className="login__facebook-img" src={fb} alt="facebook"/>
                            <p>Log in with Facebook</p>                    
                        </div>
                    )}
                />
                {/* <div className="login__facebook-btn pointer">
                    <img className="login__facebook-img" src={fb} alt="facebook"/>
                    <p>Log in with Facebook</p>                    
                </div> */}
                <div className="login__or-container">
                    <div className="login__horizontal-line"></div>
                    <p>OR</p>
                    <div className="login__horizontal-line"></div>
                </div>
                <input className="login__input input" type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleChange}/>
                <input className="login__input input" type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange}/>
                <Link className="login__restore-link link">
                    <p>Restore password</p>
                </Link>
                <div className="login__log-in-btn btn btn--yellow pointer" onClick={ login }>
                    <p>Log in</p>
                </div>
                <p className="login__missing-credentials">Enter email and password</p>
            </div>
        </div>
    ) 
}

export default Login;