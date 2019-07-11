import React from 'react';
import * as yup from "yup";
import { withFormik } from "formik";
import LoginFormContainer from "./LoginFormContainer";
import './LoginForm.css';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const LoginWrapper = LoginFormContainer
const initialValues = {
  email: '',
  password: ''
}
const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(5)
    .max(16)
    .required(),

})

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    enableReinitialize: true,
    // Handles our submission
    handleSubmit: (values, { setSubmitting }) => {
      console.log("Submitted Email:", values.email)
      console.log("Submitted Password:", values.password)
      console.log(setSubmitting)
        // This is where you could send the submitted values to the backend
        const LOGIN_TOKEN = gql`
            {
                loginUser(
                  email: ${values.email}
                  password: ${values.password}
                ){token}
              }`;
              <Query query={LOGIN_TOKEN}>
              {({ data, loading, error }) => {
                if (loading) return <Loading />;
                if (error) return <p>ERROR</p>;
                  console.log(data);
                  localStorage.setItem('token', token);
              }}
            </Query>
        // Simulates the delay of a real request
        setTimeout(() => setSubmitting(false), 3 * 1000)
    },
    
    validationSchema: LoginValidation,
})(LoginWrapper)