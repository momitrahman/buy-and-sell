import React from 'react';
import base from '../firebase';
import FilterBox from '../UI/FilterBox';
import FilterLocation from '../components/Filter/Location/FilterLocation';

class Filter extends React.Component {
  state = {
    modalLocation: false,
    modalCategory: false,
    locations: []
  };

  // control modal visibility for location
  handleModalLocation = () => {
    this.setState({ modalLocation: !this.state.modalLocation });
    if (this.state.locations.length === 0) {
      this.fetchLocation();
    }
  };

  // control modal visibility for category
  handleModalCategory = () => {
    this.setState({ modalCategory: !this.state.modalCategory });
  };

  // Fetch location list from firebase
  fetchLocation = () => {
    base
      .fetch('/locations', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ locations: data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <FilterBox>
        <FilterLocation
          visible={this.state.modalLocation}
          locations={this.state.locations}
          handleModal={this.handleModalLocation}
          currentLocation={this.props.currentLocation}
          handleLocation={this.props.handleLocation}
        />
      </FilterBox>
    );
  }
}

export default Filter;
