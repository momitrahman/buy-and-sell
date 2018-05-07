import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Category = styled.div`
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
`;

const Subcategory = styled.div`
  font-size: 16px;
  cursor: pointer;
  display: block;
`;

const Icon = styled.i`
  font-size: 16px;
  margin-right: 10px;
`;

// Execute two function in one click
const modalAndSelectCategory = props => {
  props.handleCategory(props.subcategory);
  props.handleModal();
};

const FilterCategoryItem = props => (
  <Category onClick={() => modalAndSelectCategory(props)}>
    {props.categoryTitle}
    <Icon className={props.icon} />
    {props.subcategory}
  </Category>
);

FilterCategoryItem.propType = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleCategory: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired
};

export default FilterCategoryItem;
