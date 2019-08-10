import React, { Component } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { FormikTextField } from "formik-material-fields";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import LOGIN_USER_MUTATION from "./loginUserMutation.graphql";

const styles = theme => ({
  container: {
    width: 300,
    minHeight: 300,
    margin: "0 auto",
    textAlign: "center"
  },
  button: {
    background: "linear-gradient(to left, #f27954, #a154f2)",
    padding: "0.5em 3em",
    margin: "1em",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    color: "#fff",
    cursor: "pointer"
  }
});

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .max(16)
    .required()
});
class LoginFormContainer extends React.Component {
  render() {
    const { classes } = this.props;
    // async ()
    return (
      <Mutation mutation={LOGIN_USER_MUTATION}>
        {loginUser => (
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const response = await loginUser({
                variables: { email: values.email, password: values.password }
              });
              // This is where you could send the submitted values to the backend
              localStorage.setItem("token", response.data.loginUser.token);

            }}
            validationSchema={LoginValidation}
          >
            {() => (
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
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.button}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}
export default withStyles(styles)(LoginFormContainer);
