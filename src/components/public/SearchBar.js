import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../UI/color';

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 20px;
  width: 550px;

  &:focus {
    outline: none;
    border: 1px solid ${color.colorB};
  }
`;

const Icon = styled.span`
  display: block;
  font-size: 25px;
  color: white;
  background-color: ${color.colorB};
  width: 50px;
  padding-left: 15px;
  flex: 1;
  cursor: pointer;
`;

const ClearIcon = styled(Icon)`
  width: 50px;
  padding-left: 15px;
  background-color: ${color.colorR};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const SearchBar = props => {
  return (
    <SearchBox>
      <Input
        value={props.value}
        onChange={props.handleSearchInput}
        onKeyDown={props.setSearchText}
        placeholder="Search Here"
      />
      <Icon onClick={props.setSearchText} className="ion-ios-search-strong" />
      <ClearIcon onClick={props.setSearchTextClear} className="ion-close" />
    </SearchBox>
  );
};

SearchBar.propType = {
  handleSearchInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setSearchTextClear: PropTypes.func.isRequired
};

export default SearchBar;
