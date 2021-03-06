import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import mySvg from './logo.svg'

import './Header.css'
import { logout } from '../../actions/isAuthenticated'

const Header = ({ isAuthenticated, dispatch }) => {
  return (
    <div className='header-wrapper'>
      <img src={mySvg} style={{ maxWidth: 40, margin: '1em' }} />
      <div className='menu-bar-wrapper'>
        <Link to='/create-group'>start a new group</Link>
        {isAuthenticated ? (
          <a
            onClick={() => {
              dispatch(logout())
              this.props.history.push('/')
            }}
          >
            Logout
          </a>
        ) : (
          <React.Fragment>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Register</Link>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(Header)
