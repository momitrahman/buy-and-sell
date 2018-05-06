import React from 'react';
import styled from 'styled-components';
import * as color from '../UI/color';

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
  width: 470px;

  &:focus {
    outline: none;
    border: 1px solid ${color.colorB};
  }
`;

const Icon = styled.span`
  display: block;
  font-size: 25px;
  color: ${color.colorB};
  background: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 30px;
  flex: 1;
`;

const SearchBar = () => {
  return (
    <SearchBox>
      <Input />
      <Icon className="ion-ios-search-strong" />
    </SearchBox>
  );
};

export default SearchBar;
