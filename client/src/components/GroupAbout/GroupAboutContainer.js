import React, { Component } from 'react'
import GroupAbout from './GroupAbout'
import GroupOrganizer from '../GroupMembers/GroupOrganizer'
import GroupMembers from '../GroupMembers/GroupMembers'
import './GroupAbout.css'
import { Query } from 'react-apollo'

import GET_GROUP from './queryGetGroup.graphql'

class GroupAboutContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
        eventIds: [],
        id: ''
    }
  }
  componentDidMount(){
    // this.setState({
    // 	eventIds : this.props.events
    // })
    // this.setState({
    // 	id : this.props.id
    // })
  }
  render() {
    return (
      <div className="group-about-container">				

        <Query
              query={GET_GROUP}
              variables={{
                id
              }}
            >
                {({ data, loading, error }) => {
                  if (loading) return <p>Loading</p>;
                  if (error) return <p>ERROR</p>;
                  const group = data.getGroup
                  return (
                    <>
                      <GroupAbout group={group}/>
                      <div className="group-members">
                        <GroupOrganizer group={group}/>
                        <GroupMembers group={group}/>
                      </div>
                    </>
                )
              }}
            </Query>
      </div>
    )
  }
}

export default GroupAboutContainer
