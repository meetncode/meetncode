import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GroupHeader from '../components/GroupHeader/GroupHeaderContainer'
import GroupAbout from '../components/GroupAbout/GroupAboutContainer'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_GROUP = gql`
query GetGroup($id: ID!){
  getGroup(id: $id){
		id,
    name,
		description,
    events{
			id
    }
  }
}`;

export default class Group extends React.Component {
	render() {
		const { id } = this.props.match.params
		return (
			<Query query={GET_GROUP} variables={{ id }}>
				{({ data, loading, error }) => {
					if (loading) return <p>Loading</p>;
					if (error) return <p>ERROR</p>;
					const { id, events } = data.getGroup
					return (
						<React.Fragment>
							<Header />
							<GroupHeader id={id} />
							<GroupAbout id={id} events={events}/>
							<Footer />
						</React.Fragment>
					)
				}}
			</Query>
		)
	}
}
