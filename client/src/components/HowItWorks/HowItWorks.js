import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
	return (
		<div className="how-container">
			<div className="how-wrapper">
				<h1>HowItWorks</h1>
				<div className="steps">
				<div className="step-one">
					<i></i>
					<div className="step-one-details">
						<h4>Discover groups</h4>
						<p>See who’s hosting local events for all the things you love</p>
						<a href="#" className="cta">Join MeetNCode</a>
					</div>
				</div>
				<div className="step-two">
					<i></i>
					<div className="step-two-details">
						<h4>Start a group</h4>
						<p>Create your own Meetup group, and draw from a community of millions.</p>
						<a href="#" className="cta">Get Started</a>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default HowItWorks;
