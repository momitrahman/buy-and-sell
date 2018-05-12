import React from 'react';
import styled from 'styled-components';

import * as color from '../../UI/color';
import PostAdButton from '../../UI/PostAdButton';
import UserMenu from './UserMenu';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  background-color: ${color.colorB};
`;

const Title = styled.div`
  font-size: 20px;
  padding: 15px 10px;
`;

const HeaderBar = props => (
  <Header>
    <Title>Buy & Sell</Title>
    {props.user ? (
      <UserMenu name={props.user.displayName} />
    ) : (
      <PostAdButton onClick={props.handleModal}>Post Your Ad</PostAdButton>
    )}
  </Header>
);

export default HeaderBar;
