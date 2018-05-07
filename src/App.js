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
    location: '',
    category: ''
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

  // Check if  search, location state change then re-render.
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.location !== this.state.location
    ) {
      this.filteredProduct();
    }
  }

  // set search text from search bar
  handleSearch = text => {
    this.setState({ search: text });
  };

  // set location from location button
  handleLocation = text => {
    if (text === 'All') {
      return this.setState({ location: '' });
    }
    this.setState({ location: text });
  };

  // set category from location button
  handleCategory = text => {
    if (text === 'All') {
      return this.setState({ category: '' });
    }
    this.setState({ category: text });
  };

  // filter product list based on search text, location
  filteredProduct = () => {
    let productList = [];
    const search = this.state.search.toLowerCase();
    const location = this.state.location.toLowerCase();

    productList = this.state.products.filter(item => {
      return (
        item.title.toLowerCase().includes(search) &&
        item.location.toLowerCase().includes(location)
      );
    });

    this.setState({ filteredProductList: productList });
  };

  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch} />
        <Filter
          handleLocation={this.handleLocation}
          currentLocation={this.state.location}
          handleCategory={this.handleCategory}
          currentCategory={this.state.category}
        />
        {this.state.products.length > 0 && (
          <Products filteredProduct={this.state.filteredProductList} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
