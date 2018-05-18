import React from 'react';
import styled from 'styled-components';

import StyledLink from '../components/StyledLink';

import * as color from '../UI/color';

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${color.colorB};
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  padding: 5px 0;
  cursor: pointer;
`;

const HeaderBar = props => (
  <Header>
    <StyledLink to="/">
      <Title>Buy & Sell</Title>
    </StyledLink>

    {props.children}
  </Header>
);

export default HeaderBar;
