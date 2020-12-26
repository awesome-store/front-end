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
                <label htmlFor="first-name-input">
                    First name *
                    <input
                        type="text"
                        className="form-control"
                        id="first-name-input"
                        placeholder="Enter first name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="firstName"
                        required
                    />
                    <br/>
                    {touched.firstName && errors.firstName}
                </label>
                <label htmlFor="last-name-input">
                    Last name *
                    <input
                        type="text"
                        className="form-control"
                        id="last-name-input"
                        placeholder="Enter last name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="lastName"
                        required
                    />
                    <br/>
                    {touched.lastName && errors.lastName}
                    <br/>
                    <br/>
                </label>
                <label htmlFor="email">
                    Email address *
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        required
                    />
                    <br/>
                    {touched.email && errors.email}
                    <br/>
                    <br/>
                </label>
                <label htmlFor="age">
                    Age *
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        placeholder="Enter age"
                        value={values.age || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="age"
                        min="0"
                        required
                    />
                    <br/>
                    {touched.age && errors.age}
                    <br/>
                    <br/>
                </label>
                <label htmlFor="password">
                    Password *
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={values.password || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        required
                    />
                    <br/>
                    {touched.password && errors.password}
                    <br/>
                    <br/>
                </label>
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