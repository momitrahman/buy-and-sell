import React from 'react';

import HeaderBar from '../components/HeaderBar';
import UserMenu from '../components/user/UserMenu';
import AuthBox from '../components/public/AuthBox';

class Header extends React.Component {
  render() {
    return (
      <HeaderBar>
        {this.props.user ? <UserMenu user={this.props.user} /> : <AuthBox />}
      </HeaderBar>
    );
  }
}

export default Header;
