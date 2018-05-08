import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Location = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 50px;
`;

const Icon = styled.i`
  font-size: 16px;
  margin-right: 10px;
`;

// Execute two function in one click
const modalAndSelectLocation = props => {
  props.handleLocation(props.location);
  props.handleModal();
};

const FilterLocationItem = props => (
  <Location onClick={() => modalAndSelectLocation(props)}>
    <Icon className={props.icon} />
    {props.location}
  </Location>
);

export default FilterLocationItem;
