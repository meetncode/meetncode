import React from 'react'
import Background from './background.jpg'
import './Banner.css'

const Banner = () => {
	return (
		<div style={styles.banner}>
			<h2 className="headline">Lorem Ipsum Dolor Sit Amet</h2>
			<p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			<div className="call-to-action">
				<a href="#" className="btn btn-white">Get Started</a>
				<a href="#" className="btn btn-transparent">Join MeetNCode</a>
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
