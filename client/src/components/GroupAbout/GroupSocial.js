import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))
export default function GroupSocial() {
	const classes = useStyles()
	return (
		<div>
			<h5>Find us also at</h5>
			<div className='social-links'>
				<Button variant='outlined' className={classes.button}>
				<i className='fab fa-facebook-square'></i> <span style={{ marginLeft: '10px' }}>Default</span>
				</Button>
				<Button variant='outlined' className={classes.button}>
					Default
				</Button>
			</div>
		</div>
	)
}
