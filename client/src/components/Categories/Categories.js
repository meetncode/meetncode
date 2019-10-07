import React from 'react'
import Category from './Category'
import './Categories.css'

// TODO:: get from backend
const Categories = () => {
	return (
		<div className="category-container">
			<div className="category-wrapper">
			<h1>Categories</h1>
			<ul className="categories">
				<Category></Category>
				<Category></Category>
				<Category></Category>
			</ul>
			</div>
		</div>
	)
}

export default Categories;
