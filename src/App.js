import React, { Component } from 'react';
import base from './firebase';
import Products from './containers/Products';
import Header from './containers/Header';
import Filter from './containers/Filter';

class App extends Component {
  state = {
    products: [],
    filteredProductList: [],
    search: '',
    location: ''
  };

  componentDidMount() {
    base
      .fetch('/products', {
        context: this,
        asArray: true
      })
      .then(data =>
        this.setState({ products: data, filteredProductList: data })
      )
      .catch(error => console.log(error));
  }

  filteredProduct = search => {
    const productList = this.state.products.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ filteredProductList: productList });
  };

  handleSearch = text => {
    this.setState({ search: text });
    this.filteredProduct(text);
  };

  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch} />
        <Filter />
        {this.state.products.length > 0 && (
          <Products filteredProduct={this.state.filteredProductList} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
