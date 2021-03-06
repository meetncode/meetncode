import React from 'react'
import GroupEvent from './GroupEvent'
import PropTypes from 'prop-types'

export default function UpcomingEvents(props) {
	const upcoming = props.upcoming.slice(0, 3)
	return (
		<div>{
			(props.upcoming) ?
			(
				<React.Fragment>
					<div className="group-event-header">
						<h4>Upcoming events ({props.upcoming.length >= 1 ? `${props.upcoming.length}+` : `${props.upcoming.length}`})</h4>
						<a href="#">See all</a>
					</div>
					{
						upcoming.map((event, index) => {
							return <GroupEvent className="group-event" key={index} event={event}/>
						})	
					}
				</React.Fragment>
			):(
				<div>
					<h4>No upcoming events</h4>
				</div>
			)
		}
		</div>
	)
}

UpcomingEvents.propTypes = {
	upcoming: PropTypes.object.isRequired
}
