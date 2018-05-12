import React, { Component } from 'react';

import Public from './App/Public';
import User from './App/User';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <User />
        <Public />
      </React.Fragment>
    );
  }
}

export default App;
