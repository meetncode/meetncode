import React from 'react';
import * as yup from "yup";
import { withFormik } from "formik";
import SignupFormContainer from "./SignupFormContainer";
import './SignUpForm.css';

const SignupWrapper = SignupFormContainer
const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  email: '',
  agreeToTerms: false
}
const SignupValidation = yup.object().shape({
  firstName: yup
    .string()
    .required(),
  lastName: yup
    .string()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required(),
  confirmPassword: yup
    .string()
    .min(8)
    .max(16)
    .required()
    .test('passwords-match', 'Passwords must match ya fool', function(value) {
      return this.parent.password === value;
    }),
  email: yup
    .string()
    .required(),
  agreeToTerms: yup
    .boolean()
    .label('Terms')
    .test(
      'is-true',
      'Must agree to terms to continue',
      value => value === true
    ),

})

export default withFormik({
    mapPropsToValues: () => ({ firstName: '',lastName: '',password: '',confirmPassword: '',email: '',agreeToTerms: false }),
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
    validationSchema: SignupValidation,
})(SignupWrapper)