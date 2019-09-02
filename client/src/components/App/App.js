import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect }from "react-redux";
import './App.css';
import Home from '../../pages/Home';
import Event from '../../pages/Event';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Group from '../../pages/Group';
import UserProfile from '../../pages/UserProfile';
import EditUserProfile from '../../pages/EditUserProfile';
import CreateEventPage from '../../pages/CreateEventPage';
<<<<<<< HEAD
import EventExplorer from '../../pages/EventExplorer'
=======
import CreateGroupPage from '../../pages/CreateGroupPage';
>>>>>>> 894820ec9248824b3bb17d5898553bc42057b255


class App extends React.Component {
  requireAuth(nextState,replace){
    console.log(this.authenticated());
    if(!this.authenticated());
    replace('/login');
  }
  render(){
    const { title } = this.props
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={EventExplorer} />
          <Route path="/event/:id" component={Event} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/group/:id" component={Group} />
          <Route path="/members/:id" component={UserProfile} />
          <Route path="/edit/members/:id" component={EditUserProfile} />
          <Route path="/group/:groupid/create-event" component={CreateEventPage} />
          <Route path="/create-group" component={CreateGroupPage} />
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
