import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import componentOrRender from './componentOrRender'

const AuthenticatedRoute = ({
  component: Component,
  render,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return <Redirect to='/login' />
        }

        return componentOrRender(props, Component, render)
      }}
    />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(AuthenticatedRoute)
