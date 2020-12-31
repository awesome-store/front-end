import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import fb from '../../img/icons/fb-white.svg';
import { useDispatch, useSelector } from 'react-redux';
import { authSetToken } from '../../redux/reducer';

const LoginForm = ({
    props,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values
}) => {
    const dispatch = useDispatch();
    const loginLoader = useSelector(state => state.loginLoader);
    // const {dispatch, history} = props;

    const loginErrors = useSelector(state => state.loginErrorMessage);

    // const [credentials, setCredentials] = useState({
    //     name: 'test',
    //     email: '',
    //     password: ''
    // });

    // const [errorMessage, setErrorMessage] = useState('');

    const componentClicked = () => {
        console.log("clicked");
    }

    const responseFacebook = (response) => {
        console.log(response);
        if (response.accessToken) {
            const token = response.accessToken;
            // const userData = {...response, ...{["type"]: "facebook"}};
            const userData = response;
            userData.type = "facebook";
            console.log("token ", token);
            console.log("userData ", userData);
            dispatch(authSetToken(token, userData));
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
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
            <div className="login__or-container">
                <div className="login__horizontal-line"></div>
                <p>OR</p>
                <div className="login__horizontal-line"></div>
            </div>
            <input
                type="text"
                className="login__input input"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                required
            />
            {
                (touched.email && errors.email) ?
                (<p className="login__errors">
                    {touched.email && errors.email}
                </p>) : null
            }
            <input
                type="password"
                className="login__input input"
                id="password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                required
            />
            {
                (touched.password && errors.password) ?
                (<p className="login__errors">
                    {touched.password && errors.password}
                </p>)
                : null
            }
            <Link to="/" className="login__restore-link link">
                <p>Restore password</p>
            </Link>
            <button type="submit" className="login__log-in-btn btn btn--yellow pointer">
                Log In
            </button>
            <p className="login__missing-credentials">{loginErrors}</p>
            {(loginLoader) ? (
                <Loader/>
            ) : null}
        </form>
    )
}

export default LoginForm;