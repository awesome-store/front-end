import React, { useEffect } from 'react';
// import fb from '../../img/icons/fb-white.svg';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import LoginFormik from '../form/LoginFormik';

function Login(props) {
    useEffect(() => {
        const token = localStorage.getItem('token');
<<<<<<< HEAD

        if (token) {
            props.history.push("/account");
=======
        if (token) {
            props.history.push('/account');
>>>>>>> master
        }
    })
    // const [credentials, setCredentials] = useState({
        // name: 'test',
        // email: '',
        // password: ''
    // });

    // const [errorMessage, setErrorMessage] = useState('');

    // const componentClicked = () => {
    //     console.log("clicked");
    // }

    // const responseFacebook = (response) => {
    //     console.log(response);
    // }

    // const handleChange = e => {
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value
    //     });
    //     // console.log(this.state.email);
    //     // console.log(this.state.password);
    // };

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

    // const login = e => {
    //     // alert('lol')
    //     e.preventDefault();
    //     axiosWithAuth(false)
    //         .post('/login', credentials)
    //         .then(res => {
    //             console.log(res);
    //             localStorage.setItem('token', res.data.token);
    //             localStorage.setItem('user', res.data.message);
    //             console.log('token =>>>', localStorage.getItem('token'));
    //             if (localStorage.getItem('token')) {
    //                 props.history.push('/account');
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             setErrorMessage("Wrong credentials");
    //         });
    // }

    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__heading">Login</h1>
                {/* <FacebookLogin
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
                /> */}
                {/* <div className="login__facebook-btn pointer">
                    <img className="login__facebook-img" src={fb} alt="facebook"/>
                    <p>Log in with Facebook</p>
                </div> */}
                {/* <div className="login__or-container">
                    <div className="login__horizontal-line"></div>
                    <p>OR</p>
                    <div className="login__horizontal-line"></div>
                </div> */}
                {/* <input className="login__input input" type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleChange}/>
                <p className="login__missing-credentials">{errorMessage}</p>
                <input className="login__input input" type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange}/>
                <p className="login__missing-credentials">{errorMessage}</p> */}
                {/* <div className="login__log-in-btn btn btn--yellow pointer" onClick={ login }>
                    <p>Log in</p>
                </div> */}
                <LoginFormik validate={validate} initialValues={initialValues}/>
                {/* <p className="login__missing-credentials">{errorMessage}</p> */}
            </div>
        </div>
    )
}

export default Login;