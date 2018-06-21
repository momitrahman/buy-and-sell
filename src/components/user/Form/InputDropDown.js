import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Title';
import Wrapper from './Wrapper';

const Select = styled.select`
  display: block;
  font-size: 16px;
  color: inherit;
  padding: 10px;
  width: 550px;
  border: none;
  border-radius: 10px;
  background: white;
  margin-top: 5px;
  text-transform: capitalize;
`;

const Options = options =>
  options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

const InputDropDown = props => (
  <Wrapper>
    <Title>
      {props.title}
      <Select value={props.value} onChange={props.handleChange}>
        {Options(props.options)}
      </Select>
    </Title>
  </Wrapper>
);

InputDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputDropDown;
