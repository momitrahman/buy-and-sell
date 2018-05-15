import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Public from './App/Public';
import User from './App/User';

class App extends Component {
  state = {
    user: ''
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
        <Switch>
          <Route exact path="/" component={Public} />
          <Route path="/user" component={User} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
