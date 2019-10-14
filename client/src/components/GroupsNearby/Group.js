import React from 'react'
import code from './code.jpg'

// TODO: need to get from backend
const Group = () => {
	return (
		<div className='group'>
			<div className='group-profile'>
				<img src={code} alt=''/>
			</div>
			<div className='group-details'>
				<p className='category'><strong>tech</strong></p>
				<p className='group-name'><strong>Tech Grind</strong></p>
				<p className='members'>880 Members</p>
			</div>
		</div>
	)
}

export default Group
