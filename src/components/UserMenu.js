import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';

const Name = styled.div`
  font-size: 16px;
  &:hover,
  menu {
    display: block;
  }
`;

const Logout = styled.div`
  font-size: 16px;
`;

const UserMenu = props => (
  <React.Fragment>
    <Name>{props.name}</Name>
    <Logout onClick={() => firebase.auth().signOut()}>Sign Out</Logout>
  </React.Fragment>
);

export default UserMenu;
