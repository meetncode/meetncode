import React from 'react'
import GroupEvent from './GroupEvent'

export default function PastEvents(props) {
	return (
		<div>
			<div className="group-event-header">
				<h4>Past events ({props.past.length >= 1 ? `${props.past.length}+` : `${props.past.length}`})</h4>
				<a href="#">See all</a>
			</div>
			{
				props.past.map((event, index) => {
					return <GroupEvent className="group-event" key={index} event={event}/>
				})
				
			}
		</div>
	)
}
