import React from 'react';
import styled from 'styled-components';

const Subcategory = styled.div`
  display: block;
  text-transform: capitalize;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 16px;
  margin-right: 10px;
`;

// Execute two function in one click
const modalAndSelectCategory = (props, item) => {
  props.handleCategory(item);
  props.handleModal();
};

const FilterSubcategory = props =>
  props.subcategory.map((item, index) => (
    <Subcategory
      key={index}
      onClick={() => modalAndSelectCategory(props, item)}
    >
      <Icon className="ion-md-arrow-dropright" /> {item}
    </Subcategory>
  ));

export default FilterSubcategory;
