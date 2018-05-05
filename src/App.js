import React, { Component } from 'react';
import Products from './containers/Products';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Products />
      </React.Fragment>
    );
  }
}

export default App;
