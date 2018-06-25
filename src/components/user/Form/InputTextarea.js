import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../../color';

import Title from './Title';

const TextArea = styled.textarea`
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 620px;
  border: 1px solid ${color.colorA};
  border-radius: 5px;
  color: ${color.colorBlack};
  margin-top: 5px;
  overflow: auto;
  &:focus {
    outline: none;
    color: white;
    background-color: ${color.colorB};
  }

  @media (max-width: 700px) {
    width: 95vw;
    font-size: 14px;
  }
`;

const InputTextarea = props => (
  <Title>
    {props.title}
    <TextArea
      rows="5"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  </Title>
);

InputTextarea.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputTextarea;
