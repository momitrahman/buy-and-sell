import React from 'react';
import styled from 'styled-components';

const Location = styled.div`
  font-size: 16px;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 16px;
  margin-right: 10px;
`;

// Execute two function in one click
const modalAndSelectLocation = props => {
  props.handleLocation(props.location);
  props.handleModalLocation();
};

const FilterLocation = props => (
  <Location onClick={() => modalAndSelectLocation(props)}>
    <Icon className="ion-arrow-right-c" />
    {props.location}
  </Location>
);

export default FilterLocation;
