import React from 'react';
import base from '../../firebase';

import ProductItemView from '../../components/public/Product/ProductItemView';

class ProductView extends React.Component {
  state = {
    item: undefined
  };
  componentDidMount() {
    base
      .fetch(`/products/${this.props.match.params.id}`, {
        context: this
      })
      .then(data => this.setState({ item: data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <React.Fragment>
        {this.state.item ? <ProductItemView item={this.state.item} /> : null}
      </React.Fragment>
    );
  }
}

export default ProductView;
