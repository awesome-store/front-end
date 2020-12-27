import React from 'react';
import { Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Form from './Form';
import Debug from './Debug';

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

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
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
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.message);
                console.log('token =>>>', localStorage.getItem('token'));
                if (localStorage.getItem('token')) {
                    console.log("should redirect now");
                    <Redirect to="/account"/>
                    // props.history.push('/account');
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

export default FormFormik;