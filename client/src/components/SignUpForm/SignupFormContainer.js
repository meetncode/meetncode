import React, { Component } from 'react';
import {  Form, Formik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { withStyles } from '@material-ui/core/styles';
import * as yup from "yup"
import { Mutation } from 'react-apollo'
import SINUP_UP_USER from './signupUserMutation.graphql';

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
  
  })
class SignupFormContainer extends React.Component {
	render() {
      const { classes } = this.props;
      return (
        <Mutation mutation={SINUP_UP_USER}>
        { signupUser => 
          <Formik  
            initialValues = {{
              firstName: '',
              lastName: '',
              password: '',
              confirmPassword: '',
              email: ''
              }}

            onSubmit ={async (values, { setSubmitting }) => {
              //console.log(values);
              const response = await signupUser({
                variables: {email:values.email,password:values.password,firstName:values.firstName,lastName:values.lastName}
              })
              console.log(response)
                // This is where you could send the submitted values to the backend
              localStorage.setItem("token", response.data.signupUser.token); 
        
                // Simulates the delay of a real request
                setTimeout(() => setSubmitting(false), 3 * 1000)
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
                  <button type="submit" className={classes.button} > Sign Up </button>
                </Form>
              )}    
          </Formik>
        }
        </Mutation>
      )
    }
  }
export default withStyles(styles)(SignupFormContainer);