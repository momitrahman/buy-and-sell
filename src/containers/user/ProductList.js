import React from 'react';
import base from '../../firebase';

import ProductListItem from '../../components/user/ProductListItem';

class ProductList extends React.Component {
  state = {
    productList: []
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
        {this.state.productList
          ? this.state.productList.map(item => (
            <ProductListItem key={item.key} id={item.key} item={item} />
          ))
          : null}
      </React.Fragment>
    );
  }
}

export default ProductList;
