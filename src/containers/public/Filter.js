import React from 'react';
import base from '../../firebase';

import FilterLocation from '../../components/public/Filter/Location/FilterLocation';
import FilterCategory from '../../components/public/Filter/Category/FilterCategory';
import SortBy from '../../components/public/Filter/SortBy';
import FilterBox from '../../components/public/Filter/FilterBox';

class Filter extends React.Component {
  state = {
    modalLocation: false,
    modalCategory: false,
    locations: [],
    category: [],
    subcategory: []
  };

  // control modal visibility for location
  handleModalLocation = () => {
    this.setState({ modalLocation: !this.state.modalLocation });
    if (this.state.locations.length === 0) {
      this.fetchLocation();
    }
  };

  // control modal visibility for category
  handleModalCategory = () => {
    this.setState({ modalCategory: !this.state.modalCategory });
    if (this.state.category.length === 0) {
      this.fetchCategory();
    }
  };

  // Fetch location list from firebase
  fetchLocation = () => {
    base
      .fetch('/locations', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ locations: data }))
      .catch(error => console.log(error));
  };

  // Fetch location list from firebase
  fetchCategory = () => {
    base
      .fetch('/category', {
        context: this
      })
      .then(data => this.setState({ category: data }))
      .catch(error => console.log(error));
  };

  // Set subcategory list on click
  handleSubcategory = categoryTitle => {
    if (categoryTitle === 'All') {
      this.setState({ subcategory: [], modalCategory: false });
      this.props.handleCategory('');
      return;
    }
    const subcategory = this.state.category[categoryTitle];
    this.setState({ subcategory: subcategory });
  };

  render() {
    return (
      <FilterBox>
        <FilterLocation
          visible={this.state.modalLocation}
          locations={this.state.locations}
          handleModal={this.handleModalLocation}
          currentLocation={this.props.currentLocation}
          handleLocation={this.props.handleLocation}
        />

        <FilterCategory
          visible={this.state.modalCategory}
          category={this.state.category}
          handleModal={this.handleModalCategory}
          currentCategory={this.props.currentCategory}
          handleCategory={this.props.handleCategory}
          handleSubcategory={this.handleSubcategory}
          subcategory={this.state.subcategory}
        />
        <SortBy
          handleSortBy={this.props.handleSortBy}
          currentSortBy={this.props.currentSortBy}
        />
      </FilterBox>
    );
  }
}

export default Filter;
