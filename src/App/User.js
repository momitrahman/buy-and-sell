import React, { Component } from 'react';
import UserMenu from '../components/user/UserMenu';

class User extends Component {
  render() {
    return (
      <React.Fragment>
        <UserMenu user={this.props.user} />
      </React.Fragment>
    );
  }
}

export default User;
