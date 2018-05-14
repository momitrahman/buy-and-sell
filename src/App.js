import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Public from './App/Public';

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Public} />
            <Route
              exact
              path="/add"
              component={() => (this.state.user ? 'HEADER' : 'BETTER')}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
