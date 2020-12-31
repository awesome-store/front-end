import React from 'react';
import { withFormik } from 'formik';
import {  connect } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import LoginForm from './LoginForm';
// import Debug from './Debug';
import { withRouter } from 'react-router';
import { authSetToken, setLoginErrorMessage, setLoginLoader } from '../../redux/reducer';

function MyForm({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
}) {
    return (
        <>
            <LoginForm
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                touched={touched}
                values={values}
            />
            {/* <Debug values={values} errors={errors} touched={touched} /> */}
        </>
    )
}

const LoginFormik = withFormik({
    mapPropsToValues: ({ initialValues }) => {
        return {
            ...initialValues
        };
    },

    validate: (values, { validate }) =>
        Object.keys(values).reduce((errors, field) => {
            const error = validate[field](values[field]);
            return {
                ...errors,
                ...(error && { [field]: error })
            };
        }, {}),

    handleSubmit: (values, { setSubmitting, props: { history, dispatch, token } }) => {
        // alert(JSON.stringify(values, null, 2));

        setSubmitting(false);
        // alert('lol');
        // e.preventDefault();
        console.log(values);
        // let testValues = {
        //     name: 'test',
        //     email: 'test',
        //     password: 'test'
        // }
        // values = {...values, ...{["name"]: "test"}};
        values.name = "test";
        axiosWithAuth(false)
            .post('/login', values)
            .then(res => {
                dispatch(setLoginLoader(true));
                // console.log(res);
                const token = res.data.token;
                const userData = {
                    type: "website",
                    message: res.data.message
                }
                dispatch(authSetToken(token, userData));
                dispatch(setLoginLoader(false));
                // console.log('token =>>>', localStorage.getItem('token'));
                if (token) {
                    // console.log("should redirect now");
                    history.push('/account');
                }
            })
            .catch(err => {
                console.log(err);
                // console.log(err.response);
                if (err.response.status === 401) {
                    dispatch(setLoginErrorMessage("Wrong email or password"));
                }
            });
    },

    validateOnChange: false,

    displayName: "LoginFormik"
})(MyForm);

export default connect(({user, token}) => ({user, token}), dispatch => ({dispatch}))(withRouter(LoginFormik));