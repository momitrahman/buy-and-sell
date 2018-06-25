import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../../color';

import Title from './Title';

const Select = styled.select`
  display: block;
  font-size: 16px;
  color: ${color.colorBlack};
  padding: 5px;
  width: 620px;
  margin: 5px 0;
  color: ${color.colorBlack};
  background-color: white;
  text-transform: capitalize;
  border-radius: 5px;
  border: 1px solid ${color.colorA};
  @media (max-width: 700px) {
    width: 95vw;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    color: white;
    background-color: ${color.colorB};
  }
`;

const Options = options =>
  options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

const InputDropDown = props => (
  <Title>
    {props.title}
    <Select value={props.value} onChange={props.handleChange}>
      {Options(props.options)}
    </Select>
  </Title>
);

InputDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputDropDown;
