import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EventBodyContainer from '../components/EventBody/EventBodyContainer'
import EventHeaderContainer from '../components/EventHeader/EventHeaderContainer'

export default function Event() {
	return (
		<div>
      <Header></Header>
      <EventHeaderContainer></EventHeaderContainer>
      <EventBodyContainer></EventBodyContainer>
      <Footer></Footer>
    </div>
	)
}
