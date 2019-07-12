import React, { Component } from "react";
import * as yup from "yup";
import {  Form, Field, ErrorMessage, Formik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { withStyles } from '@material-ui/core/styles';

import { gql , graphql} from 'apollo-boost'
import { Query } from 'react-apollo'

const styles= theme => ({
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
// const LOGIN_TOKEN = gql`
// {
//     loginUser(
//       email: ${values.email}
//       password: ${values.password}
//     ){token}
//   }`;
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

});
class LoginFormContainer extends React.Component {
    render() {
        const { classes } = this.props;
       // async ()
        return (
          <Formik
          initialValues = {{
            email: '',
            password: ''
          }}

          onSubmit ={(values, { setSubmitting }) => {
            console.log("Submitted Email:", values.email)
            console.log("Submitted Password:", values.password)
              // This is where you could send the submitted values to the backend
              
      
              // Simulates the delay of a real request
              setTimeout(() => setSubmitting(false), 3 * 1000)
          }}
          validationSchema = {LoginValidation}
          
          >
            {() =>(
              <Form className={classes.container}> 
                <FormikTextField 
                  type="text" 
                  name="email" 
                  placeholder="email"
                  fullWidth
                />
                <FormikTextField 
                  type="password" 
                  name="password" 
                  placeholder="Password"
                  fullWidth
                />
                <button type="submit" className={classes.button} > Submit </button>
              </Form>
            )}
            
          </Formik>
        )
        {/* // <Query query={LOGIN_TOKEN}>
        //   {({ data, loading, error }) => {
        //     if (loading) return <Loading />;
        //     if (error) return <p>ERROR</p>;
        //       console.log(data);
        //       localStorage.setItem('token', token);
        //   }}
        // </Query> */}
    }
}
export default withStyles(styles)(LoginFormContainer);