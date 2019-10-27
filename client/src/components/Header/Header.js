import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import mySvg from './logo.svg';

import './Header.css';
import { logout } from '../../actions/isAuthenticated';

const Header = ({ isAuthenticated, dispatch }) => {
  const history = useHistory();
  return (
    <div className='header-wrapper'>
      <img src={mySvg} style={{ maxWidth: 40, margin: '1em' }} />
      <div className='menu-bar-wrapper'>
        <Link to='/create-group'>start a new group</Link>
        {isAuthenticated ? (
          <a
            onClick={() => {
              dispatch(logout());
              history.push('/');
            }}
          >
            Logout
          </a>
        ) : (
          <React.Fragment>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>register</Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(Header);
