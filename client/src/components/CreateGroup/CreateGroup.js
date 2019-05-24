import React from 'react'
import './CreateGroup.css'
import image from './background.jpg'

const CreateGroup = () => {
	return (
		<div className="create-group">
			<div className="create-group-wrapper">
				<div className="create-group-info">
					<h3>Take the leap, without the risk</h3>
					<p>Teach your craft, grow a following, or start a movement—without quitting your day job. Use Meetup to reach new audiences and organize local events that will help you take your passion to the next level.</p>
					<button className="btn">Start a group</button>
					<button className="btn">Learn more</button>
				</div>
				<div className="create-group-image">
					<img src={image} alt=""/>
				</div>
			</div>
		</div>
	)
}

export default CreateGroup;
