import React from 'react'
import './Header.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import mySvg from './logo.svg'

const checkIfUserLoggedIn = () => {
	let token = localStorage.getItem('token')
   if(token !== null || token !== '') {
    return true
   }
}

const handleLogOut = (history) => {
	localStorage.removeItem('token')
	checkIfUserLoggedIn()
}

const Header = ({history}) => {
	return (
		<div className='header-wrapper'>
			<img src={mySvg} style={{ 'maxWidth': 40, 'margin': '1em' }}/>
				<div className='menu-bar-wrapper'>
					{
						checkIfUserLoggedIn() ?
						(
							<React.Fragment>
								<Link to='/create-group'>Start a new group</Link>
								<Link to='/' onClick={() => handleLogOut(history)}>Log out</Link>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Link to='/create-group'>Start a new group</Link>
								<Link to='/login'>Login</Link>
								<Link to='/signup'>Register</Link>
							</React.Fragment>
						 )
					}
				</div>
		</div>
	)
}

export default withRouter(Header)
