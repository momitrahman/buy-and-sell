import React, { Component } from 'react';
import base from './firebase';
import Products from './containers/Products';
import Header from './containers/Header';

class App extends Component {
  state = {
    products: [],
    search: '',
    filteredProductList: []
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
        {this.state.products.length > 0 && (
          <Products filteredProduct={this.state.filteredProductList} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
