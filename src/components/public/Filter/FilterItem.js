import React from 'react';
import styled from 'styled-components';
import * as color from '../../../color';

const Button = styled.button`
  font-size: 16px;
  color: ${color.colorG};
  background-color: white;
  text-decoration: none;
  border: none;
  border-radius: 100px;
  border: 1px solid ${color.colorG};
  padding: 5px 10px;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  width: 200px;
`;

const Icon = styled.i`
  font-size: 18px;
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
