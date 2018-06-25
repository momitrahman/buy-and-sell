import React from 'react';
import styled from 'styled-components';

import StyledLink from '../components/utility/StyledLink';

import * as color from '../color';

const Header = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.colorA};
  margin-bottom: 30px;
  @media (max-width: 700px) {
    width: 95vw;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 18px;
    padding: 7px 10px;
  }
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
