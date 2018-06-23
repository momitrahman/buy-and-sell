import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Public from './App/Public';
import User from './App/User';
import ErrorMessage from './components/ErrorMessage';
import ProductView from './containers/public/ProductView';

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
          <Route exact path="/view/:id" component={ProductView} />
          <Route
            component={props => (
              // eslint-disable-next-line
              <ErrorMessage {...props}>Page not found 😞</ErrorMessage>
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
