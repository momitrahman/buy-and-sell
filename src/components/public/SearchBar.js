import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../color';

const SearchBox = styled.div`
  display: flex;
  line-height: 0;
`;

const Input = styled.input`
  display: block;
  width: 600px;
  line-height: 1;
  font-size: 18px;
  padding: 5px 0;
  padding-left: 20px;
  border: 1px solid transparent;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  @media (max-width: 700px) {
    width: 85vw;
    font-size: 16px;
  }

  @media (max-width: 400px) {
    width: 80vw;
    font-size: 16px;
  }

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
  padding: 10px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: ${color.colorR};
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  @media (max-width: 700px) {
    width: 10vw;
    font-size: 25px;
  }

  @media (max-width: 400px) {
    width: 15vw;
    font-size: 22px;
  }
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
