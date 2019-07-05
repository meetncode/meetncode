import React, { Component } from "react";
import {  Form, Field, ErrorMessage } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

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

class LoginFormContainer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Form className={classes.container}> 
                <FormikTextField 
                  type="text" 
                  name="email" 
                  placeholder="email"
                  fullWidth
                />
                <FormikTextField 
                  type="password" 
                  name="Password" 
                  placeholder="password"
                  fullWidth
                />
                <Button variant="contained" className={classes.button}>
                  Submit
                </Button>
            </Form>
        )
    }
}
export default withStyles(styles)(LoginFormContainer);