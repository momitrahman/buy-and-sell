import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import PropTypes from 'prop-types';

const Dropdown = styled.div`
  &:hover > .show-menu {
    display: block;
  }
`;

const Name = styled.div`
  font-size: 16px;
`;

const Logout = styled.div`
  font-size: 16px;
`;

const Menu = styled.div`
  display: none;
`;

const UserMenu = props => (
  <Dropdown>
    <Name>{props.user.displayName}</Name>
    <Menu className="show-menu">
      <Logout onClick={() => firebase.auth().signOut()}>Sign Out</Logout>
    </Menu>
  </Dropdown>
);

UserMenu.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserMenu;
