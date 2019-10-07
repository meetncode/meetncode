import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

 const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '1em',
  }
}))

const Banner = () => {
	const classes = useStyles()
	return (
		<div className='banner'>
			<h2 className='headline'>Lorem Ipsum Dolor Sit Amet</h2>
			<p className='tagline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			<div className='call-to-action'>
				<Link to='/' className='btn-link'>
					<Button variant='contained' color='primary' className={classes.button}>Get Started</Button>
				</Link>
				<Link to='/' className='btn-link'>
					<Button variant='contained' color='primary' className={classes.button}>Join MeetNCode</Button>
				</Link>
			</div>
		</div>
	)
}

export default Banner
