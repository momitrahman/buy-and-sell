import React from 'react';
import PropTypes from 'prop-types';
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
  props.handleModal();
};

const FilterLocationItem = props => (
  <Location onClick={() => modalAndSelectLocation(props)}>
    <Icon className={props.icon} />
    {props.location}
  </Location>
);

FilterLocationItem.propType = {
  location: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired
};

export default FilterLocationItem;
