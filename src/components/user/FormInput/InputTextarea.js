import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Title';
import Wrapper from './Wrapper';

const TextArea = styled.textarea`
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 500px;
  height: 300px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
`;

const InputTextarea = props => (
  <Wrapper>
    <Title>
      {props.title}
      <TextArea
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </Title>
  </Wrapper>
);

InputTextarea.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputTextarea;
