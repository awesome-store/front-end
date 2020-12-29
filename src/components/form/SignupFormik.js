import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';
import SignupForm from './SignupForm';
import Debug from './Debug';
import { withRouter } from 'react-router';
import { authSetToken } from '../../redux/reducer';

function MyFormTwo({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
}) {
    return (
        <>
            <SignupForm
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

const SignupFormik = withFormik({
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

    handleSubmit: (values, { setSubmitting, props: { history, dispatch } }) => {
        setSubmitting(false);
        console.log(values);
        // axiosWithAuth(false)
        //     .post('/login', values)
        //     .then(res => {
        //         console.log(res);
        //         const token = res.data.token;
        //          dispatch(authSetToken(token, res.data.message));
        //         console.log('token => ', localStorage.getItem('token'));
        //         if (token) {
        //             console.log("should redirect now");;
        //             history.push('/account');
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    },

    validateOnChange: false,

    displayName: "SignupFormik"
})(MyFormTwo);

export default connect(({user, token}) => ({user, token}), dispatch => ({dispatch}))(withRouter(SignupFormik));