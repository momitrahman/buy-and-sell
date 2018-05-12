import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../components/public/SearchBar';

class Search extends React.Component {
  // set search text on click or press enter except blank text
  setSearchText = event => {
    this.props.handleSearch(event.target.value);
  };

  // clear search text on click except blank text
  setSearchTextClear = () => {
    this.props.handleSearch('');
  };

  render() {
    return (
      <SearchBar
        value={this.props.search}
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
