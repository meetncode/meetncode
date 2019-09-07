import React from 'react'
import GroupEvent from './GroupEvent'

export default function PastEvents(props) {
	return (
		<div>
			{
				props.past ?
				(
					<React.Fragment>
					<div className="group-event-header">
						<h4>Past events ({props.past.length >= 1 ? `${props.past.length}+` : `${props.past.length}`})</h4>
						<a href="#">See all</a>
					</div>
					<GroupEvent className="group-event" event={props.past[0]}/>
					</React.Fragment>
				) :
				(
					<div>
						<h4>No Past Events</h4>
					</div>
				)
			}
		</div>
	)
}
