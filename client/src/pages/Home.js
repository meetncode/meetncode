import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Tags from '../components/Tags/TagsContainer'
import Categories from '../components/Categories/Categories'
import EventsNearby from '../components/EventsNearby/EventsNearby'
import GroupsNearby from '../components/GroupsNearby/GroupsNearby'
import CreateGroupCTA from '../components/CreateGroupCTA/CreateGroupCTA'
import HowItWorks from '../components/HowItWorks/HowItWorks'

export default function Home() {
	return (
		<div>
      <Header></Header>
      <Banner></Banner>
      <Tags></Tags>
      <EventsNearby></EventsNearby>
      <GroupsNearby></GroupsNearby>
      <CreateGroupCTA></CreateGroupCTA>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </div>
	)
}
