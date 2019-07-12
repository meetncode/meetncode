import React, { Component } from 'react';
import {  Form, Field, ErrorMessage,Formik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { withStyles } from '@material-ui/core/styles';
import * as yup from "yup"

const styles = ({
    container: {
      width: 300,
      minHeight: 300,
      margin: '0 auto',
      textAlign: 'center',
    },
    button: {
      background: 'linear-gradient(to left, #f27954, #a154f2)',
      padding: '0.5em 3em',
      margin: '1em',
      borderRadius: '20px',
      border: 'none',
      outline: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
  });

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
class SignupFormContainer extends Component {
	render() {
        const { classes } = this.props;
        return (
            <Formik  initialValues = {{
                firstName: '',
                lastName: '',
                password: '',
                confirmPassword: '',
                email: '',
                agreeToTerms: false
                }}
                validationSchema = {SignupValidation}
            >
                {()=>(
                     <Form className={classes.container}> 
                        <FormikTextField 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name"
                        />
                        <FormikTextField 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name"
                        />
                        <FormikTextField 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                        />
                        <FormikTextField 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                        />
                        <FormikTextField 
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirmed Password"
                        />
                        <button type="submit" className={classes.button} > Submit </button>
                </Form>
                )}      
        </Formik>
		);
	}
}
export default withStyles(styles)(SignupFormContainer);