import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Formik, Field } from 'formik'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import * as yup from 'yup'
import { Mutation } from 'react-apollo'

import CustomTextField from '../FormikComponents/CustomTextField'
import { login } from '../../actions/isAuthenticated'
import Button from '../Button'

import SINUP_UP_USER from './signupUserMutation.graphql'

const styles = {
  container: {
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
    minWidth: '18rem',
    marginBottom: '0.4rem'
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
}

const SignupValidation = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .label('First name'),
  lastName: yup
    .string()
    .required()
    .label('Last name'),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required()
    .label(' Password'),
  confirmPassword: yup
    .string()
    .min(8)
    .max(16)
    .required()
    .test('passwords-match', 'Passwords should match', function(value) {
      return this.parent.password === value
    })
    .label('This'),
  email: yup
    .string()
    .required()
    .label('Email')
})
class SignupFormContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      location: {}
    }
  }
  componentDidMount() {
    fetch('http://api.ipify.org/?format=json')
      .then((res) => { 
        return res.json()
      })
      .then((data) => {   
        return fetch(`http://api.ipstack.com/${data.ip}?access_key=${process.env.IP_STACK_KEY}`)
      })
      .then((res) => { 
        return res.json()
      })
      .then((data) => {
        const location = {
          locationCoordinates :  { 
            type: 'Point', coordinates: [ data.latitude, data.longitude]
          },
          city: data.city,
          country: data.country_name
        }
        this.setState({
          location
        })
      })
      .catch((error) => { 
        console.log('error', error) 
      })
  }
  render() {
    const { classes, history, dispatch } = this.props
    return (
      <Mutation mutation={SINUP_UP_USER}>
        {(signupUser, { loading }) => (
          <div className={classes.container}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                password: '',
                confirmPassword: '',
                email: '',
                location: this.state.location
              }}
              onSubmit={async values => {
                const response = await signupUser({
                  variables: {...values, location: this.state.location}
                })
                if (response) {
                  dispatch(login(response.data.loginUser.token))
                  history.push(`/members/${response.data.signupUser.userId}`)
                }
              }}
              validationSchema={SignupValidation}
            >
              {({ errors }) => (
                <Form className={classes.form}>
                  <Field
                    component={CustomTextField}
                    className={classes.field}
                    name='firstName'
                    placeholder='First Name'
                  />
                  <Field
                    component={CustomTextField}
                    className={classes.field}
                    name='lastName'
                    placeholder='Last Name'
                  />
                  <Field
                    component={CustomTextField}
                    className={classes.field}
                    name='email'
                    placeholder='Email'
                  />
                  <Field
                    component={CustomTextField}
                    className={classes.field}
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <Field
                    component={CustomTextField}
                    className={classes.field}
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirmed Password'
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.button}
                    loading={loading}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Mutation>
    )
  }
}

export default compose(
  withRouter,
  connect(),
  withStyles(styles)
)(SignupFormContainer)
