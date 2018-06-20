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
    border: 1px solid ${color.colorG};
    outline: none;
  }
`;

const Clear = styled.div`
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${color.colorR};
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 30px;
  color: white;
  padding-left: 15px;
`;

const SearchBar = props => {
  return (
    <SearchBox>
      <Input
        value={props.value}
        onChange={props.handleSearch}
        placeholder="Search Here"
      />
      <Clear onClick={props.handleClearSearch}>
        <Icon className="ion-md-close" />
      </Clear>
    </SearchBox>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired
};

export default SearchBar;
