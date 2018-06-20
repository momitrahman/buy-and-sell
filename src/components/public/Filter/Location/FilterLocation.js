import React from 'react';
import FilterItem from '../FilterItem';
import FilterLocationItem from './FilterLocationItem';
import Modal from '../../../utility/Modal';

// render location list
const filterLocationList = props => {
  const allLocations = props.locations.map((location, index) => (
    <FilterLocationItem
      key={index + 1}
      location={location}
      handleLocation={props.handleLocation}
      handleModal={props.handleModal}
      icon="ion-md-arrow-dropright"
    />
  ));

  return (
    <React.Fragment>
      <FilterLocationItem
        key={0}
        location={'All'}
        handleLocation={props.handleLocation}
        handleModal={props.handleModal}
        icon="ion-md-home"
      />
      {allLocations}
    </React.Fragment>
  );
};

const FilterLocation = props => (
  <React.Fragment>
    <FilterItem icon="ion-md-navigate" handleModal={props.handleModal}>
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
