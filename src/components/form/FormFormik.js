import React from 'react';
// import { Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Form from './Form';
import Debug from './Debug';
import { withRouter } from 'react-router';
import { authSetToken } from '../../redux/reducer';

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
            {/* <h2>Form</h2>  */}
            <Form
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                touched={touched}
                values={values}
            />
            <Debug values={values} errors={errors} touched={touched} />
        </>
    )
}

const FormFormik = withFormik({
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
        let testValues = {
            name: 'test',
            email: 'test',
            password: 'test'
        }
        axiosWithAuth(false)
            .post('/login', testValues)
            .then(res => {
                console.log(res);
                const token = res.data.token;
                dispatch(authSetToken(token, res.data.message));
                console.log('token =>>>', localStorage.getItem('token'));
                if (token) {
                    console.log("should redirect now");
                    // <Redirect to="/account"/>
                    history.push('/account');
                }
            })
            .catch(err => {
                console.log(err);
                // setErrorMessage("Wrong credentials");
            });
    },

    validateOnChange: false,

    displayName: "FormFormik"
})(MyForm);

export default connect(({user, token}) => ({user, token}), dispatch => ({dispatch}))(withRouter(FormFormik));