import React from 'react';
import FilterItem from '../FilterItem';
import FilterCategoryItem from './FilterCategoryItem';
import FilterSubcategory from './FilterSubcategory';
import Modal from '../../Modal';

// render location list
const filterCategoryList = props => {
  const allCategory = Object.keys(props.category).map(
    (categoryTitle, index) => (
      <FilterCategoryItem
        key={index + 1}
        categoryTitle={categoryTitle}
        icon="ion-arrow-right-c"
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
        icon="ion-android-home"
      />
      {allCategory}
    </React.Fragment>
  );
};

const FilterCategory = props => (
  <React.Fragment>
    <FilterItem icon="ion-ios-location" handleModal={props.handleModal}>
      {props.currentCategory || 'Select Category'}
    </FilterItem>
    <Modal
      close
      visible={props.visible}
      title="Select Category"
      handleModal={props.handleModal}
    >
      {Object.keys(props.category).length > 0
        ? filterCategoryList(props)
        : 'Select Category'}
      {props.subcategory.length > 0 && (
        <FilterSubcategory
          handleModal={props.handleModal}
          handleCategory={props.handleCategory}
          subcategory={props.subcategory}
        />
      )}
    </Modal>
  </React.Fragment>
);

export default FilterCategory;
