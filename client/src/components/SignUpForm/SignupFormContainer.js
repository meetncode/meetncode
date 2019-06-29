import React, { Component } from 'react';
import {  Form, Field, ErrorMessage } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { withStyles } from '@material-ui/styles';

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

class SignupFormContainer extends Component {
	render() {
        const { classes } = this.props;
        return (
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
		);
	}
}
export default withStyles(styles)(SignupFormContainer);