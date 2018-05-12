import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../components/public/SearchBar';

class Search extends React.Component {
  state = {
    searchInput: ''
  };

  // control search input
  handleSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  // set search text on click or press enter except blank text
  setSearchText = event => {
    if (
      this.state.searchInput &&
      (event.type === 'click' || event.keyCode === 13)
    ) {
      this.props.handleSearch(this.state.searchInput);
    }
  };

  // clear search text on click except blank text
  setSearchTextClear = () => {
    if (this.state.searchInput) {
      this.setState({ searchInput: '' });
      this.props.handleSearch('');
    }
  };

  render() {
    return (
      <SearchBar
        handleSearchInput={this.handleSearchInput}
        value={this.state.searchInput}
        setSearchText={this.setSearchText}
        setSearchTextClear={this.setSearchTextClear}
      />
    );
  }
}

Search.propType = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
