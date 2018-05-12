import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';

const Dropdown = styled.div`
  background-color: green;
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
    <Name>{props.name}</Name>
    <Menu className="show-menu">
      <Logout onClick={() => firebase.auth().signOut()}>Sign Out</Logout>
    </Menu>
  </Dropdown>
);

export default UserMenu;
