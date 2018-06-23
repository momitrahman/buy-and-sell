import React from 'react';
import firebase from 'firebase';

import HeaderBar from '../components/HeaderBar';
import AuthBox from './public/AuthBox';
import StyledLink from '../components/utility/StyledLink';
import { DropDown, DropDownItem } from '../components/utility/DropDown';

class Header extends React.Component {
  state = {
    visible: false
  };

  handleMenu = () => this.setState({ visible: !this.state.visible });

  logout = () => {
    this.setState({ visible: !this.state.visible });
    firebase.auth().signOut();
    this.props.history.push('/');
  };

  render() {
    return (
      <HeaderBar>
        {this.props.user ? (
          <React.Fragment>
            <DropDown
              handleMenu={this.handleMenu}
              title={this.props.user.displayName}
              visible={this.state.visible}
            >
              <DropDownItem onClick={this.handleMenu}>
                <StyledLink to="/user/product-list">Your Products</StyledLink>
              </DropDownItem>
              <DropDownItem onClick={this.handleMenu}>
                <StyledLink to="/user/add">Add Product</StyledLink>
              </DropDownItem>
              <DropDownItem onClick={this.logout}>Logout</DropDownItem>
            </DropDown>
          </React.Fragment>
        ) : (
          <AuthBox />
        )}
      </HeaderBar>
    );
  }
}

export default Header;
