import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login__log-in-btn btn btn--yellow pointer" onClick= {() => loginWithRedirect() }>
            <p>Log in</p>
        </div>
    )
};

export default LoginButton;