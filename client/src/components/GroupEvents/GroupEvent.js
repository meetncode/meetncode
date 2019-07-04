import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import moment from 'moment';
import dayjs from 'dayjs'

const useStyles = {
  card: {
    width: 600,
    marginBottom: 20
  }
};

// const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore eos sint in enim consectetur ex nisi ab minus delectus, veritatis dolor quos quas quo eaque alias quasi, nesciunt dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore eos sint in enim consectetur ex nisi ab minus delectus, veritatis dolor quos quas quo eaque alias quasi, nesciunt dolores!'

export default function GroupEvent(props) {
  // const { name } = props
  // const formattedDate = (jsDate) => {return moment(Number(jsDate)).format('MMMM Do YYYY, h:mm a')}
  const formattedDate = (jsDate) => {return dayjs(Number(jsDate)).format('MMMM D YYYY, h:mm a')}

  return (
    <Card style={useStyles.card}>
    {/* <Card style={{maxWidth: 575}}> */}
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
        {/* Thu, July 31, 6:30 PM */}
        {formattedDate(props.event.date)}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.event.name}
        </Typography>
        <Typography color="textSecondary">
         <i className="fas fa-map-marker-alt"></i>
          <span style={{ marginLeft: '10px' }}>Cat Cafe</span>
        </Typography>
        <Typography variant="body2" component="p">
          {
            props.event.description.length > 260 ?
            props.event.description.slice(0, 260) + '...' :
            props.event.description
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="outlined" color="primary"> Attend</Button>
      </CardActions>
    </Card>
	)
}
