import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values
}) {
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <input
                type="text"
                className="login__input input"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                required
            />
            {
                (touched.name && errors.name) ?
                (<p className="login__errors">
                    {touched.name && errors.name}
                </p>) : null
            }
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
                </p>) : null
            }
            <div className="login__terms-container">
                <input className="" type="checkbox"/>
                <p>I agree with <Link className="link" to="/">Terms & Conditions</Link></p>
            </div>
            <div className="login__log-in-btn btn pointer">
                <p>Sign up</p>
            </div>
        </form>
    )
}

export default SignupForm;