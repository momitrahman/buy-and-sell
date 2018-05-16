import React from 'react';
import base from '../firebase';
import { Route, Switch } from 'react-router-dom';

import AddProduct from '../containers/user/AddProduct';
import EditProduct from '../containers/user/EditProduct';
import ProductList from '../components/user/Product/ProductList';

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
      </React.Fragment>
    );
  }
}

export default User;
