import React from 'react';
import styled from 'styled-components';

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
`;

const HeaderBar = props => (
  <Header>
    <Title>Buy & Sell</Title>
    {props.children}
  </Header>
);

export default HeaderBar;
