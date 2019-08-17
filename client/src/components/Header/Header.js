import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import mySvg from './logo.svg'

const Header = () => {
	return (
		<div className="header-wrapper">
			<img src={mySvg} style={{ 'maxWidth': 40, 'margin': '1em' }}/>
			<div className="menu-bar-wrapper">
				<Link to="/">start a new group</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">register</Link>
			</div>
		</div>
	)
}

export default Header;
