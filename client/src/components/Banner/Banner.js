import React from 'react'
import Background from './background.jpg'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
	return (
		<div style={styles.banner}>
			<h2 className="headline">Lorem Ipsum Dolor Sit Amet</h2>
			<p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			<div className="call-to-action">
				<Link to="/" className="btn btn-white">Get Started</Link>
				<Link to="/" className="btn btn-transparent">Join MeetNCode</Link>
			</div>
		</div>
	)
}

const styles = {
	banner: {
		'background': `url(${Background}) no-repeat`,
		'height': 'calc(100vh - 32em)',
		'backgroundPosition': 'center',
		'backgroundSize': 'cover',
		'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
	}
}

export default Banner;
