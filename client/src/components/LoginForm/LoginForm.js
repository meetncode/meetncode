import React from 'react';
import * as yup from "yup";
import { withFormik } from "formik";
import LoginFormContainer from "./LoginFormContainer";
import './LoginForm.css';
//import { gql } from 'apollo-server';

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
    .min(8)
    .max(16)
    .required(),

})

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    enableReinitialize: true,
    // Handles our submission
    handleSubmit: (values, { setSubmitting }) => {
        // const GET_GROUP = gql`
        // {
        //   getGroup(id: "5d052ee1c5ac64718e2c2803"){
        //     name,
        //         description,
        //     events{
        //             host {
        //         email
        //       },
        //       location {
        //           address
        //       },
        //       attendees {
        //         email,
        //         firstName
        //       },
        //             name
        //     }
        //   }
        // }`;
        // This is where you could send the submitted values to the backend
        console.log("Submitted Email:", values.email)
        console.log("Submitted Password:", values.password)
        // Simulates the delay of a real request
        setTimeout(() => setSubmitting(false), 3 * 1000)
    },
    validationSchema: LoginValidation,
})(LoginWrapper)