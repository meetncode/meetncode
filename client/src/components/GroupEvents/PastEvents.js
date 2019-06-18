import React from 'react'
import GroupEvent from './GroupEvent'

export default function PastEvents() {
	return (
		<div>
			<div className="group-event-header">
				<h4>Past events (211)</h4>
				<a href="#">See all</a>
			</div>
			<GroupEvent />
		</div>
	)
}
