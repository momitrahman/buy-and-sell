import React from 'react';
import styled from 'styled-components';
import * as color from '../../../UI/color';

const SortBySelect = styled.select`
  font-size: 16px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${color.colorG};
  width: 200px;
  padding: 13px 12px;

  &:focus {
    outline: none;
  }
`;

const SortByOption = styled.option`
  background-color: white;
  color: #1b1f23;
  font-size: 16px;
  border-radius: 5px;
`;

const sortBy = props => {
  return (
    <React.Fragment>
      <SortBySelect value={props.currentSortBy} onChange={props.handleSortBy}>
        <SortByOption value="priceLowToHigh">Price: Low to High</SortByOption>
        <SortByOption value="priceHighToLow">Price: High to Low</SortByOption>
        <SortByOption value="dateNewToOld">Date: New to Oldest</SortByOption>
        <SortByOption value="dateOldToNew">Date: Oldest to New</SortByOption>
      </SortBySelect>
    </React.Fragment>
  );
};

export default sortBy;
