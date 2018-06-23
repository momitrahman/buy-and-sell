import React, { Component } from 'react';
import base from '../firebase';

import Products from '../containers/public/Products';
import Filter from '../containers/public/Filter';
import SearchBar from '../components/public/SearchBar';

class Public extends Component {
  state = {
    products: [],
    filteredProductList: [],
    search: '',
    location: '',
    category: '',
    sortBy: ''
  };

  componentDidMount() {
    base
      .fetch('/products', {
        context: this,
        asArray: true
      })
      .then(data =>
        this.setState({
          products: data,
          filteredProductList: data,
          sortBy: 'dateNewToOld'
        })
      )
      .catch(error => console.log(error));
  }

  // Check if  search, location state change then re-render.
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.location !== this.state.location ||
      prevState.category !== this.state.category
    ) {
      this.filteredProduct();
    } else if (prevState.sortBy !== this.state.sortBy) {
      this.sortBy();
    }
  }

  // set search text from search bar
  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  // clear search text on click
  handleClearSearch = () => {
    this.setState({ search: '' });
  };

  // set location from location button
  handleLocation = text => {
    if (text === 'All') {
      return this.setState({ location: '' });
    }
    this.setState({ location: text });
  };

  // set category from category button
  handleCategory = text => {
    this.setState({ category: text });
  };

  // set sortBy from sortBy dropdown
  handleSortBy = event => {
    this.setState({ sortBy: event.target.value });
  };

  // filter product list based on search text, location
  filteredProduct = () => {
    let productList = [];
    const search = this.state.search.toLowerCase();
    const location = text =>
      this.state.location.toLowerCase()
        ? this.state.location.toLowerCase() === text.toLowerCase()
          ? true
          : false
        : true;

    const category = text =>
      this.state.category
        ? this.state.category.toLowerCase() === text.toLowerCase()
          ? true
          : false
        : true;

    productList = this.state.products.filter(product => {
      return (
        product.title.toLowerCase().includes(search) &&
        location(product.location) &&
        category(product.subcategory)
      );
    });

    this.setState({ filteredProductList: productList });
  };

  // Sort Filtered Products List
  sortBy = () => {
    const currentSortBy = this.state.sortBy;
    const filteredProductList = this.state.filteredProductList;
    let sortByList;
    if (currentSortBy === 'priceLowToHigh') {
      sortByList = filteredProductList.sort((a, b) => a.price - b.price);
    } else if (currentSortBy === 'priceHighToLow') {
      sortByList = filteredProductList.sort((a, b) => b.price - a.price);
    } else if (currentSortBy === 'dateNewToOld') {
      sortByList = filteredProductList.sort((a, b) => b.date - a.date);
    } else if (currentSortBy === 'dateOldToNew') {
      sortByList = filteredProductList.sort((a, b) => a.date - b.date);
    }
    this.setState({ filteredProductList: sortByList });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          value={this.state.search}
          handleSearch={this.handleSearch}
          handleClearSearch={this.handleClearSearch}
        />
        <Filter
          handleLocation={this.handleLocation}
          currentLocation={this.state.location}
          handleCategory={this.handleCategory}
          currentCategory={this.state.category}
          handleSortBy={this.handleSortBy}
          currentSortBy={this.state.sortBy}
        />
        {this.state.products.length > 0 && (
          <Products filteredProduct={this.state.filteredProductList} />
        )}
      </React.Fragment>
    );
  }
}

export default Public;
