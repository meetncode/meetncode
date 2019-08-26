import React from 'react'
import EventExplorerID from './EventExplorerIDMutation.graphql';
import { Query } from 'react-apollo'
import EventExplorerlist from './EventExplorerlist';
import { className } from 'postcss-selector-parser';

class EventExplorerRelated extends React.Component {
	render(){
    return (
      <div>
        <Query query={EventExplorerID}>
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Loading</div>;
            }
            
            if (error) {
                return <div>error</div>
            }
            console.log(data);
            const Events = data.getEvents;
            return (
              Events.map((event,index) => {
                return <EventExplorerlist className="event-wrapper" key={index} event={event}/>
              })
            )
          }
        }
        </Query>
      </div>
    )
  }
}
export default EventExplorerRelated