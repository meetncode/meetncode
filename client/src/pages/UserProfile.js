import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import UserProfileContainer from '../components/UserProfile/UserProfileContainer'

export default function UserProfile() {
	return (
		<div>
      <Header/>
			<UserProfileContainer/>
      <Footer/>
    </div>
	)
}
