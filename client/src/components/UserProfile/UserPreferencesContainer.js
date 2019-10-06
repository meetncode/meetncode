import React from 'react'
import UserPreferences from './UserPreferences'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const useStyles = makeStyles(theme => ({
  button: {
		marginTop: '1em',
		display: 'block',
    maxwidth: '100%',
		margin: '0 auto',
		marginBottom: '1em'
  }
}))

const UserPreferencesContainer = (props) => {
	const classes = useStyles()
	const { categories, id, picture } = props.userPrefs

	return (
		<div className="user-preferences">
			<Link to ={`/edit/members/${id}/`} className="edit-profile"><Button variant="outlined" color="primary" className={classes.button}>Edit Profile</Button></Link>
			<div className="profile">
				{
					picture ?
					<img src={picture} alt="" className="profile-picture"/>
					:
					<img src="https://via.placeholder.com/180" alt=""/>
				}
			</div>
			<UserPreferences categories={categories}/>
		</div>
	)
}

UserPreferencesContainer.propTypes = {
  userPrefs: PropTypes.object
}

export default UserPreferencesContainer
