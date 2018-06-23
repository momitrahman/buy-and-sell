import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../color';

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  line-height: 0;
`;

const Input = styled.input`
  display: block;
  width: 600px;
  line-height: 10px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid transparent;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;

  &:focus {
    outline: none;
    border: 1px solid ${color.colorB};
  }
`;

const ClearIcon = styled.i`
  display: block;
  font-size: 30px;
  color: white;
  width: 50px;
  padding: 5px 15px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: ${color.colorR};
  cursor: pointer;
  vertical-align: middle;
`;

const SearchBar = props => {
  return (
    <SearchBox>
      <Input
        value={props.value}
        onChange={props.handleSearch}
        placeholder="Search Here"
      />
      <ClearIcon onClick={props.handleClearSearch} className="ion-md-close" />
    </SearchBox>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired
};

export default SearchBar;
