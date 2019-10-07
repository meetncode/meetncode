import React from 'react'
import GroupEvent from './GroupEvent'
import PropTypes from 'prop-types'

export default function PastEvents(props) {
	return (
		<div>
			<div className="group-event-header">
				<h4>Past events ({props.past.length >= 1 ? `${props.past.length}+` : `${props.past.length}`})</h4>
				<a href="#">See all</a>
			</div>
			<GroupEvent className="group-event" event={props.past[0]}/>
		</div>
	)
}

PastEvents.PropTypes = {
	past: PropTypes.object.isRequired
}
