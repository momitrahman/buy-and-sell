import React from 'react';

import HeaderBar from '../components/HeaderBar';
import User from '../App/User';
import AuthBox from '../components/public/AuthBox';

class Header extends React.Component {
  render() {
    return (
      <HeaderBar>
        {this.props.user ? <User user={this.props.user} /> : <AuthBox />}
      </HeaderBar>
    );
  }
}

export default Header;
