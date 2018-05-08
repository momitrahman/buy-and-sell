import React from 'react';
import styled from 'styled-components';

// Execute two function in one click
const modalAndSelectCategory = (props, item) => {
  props.handleCategory(item);
  props.handleModal();
};

const FilterSubcategory = props =>
  props.subcategory.map((item, index) => (
    <div key={index} onClick={() => modalAndSelectCategory(props, item)}>
      {item}
    </div>
  ));

export default FilterSubcategory;
