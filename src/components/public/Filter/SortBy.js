import React from 'react';
import styled from 'styled-components';
import * as color from '../../../color';

const SortByBox = styled.div`
  background-color: white;
  padding: 5px 10px;
  border: 1px solid ${color.colorG};
  border-radius: 100px;
  position: relative;
`;

const SortBySelect = styled.select`
  font-size: 16px;
  color: ${color.colorG};
  background-color: white;
  border: 1px solid white;
  text-decoration: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.i`
  color: ${color.colorG};
  font-size: 18px;
  line-height: 0;
  vertical-align: baseline;
  margin-right: 5px;
`;

const sortBy = props => {
  return (
    <SortByBox>
      <Icon className="ion-md-funnel" />
      <SortBySelect value={props.currentSortBy} onChange={props.handleSortBy}>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="dateNewToOld">Date: New to Oldest</option>
        <option value="dateOldToNew">Date: Oldest to New</option>
      </SortBySelect>
    </SortByBox>
  );
};

export default sortBy;
