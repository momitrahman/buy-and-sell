import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Title';
import Wrapper from './Wrapper';

const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 500px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
`;

const InputText = props => (
  <Wrapper>
    <Title>
      {props.title}
      <Input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </Title>
  </Wrapper>
);

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputText;
