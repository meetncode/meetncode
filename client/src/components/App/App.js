import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner'
import Tags from '../Tags/TagsContainer'
import Categories from '../Categories/Categories'
import EventsNearby from '../EventsNearby/EventsNearby'
import GroupsNearby from '../GroupsNearby/GroupsNearby'
import CreateGroup from '../CreateGroup/CreateGroup'
import HowItWorks from '../HowItWorks/HowItWorks'

import { connect }from "react-redux";
import './App.css'

const App = (props) => {
  const { title } = props
  return (
    <div>

      <Header></Header>
      <Banner></Banner>
      <Tags></Tags>
      <EventsNearby></EventsNearby>
      <GroupsNearby></GroupsNearby>
      <CreateGroup></CreateGroup>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </div>
    )
  }

const mapStateToProps = state => {
  return {
    title: state.reducer1.title
  }
}

export default connect(mapStateToProps, null)(App);
