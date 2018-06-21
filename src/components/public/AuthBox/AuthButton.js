import React from 'react';
import styled from 'styled-components';

const AuthButtonBox = styled.div`
  text-align: center;
`;

const AuthButtonDetails = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid ${props => (props.color ? props.color : 'black')};
  color: ${props => (props.color ? props.color : 'black')};
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 18px;
  margin-right: 5px;
  vertical-align: baseline;
  line-height: 0;
  color: inherit;
`;

const AuthButton = props => (
  <AuthButtonBox onClick={props.authCheck}>
    <AuthButtonDetails color={props.color}>
      <Icon className={props.icon} />
      {props.children}
    </AuthButtonDetails>
  </AuthButtonBox>
);

export default AuthButton;
