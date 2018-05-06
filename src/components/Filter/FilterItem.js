import React from 'react';
import styled from 'styled-components';
import * as color from '../../UI/color';

const Button = styled.button`
  display: block;
  font-size: 18px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${color.colorG};
  width: 250px;
  padding: 10px 5px;
`;

const Icon = styled.i`
  font-size: 22px;
  color: white;
  background-color: ${color.colorG};
  border: none;
  vertical-align: middle;
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
