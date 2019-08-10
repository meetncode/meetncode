import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect }from "react-redux";

import Home from '../../pages/Home';
import Event from '../../pages/Event';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Group from '../../pages/Group';
import CreateEditEvent from '../../pages/CreateEditEvent';

import './App.css';


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
          <Route path="/group/:id" component={Group} />
          {/* <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} /> */}
          <Route path="/eventedit/:id" component={CreateEditEvent} />
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
