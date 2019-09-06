import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EventExplorerContainer from '../components/EventExplorer/EventExplorerContainer'
export default function EventExplorer() {
    return (
        <div>
            <Header/>
            <EventExplorerContainer/>
            <Footer/>
        </div>
    )
}
