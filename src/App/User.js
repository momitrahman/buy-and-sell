import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddProduct from '../containers/user/AddProduct';

class User extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/user/add"
            component={props => (
              <AddProduct {...props} user={this.props.user} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default User;
