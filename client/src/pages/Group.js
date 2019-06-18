import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GroupHeader from '../components/GroupHeader/GroupHeaderContainer'
import GroupAbout from '../components/GroupAbout/GroupAboutContainer'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_GROUP = gql`
{
  getGroup(id: "5d052ee1c5ac64718e2c2803"){
    name,
    description
  }
}`;

export default class Group extends React.Component {
	render() {
		// return (
		// 	<Query query={GET_GROUP}>
		// 		{({ data, loading, error }) => {
		// 			if (loading) return <p>Loading</p>;
		// 			if (error) return <p>ERROR</p>;
		// 			const { description, name } = data.getGroup
					return (
						<React.Fragment>
							<Header />
							<GroupHeader />
							<GroupAbout />
							<Footer />
						</React.Fragment>
					)
		// 		}}
		// 	</Query>
		// )
	}
}
