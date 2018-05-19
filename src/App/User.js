import React from 'react';
import base from '../firebase';
import { Route, Switch, Redirect } from 'react-router-dom';

import AddProduct from '../containers/user/AddProduct';
import EditProduct from '../containers/user/EditProduct';
import ProductList from '../components/user/Product/ProductList';
import Error404 from '../components/Error404';

class User extends React.Component {
  state = {
    productList: {}
  };

  componentDidMount() {
    if (this.props.user.uid) {
      base
        .fetch('/products', {
          context: this,
          asArray: true,
          queries: {
            orderByChild: 'uid',
            equalTo: this.props.user.uid
          }
        })
        .then(data => this.setState({ productList: data }))
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.user ? (
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
              path="/user/edit/:key"
              component={props => (
                <EditProduct
                  {...props}
                  user={this.props.user}
                  productList={this.state.productList}
                />
              )}
            />
            <Route
              exact
              path="/user/product-list"
              component={props => (
                <ProductList
                  {...props}
                  user={this.props.user}
                  productList={this.state.productList}
                />
              )}
            />
          </Switch>
        ) : (
          <Error404>You are not sign in.</Error404>
        )}
      </React.Fragment>
    );
  }
}

export default User;
