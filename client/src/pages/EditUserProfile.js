import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EditUserProfileContainer from '../components/UserProfile/EditUserProfileContainer'

export default function EditUserProfile() {
	return (
		<div>
      <Header/>
			<EditUserProfileContainer/>
      <Footer/>
    </div>
	)
}
