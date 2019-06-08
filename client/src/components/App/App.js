import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect }from "react-redux"
import './App.css'
import Home from '../../pages/Home'
import Event from '../../pages/Event'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'

class App extends React.Component {
  render(){
    const { title } = this.props
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/event/:id" component={Event} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
      )
  }
  }

const mapStateToProps = state => {
  return {
    title: state.reducer1.title
  }
}

export default connect(mapStateToProps, null)(App);
