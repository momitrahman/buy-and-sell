import React from 'react';
import SearchBar from '../components/SearchBar';

class Header extends React.Component {
  state = {
    searchInput: ''
  };

  handleSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  setSearchText = event => {
    console.log(event.type);
    if (
      this.state.searchInput &&
      (event.type === 'click' || event.keyCode === 13)
    ) {
      this.props.handleSearch(this.state.searchInput);
    }
  };

  setSearchTextClear = () => {
    if (this.state.searchInput) {
      this.setState({ searchInput: '' });
      this.props.handleSearch('');
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          handleSearch={this.handleSearchInput}
          value={this.state.searchInput}
          setSearchText={this.setSearchText}
          setSearchTextClear={this.setSearchTextClear}
        />
      </React.Fragment>
    );
  }
}

export default Header;
