import React from 'react'
import './Header.css'
import mySvg from './logo.svg'


const Header = () => {
	return (
		<div className="header-wrapper">
      <img src={mySvg} />
			<div className="menu-bar-wrapper">
				<a href="#">start a new group</a>
				<a href="#">Login</a>
				<a href="#">register</a>
			</div>
		</div>
	)
}

export default Header;
