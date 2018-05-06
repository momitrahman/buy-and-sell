import React from 'react';
import base from '../firebase';
import ProductListItem from '../components/ProductListItem';
import LoadMoreButton from '../UI/LoadMoreButton';

class Products extends React.Component {
  state = {
    products: [],
    lastLimit: 4
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

  loadMore() {
    this.setState((prevState, prevProps) => ({
      lastLimit: prevState.lastLimit + 4
    }));
  }

  ProductList() {
    return this.state.products.slice(0, this.state.lastLimit).map(item => {
      return <ProductListItem key={item.key} id={item.key} item={item} />;
    });
  }

  render() {
    const ProductList = this.ProductList();
    return (
      <div>
        {ProductList}
        {this.state.products.length === this.state.lastLimit ? null : (
          <LoadMoreButton onClick={this.loadMore.bind(this)}>
            <i className="ion-chevron-down" style={{ fontSize: '25px' }} />
          </LoadMoreButton>
        )}
      </div>
    );
  }
}

export default Products;
