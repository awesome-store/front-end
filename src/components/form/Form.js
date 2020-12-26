import React from 'react';
import { Link } from 'react-router-dom';

function Form({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values
}) {
    return (
        <>
            <form onSubmit={handleSubmit} autocomplete="off">
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
            </form>
        </>
    )
}

export default Form;