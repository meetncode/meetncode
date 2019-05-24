import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { connect }from "react-redux";

const App = (props) => {
  const { title } = props
  return (
    <div>
      <Header></Header>
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
