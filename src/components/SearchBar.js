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
  width: 450px;

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
  width: 30px;
  padding-left: 10px;
  background-color: ${color.colorR};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const SearchBar = props => {
  return (
    <SearchBox>
      <Input
        value={props.value}
        onChange={props.handleSearch}
        onKeyDown={props.setSearchTextEnter}
      />
      <Icon
        onClick={props.setSearchTextClick}
        className="ion-ios-search-strong"
      />
      <ClearIcon onClick={props.setSearchTextClear} className="ion-close" />
    </SearchBox>
  );
};

export default SearchBar;
