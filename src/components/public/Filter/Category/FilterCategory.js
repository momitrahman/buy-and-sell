import React from 'react';
import FilterItem from '../FilterItem';
import FilterCategoryItem from './FilterCategoryItem';
import FilterSubcategory from './FilterSubcategory';
import Modal from '../../../utility/Modal';
import styled from 'styled-components';

const FilterCategoryBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// render category list
const filterCategoryList = props => {
  const allCategory = Object.keys(props.category).map(
    (categoryTitle, index) => (
      <FilterCategoryItem
        key={index + 1}
        categoryTitle={categoryTitle}
        icon="ion-md-add"
        handleSubcategory={props.handleSubcategory}
      />
    )
  );

  return (
    <React.Fragment>
      <FilterCategoryItem
        key={0}
        categoryTitle={'All'}
        handleSubcategory={props.handleSubcategory}
        handleModal={props.handleModal}
        icon="ion-md-home"
      />
      {allCategory}
    </React.Fragment>
  );
};

const FilterCategory = props => (
  <React.Fragment>
    <FilterItem icon="ion-md-pricetags " handleModal={props.handleModal}>
      {props.currentCategory || 'Category'}
    </FilterItem>
    <Modal
      close
      visible={props.visible}
      title="Category"
      handleModal={props.handleModal}
    >
      <FilterCategoryBox>
        <div>
          {Object.keys(props.category).length > 0
            ? filterCategoryList(props)
            : 'Category'}
        </div>
        <div>
          {props.subcategory.length > 0 && (
            <FilterSubcategory
              handleModal={props.handleModal}
              handleCategory={props.handleCategory}
              subcategory={props.subcategory}
            />
          )}
        </div>
      </FilterCategoryBox>
    </Modal>
  </React.Fragment>
);

export default FilterCategory;
