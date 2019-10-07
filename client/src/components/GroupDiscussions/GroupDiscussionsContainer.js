import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODD:: get from backend
export default class GroupDiscussionsContainer extends Component {
	render() {
		return (
			<div>
				{/* <h4>Discussions ({this.props.count})</h4> */}
				<h4>Discussions (12)</h4>
				<a href="#">See all</a>
			</div>
		)
	}
}

GroupDiscussionsContainer.PropTypes = {
	count: PropTypes.number
}
