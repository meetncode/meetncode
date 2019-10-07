import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const useStyles = {
  card: {
    width: 600,
    marginBottom: 20
  }
}


export default function GroupEvent(props) {
  const formattedDate = (jsDate) => {return dayjs(Number(jsDate)).format('MMMM D YYYY, h:mm a')}

  return (
    <Card style={useStyles.card}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
        {/* Thu, July 31, 6:30 PM */}
        {formattedDate(props.event.date)}
        </Typography>
        <Typography variant='h5' component='h2'>
          {props.event.name}
        </Typography>
        <Typography color='textSecondary'>
         <i className='fas fa-map-marker-alt'></i>
          <span style={{ marginLeft: '10px' }}>Cat Cafe</span>
        </Typography>
        <Typography variant='body2' component='p'>
          {
            props.event.description.length > 260 ?
            props.event.description.slice(0, 260) + '...' :
            props.event.description
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='medium' variant='outlined' color='primary'> Attend</Button>
      </CardActions>
    </Card>
	)
}

GroupEvent.PropTypes = {
  event: PropTypes.object.isRequired
}
