import React from 'react'
import { Formik } from 'formik';
import './UserProfile.css'
import { Link } from 'react-router-dom';

import GET_USER_BIO from './queryGetUserBio.graphql';
import GET_USER_PREFS from './queryGetUserPrefs.graphql';

const EditUserProfileContainer = () => {
	// const { image } = this.props
	const image = 'https://via.placeholder.com/180'
	return (
		<div className="edit-profile-container">
			{
				//TODO:: get initial values from backend
			}
			<div className="bread-crum">
				<Link to ={`/members/${id}/`}>Back</Link>
				<h4>Edit your profile</h4>
			</div>
			<Formik
				initialValues={{ name: 'jared', email: 'example@email.com', membership: 'Aug 9 2019', image, interest: 'Frontend, ReactJS, Css, UI Frameworks, Webpack', linkedin: '/', facebook: '/', twitter: '/'}}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
						console.log('submitting')
					}, 1000);
				}}
				render={props => (
					<form onSubmit={props.handleSubmit} class="edit-profile-form">
						{
							image ?
							(
								<img src={image} alt=""/>
							)
						:
						(
							<input
								type="file"
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.image}
								name="image"
							/>
						)
					}
						<input
							type="text"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.name}
							name="name"
						/>
						<input
							type="email"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.email}
							name="email"
							disabled
						/>
						<input
							type="text"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.membership}
							name="membership"
							disabled
						/>
						
					<textarea 
						name="interest" 
						id="interest" 
						cols="30" 
						rows="5" 
						onChange={props.handleChange}
						onBlur={props.handleBlur} 
						value={props.values.interest}
					/>
					<input
						type="url"
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						value={props.values.facebook}
						name="facebook"
					/>
					<input
						type="url"
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						value={props.values.linkedin}
						name="linkedin"
					/>
					<input
						type="url"
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						value={props.values.twitter}
						name="twitter"
					/>

						{props.errors.name && <div id="feedback">{props.errors.name}</div>}
						<button type="submit">Submit</button>
					</form>
				)}
			/>
		</div>
	)
}

export default EditUserProfileContainer;
