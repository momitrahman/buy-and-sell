import React from 'react';
import FilterItem from '../FilterItem';
import FilterLocationItem from './FilterLocationItem';
import Modal from '../../../Modal';

// render location list
const filterLocationList = props => {
  const allLocations = props.locations.map((location, index) => (
    <FilterLocationItem
      key={index + 1}
      location={location}
      handleLocation={props.handleLocation}
      handleModal={props.handleModal}
      icon="ion-arrow-right-c"
    />
  ));

  return (
    <React.Fragment>
      <FilterLocationItem
        key={0}
        location={'All'}
        handleLocation={props.handleLocation}
        handleModal={props.handleModal}
        icon="ion-android-home"
      />
      {allLocations}
    </React.Fragment>
  );
};

const FilterLocation = props => (
  <React.Fragment>
    <FilterItem icon="ion-ios-location" handleModal={props.handleModal}>
      {props.currentLocation || 'Location'}
    </FilterItem>
    <Modal
      close
      visible={props.visible}
      title="Location"
      handleModal={props.handleModal}
    >
      {props.locations.length > 0 ? filterLocationList(props) : 'Location'}
    </Modal>
  </React.Fragment>
);

export default FilterLocation;
