import React from 'react';
import styled from 'styled-components';
import * as color from '../../../color';

const Button = styled.button`
  display: block;
  font-size: 16px;
  color: ${color.colorB};
  background-color: white;
  text-decoration: none;
  border-radius: 100px;
  border: 1px solid ${color.colorB};
  padding: 5px;
  text-transform: capitalize;
  cursor: pointer;
  flex: 1;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 700px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const Icon = styled.i`
  font-size: 16px;
  line-height: 0;
  border: none;
  vertical-align: baseline;
  margin-right: 5px;
`;

const FilterItem = props => {
  return (
    <Button onClick={props.handleModal}>
      <Icon className={props.icon} /> {props.children}
    </Button>
  );
};

export default FilterItem;
