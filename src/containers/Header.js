import React from 'react';
import SearchBar from '../components/SearchBar';

class Header extends React.Component {
  state = {
    searchInput: ''
  };

  handleSearch = event => {
    this.setState({ searchInput: event.target.value });
  };

  setSearchTextClick = () => {
    if (this.state.searchInput) {
      this.props.handleSearch(this.state.searchInput);
    }
  };

  setSearchTextClear = () => {
    if (this.state.searchInput) {
      this.setState({ searchInput: '' });
      this.props.handleSearch('');
    }
  };

  setSearchTextEnter = event => {
    if (event.keyCode === 13 && this.state.searchInput) {
      this.props.handleSearch(this.state.searchInput);
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          handleSearch={this.handleSearch}
          value={this.state.searchInput}
          setSearchTextClick={this.setSearchTextClick}
          setSearchTextEnter={this.setSearchTextEnter}
          setSearchTextClear={this.setSearchTextClear}
        />
      </React.Fragment>
    );
  }
}

export default Header;
