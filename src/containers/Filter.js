import React from 'react';
import base from '../firebase';
import FilterBar from '../components/Filter/FilterBar';
import Modal from '../components/Modal';
import FilterLocation from '../components/Filter/FilterLocations';

class Filter extends React.Component {
  state = {
    modalLocation: false,
    modalCategory: false,
    locations: []
  };

  handleModalLocation = () => {
    this.setState({ modalLocation: !this.state.modalLocation });
    if (this.state.locations.length === 0) {
      this.fetchLocation();
    }
  };

  handleModalCategory = () => {
    this.setState({ modalCategory: !this.state.modalCategory });
  };

  fetchLocation = () => {
    base
      .fetch('/locations', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ locations: data }))
      .catch(error => console.log(error));
  };

  selectFilterLocation = locations => {
    const allLocations = locations.map((location, index) => (
      <FilterLocation
        key={index + 1}
        location={location}
        handleLocation={this.props.handleLocation}
        handleModalLocation={this.handleModalLocation}
      />
    ));

    return (
      <React.Fragment>
        <FilterLocation
          key={0}
          location={'All'}
          handleLocation={this.props.handleLocation}
          handleModalLocation={this.handleModalLocation}
        />
        {allLocations}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <FilterBar
          currentLocation={this.props.currentLocation}
          handleModalLocation={this.handleModalLocation}
          handleModalCategory={this.handleModalCategory}
        />
        <Modal
          close
          visible={this.state.modalLocation}
          title="Select Location"
          handleModal={this.handleModalLocation}
        >
          {this.state.locations.length > 0
            ? this.selectFilterLocation(this.state.locations)
            : 'Select Location'}
        </Modal>
        <Modal
          close
          visible={this.state.modalCategory}
          title="Select Category"
          handleModal={this.handleModalCategory}
        >
          Category
        </Modal>
      </React.Fragment>
    );
  }
}

export default Filter;
