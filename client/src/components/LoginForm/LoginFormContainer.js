import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import * as yup from 'yup'
import { Form, Formik, Field } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import { Mutation } from 'react-apollo'

import LOGIN_USER_MUTATION from './loginUserMutation.graphql'

import CustomTextField from '../FormikComponents/CustomTextField'
import Button from '../Button'
import CustomAlert from '../CustomAlert'
import { login } from '../../actions/isAuthenticated'

const styles = theme => ({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: 300,
    minHeight: 300,
    margin: '1rem',
    textAlign: 'center'
  },
  field: {
    marginBottom: '0.5rem'
  },
  button: {
    background: 'linear-gradient(to left, #f27954, #a154f2)',
    padding: '0.5em 3em',
    margin: '1em',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    color: '#fff',
    cursor: 'pointer'
  }
})

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .max(16)
    .required()
})
const LoginFormContainer = ({ classes, history, dispatch }) => {
  const [error, setError] = useState({
    status: false,
    message: ''
  })

  return (
    <Mutation mutation={LOGIN_USER_MUTATION}>
      {(loginUser, { loading, data }) => (
        <div className={classes.formContainer}>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={async values => {
              const response = await loginUser({
                variables: { email: values.email, password: values.password }
              }).catch(e => {
                setError({
                  status: true,
                  message: e.graphQLErrors[0].message
                })
              })

              if (response) {
                dispatch(login(response.data.loginUser.token))
                history.push(`/members/${response.data.loginUser.userId}`)
              }
            }}
            validationSchema={LoginValidation}
          >
            {() => (
              <Form className={classes.form}>
                <Field
                  type='text'
                  className={classes.field}
                  component={CustomTextField}
                  name='email'
                  placeholder='Email'
                  fullWidth
                />
                <Field
                  type='password'
                  className={classes.field}
                  name='password'
                  component={CustomTextField}
                  placeholder='Password'
                  fullWidth
                />
                <Button
                  type='submit'
                  variant='contained'
                  className={classes.button}
                  loading={loading}
                >
                  Submit
                </Button>
                {error.status && (
                  <CustomAlert
                    isOpen
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    autoHideDuration={5000}
                    type='error'
                    message={error.message}
                    onClose={() => setError({ status: false, message: '' })}
                  />
                )}
              </Form>
            )}
          </Formik>
        </div>
      )}
    </Mutation>
  )
}

export default compose(
  withRouter,
  connect(),
  withStyles(styles)
)(LoginFormContainer)
