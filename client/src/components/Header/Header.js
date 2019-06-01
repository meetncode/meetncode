import React from 'react'
import './Header.css'
import mySvg from './logo.svg'

console.log(mySvg);

const Header = () => {
	return (
		<div className="header-wrapper">
			<img src={mySvg} style={{ 'maxWidth': 40, 'margin': '1em' }}/>
			<div className="menu-bar-wrapper">
				<a href="#">start a new group</a>
				<a href="#">Login</a>
				<a href="#">register</a>
			</div>
		</div>
	)
}

export default Header;
