import React from 'react';
import base from '../firebase';
import FilterBar from '../components/Filter/FilterBar';
import Modal from '../components/Modal';

class Filter extends React.Component {
  state = {
    modalLocation: false,
    modalCategory: false
  };

  handleModalLocation = () => {
    this.setState({ modalLocation: !this.state.modalLocation });
  };

  handleModalCategory = () => {
    this.setState({ modalCategory: !this.state.modalCategory });
  };

  render() {
    return (
      <React.Fragment>
        <FilterBar
          handleModalLocation={this.handleModalLocation}
          handleModalCategory={this.handleModalCategory}
        />
        <Modal
          close
          visible={this.state.modalLocation}
          title="Select Location"
          handleModal={this.handleModalLocation}
        >
          Location
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
