import React, { Component } from 'react';
import firebase from 'firebase';

import Public from './App/Public';
import Header from './containers/Header';

class App extends Component {
  state = {
    user: true
  };

  componentDidMount() {
    this.auth();
  }

  // check logged in user
  auth = () =>
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: '' });
      }
    });

  render() {
    return (
      <React.Fragment>
        <Header user={this.state.user} />
        <Public />
      </React.Fragment>
    );
  }
}

export default App;
