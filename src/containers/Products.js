import React from 'react';
import base from '../firebase';
import styled from 'styled-components';
import ProductListItem from '../components/ProductListItem';

class Products extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    base
      .fetch('/products', {
        context: this,
        asArray: true,
        queries: {
          orderByChild: 'prize',
          startAt: 200
        }
      })
      .then(data =>
        this.setState(prevState => ({
          products: data
        }))
      )
      .catch(error => console.log(error));
  }

  ProductList() {
    return this.state.products.map(item => {
      return <ProductListItem key={item.key} id={item.key} item={item} />;
    });
  }

  render() {
    const ProductList = this.ProductList();
    return <div>{ProductList}</div>;
  }
}

export default Products;
