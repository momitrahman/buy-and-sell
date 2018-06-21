import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Title';
import Wrapper from './Wrapper';

const TextArea = styled.textarea`
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 550px;
  border: none;
  border-radius: 10px;
  margin-top: 5px;
  overflow: auto;
`;

const InputTextarea = props => (
  <Wrapper>
    <Title>
      {props.title}
      <TextArea
        rows="5"
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
