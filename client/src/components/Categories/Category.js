import React from 'react'
import PropTypes from 'prop-types'

const Category = (props) => {
	return (
		<li className='category'>
			<i className='fas fa-code-branch'></i>
			{/* <p>{props.category}</p> */}
			<p>ReactJs</p>
		</li>
	)
}

Category.propTypes = {
	category: PropTypes.string
}

export default Category
