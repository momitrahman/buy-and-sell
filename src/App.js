import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Public from './App/Public';
import User from './App/User';
import Error404 from './components/Error404';

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
        this.setState({
          user: {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
          }
        });
      } else {
        this.setState({ user: '' });
      }
    });

  render() {
    return (
      <React.Fragment>
        <Route
          path="/"
          component={props => <Header {...props} user={this.state.user} />}
        />
        <Switch>
          <Route exact path="/" component={Public} />
          <Route
            path="/user"
            component={props => <User {...props} user={this.state.user} />}
          />
          <Route
            component={props => <Error404 {...props}>Page Not Found</Error404>}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
