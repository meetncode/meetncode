import React, { Component } from 'react'
import EventBanner from './EventBanner'
import EventExplorerSearch from './EventExplorerSearch'
import EventExploreOwn from './EventExploreOwn'
import EventExplorerRelated from './EventExplorerRelated'
import GetGroupByLocation from './EventExplorerIDMutation.graphql'
import QUERY_CURRENT_USER from '../CurrentUser/queryCurrentUser.graphql';
import { Query } from 'react-apollo'

class EventExplorerContainer extends Component {
    // state = {
    //     value: this.props.,
    // };
    //   onChange = event => {
    //     this.setState({ value: event.target.value });
    //   };
    //   onSubmit = event => {
    //     this.props.(this.state.value);
    //     event.preventDefault();
    //   };

    render() {
        // const filteredLocation =  this.state.location.filter(location => {
		// 	return location.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })   
        return (
            <React.Fragment>
                <EventBanner/>
                {/* <EventExplorerSearch searchChange={this.onSearchChange}/> */}
                <EventExplorerSearch/>
                <EventExploreOwn/>
                <Query query={QUERY_CURRENT_USER}>
                    {({loading, data}) => {
                        if(loading || !data) {
                        return null;
                        }
                        console.log(data);
                        <EventExplorerRelated />
                    }}
                </Query>
                {/* <EventExplorerRelated location={filteredLocation}/> */}
            </React.Fragment>
        )
    }
}
export default EventExplorerContainer