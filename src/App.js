import React, { Component } from 'react';
import Products from './containers/Products';
import Header from './containers/Header';
import Modal from './components/Modal';

class App extends Component {
  state = {
    modal: false
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Products />
        <button onClick={this.handleModal}>Modal</button>
        <Modal
          close
          visible={this.state.modal}
          handleModal={this.handleModal}
          title="Location"
        >
          ok
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
