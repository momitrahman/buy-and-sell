import React from 'react';
import styled from 'styled-components';
import * as color from '../../../color';

const SortByBox = styled.div`
  background-color: white;
  border: 1px solid ${color.colorG};
  padding: 13px 12px;
  border-radius: 5px;
`;

const SortBySelect = styled.select`
  font-size: 16px;
  color: ${color.colorG};
  background-color: white;
  border: 1px solid white;
  text-decoration: none;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.i`
  color: ${color.colorG};
  font-size: 18px;
  margin-right: 10px;
  line-height: 0;
  vertical-align: baseline;
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
