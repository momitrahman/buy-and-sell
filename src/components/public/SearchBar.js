import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../color';

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const Input = styled.input`
  width: 600px;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid transparent;

  &:focus {
    outline: none;
    border: 1px solid ${color.colorG};
  }
`;

const ClearIcon = styled.div`
  font-size: 25px;
  color: white;
  width: 50px;
  padding-left: 15px;
  background-color: ${color.colorR};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

const SearchBar = props => {
  return (
    <SearchBox>
      <Input
        value={props.value}
        onChange={props.handleSearch}
        placeholder="Search Here"
      />
      <ClearIcon onClick={props.handleClearSearch} className="ion-close" />
    </SearchBox>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired
};

export default SearchBar;
