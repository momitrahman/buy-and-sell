import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem';
import FilterCategoryItem from './FilterCategoryItem';
import Modal from '../../Modal';

// render location list
const filterCategoryList = props => {
  const allCategory = Object.keys(props.category).map(
    (categoryTitle, index) => (
      <FilterCategoryItem
        key={index + 1}
        categoryTitle={categoryTitle.split('_').join(' ')}
        subcategory={props.category[categoryTitle]}
        handleCategory={props.handleCategory}
        handleModal={props.handleModal}
        icon="ion-arrow-right-c"
      />
    )
  );

  return (
    <React.Fragment>
      <FilterCategoryItem
        key={0}
        categoryTitle={'All'}
        handleCategory={props.handleCategory}
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
    </Modal>
  </React.Fragment>
);

FilterCategory.propType = {
  visible: PropTypes.bool,
  category: PropTypes.object,
  currentCategory: PropTypes.string,
  handleModal: PropTypes.func,
  handleCategory: PropTypes.func
};

export default FilterCategory;
