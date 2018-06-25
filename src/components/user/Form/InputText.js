import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../../color';
import Title from './Title';

const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 620px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  color: ${color.colorBlack};
  border: 1px solid ${color.colorA};
  text-transform: capitalize;
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

const InputText = props => (
  <Title>
    {props.title}
    <Input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  </Title>
);

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputText;
