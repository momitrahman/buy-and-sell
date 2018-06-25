import React from 'react';
import styled from 'styled-components';
import * as color from '../../color';

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;

const Menu = styled.div`
  position: relative;
  font-size: 18px;
  padding: 5px;
  padding-right: 20px;
  color: white;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const MenuList = styled.div`
  position: absolute;
  font-weight: 400;
  background: white;
  color: ${color.colorBlack};
  width: 80%;
  z-index: 100;
`;

const Icon = styled.i`
  font-size: 18px;
  color: white;
  line-height: 0;
  margin-left: 7px;
  vertical-align: middle;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const DropDownItem = styled.div`
  display: block;
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;
  padding: 0 5px;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const DropDown = props => {
  return (
    <React.Fragment>
      {props.visible && <BackDrop onClick={props.handleMenu} />}
      <Menu onClick={props.handleMenu}>
        {props.title}
        <Icon className="ion-ios-arrow-down" />
        {props.visible ? <MenuList>{props.children}</MenuList> : null}
      </Menu>
    </React.Fragment>
  );
};
