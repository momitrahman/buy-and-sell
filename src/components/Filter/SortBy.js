import React from 'react';
import styled from 'styled-components';

const SortBySelect = styled.select`
  color: green;
`;

const SortByOption = styled.option`
  color: red;
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
