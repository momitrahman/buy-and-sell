import React from 'react';
import styled from 'styled-components';

const Category = styled.div`
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 16px;
  margin-right: 10px;
`;

const FilterCategoryItem = props => (
  <Category onClick={() => props.handleSubcategory(props.categoryTitle)}>
    {props.categoryTitle.split('_').join(' ')}
    <Icon className={props.icon} />
  </Category>
);

export default FilterCategoryItem;
