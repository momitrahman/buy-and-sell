import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddProduct from '../containers/user/AddProduct';
import ProductList from '../containers/user/ProductList';

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
          <Route
            exact
            path="/user/product-list"
            component={props => (
              <ProductList {...props} user={this.props.user} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default User;
