import React from 'react'
import GroupEvent from './GroupEvent'

export default function PastEvents() {
	return (
		<div>
			<div className="past-events-header">
				<h4>Past events (5+)</h4>
				<a href="#">See all</a>
			</div>
			<GroupEvent />
		</div>
	)
}
