import React from 'react';
import styled from 'styled-components';
import FilterItem from './FilterItem';

const FilterBox = styled.div`
  width: 550px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const FilterBar = props => {
  return (
    <FilterBox>
      <FilterItem
        icon="ion-ios-location"
        handleModal={props.handleModalLocation}
      >
        {props.currentLocation || 'Select Location'}
      </FilterItem>
      <FilterItem
        icon="ion-ios-pricetag"
        handleModal={props.handleModalCategory}
      >
        Select Category
      </FilterItem>
    </FilterBox>
  );
};

export default FilterBar;
