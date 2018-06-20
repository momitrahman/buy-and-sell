import React from 'react';
import styled from 'styled-components';

import StyledLink from '../components/utility/StyledLink';

import * as color from '../color';

const Header = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.colorB};
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 10px;
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
