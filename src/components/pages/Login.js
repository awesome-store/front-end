import React from 'react';
import fb from '../../img/icons/fb-white.svg';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import LoginButton from '../LoginButton';

class Login extends React.Component {
    state = {
        credentials: {
            name: 'test',
            email: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.email);
        // console.log(this.state.password);
    };

    login = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                console.log('token =>>>', localStorage.getItem('token'));
                this.props.history.push('/account');
            })
            .catch(err => console.log(err));
    }

    render() {
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
                    <input className="login__input input" type="text" name="email" placeholder="Email" value={this.state.credentials.email} onChange={this.handleChange}/>
                    <input className="login__input input" type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange}/>
                    <Link className="login__restore-link link">
                        <p>Restore password</p>
                    </Link>
                    <LoginButton />
                </div>
            </div>
        )
    }
}

export default Login;