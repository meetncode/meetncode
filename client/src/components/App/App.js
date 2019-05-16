import React from 'react';
import { connect }from "react-redux";

const App = (props) => {
  const { title } = props
  return (
    <div>
      <h1>{title}</h1>
      <p>Sonam was here</p>
    </div>
    )
  }

const mapStateToProps = state => {
  return {
    title: state.reducer1.title
  }
}

export default connect(mapStateToProps, null)(App);
