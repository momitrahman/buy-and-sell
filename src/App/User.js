import React, { Component } from 'react';
import firebase from 'firebase';

import Header from '../containers/user/Header';

class User extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    this.auth();
  }

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
      </React.Fragment>
    );
  }
}

export default User;
