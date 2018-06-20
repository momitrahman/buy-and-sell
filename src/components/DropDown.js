import React from 'react';
import styled from 'styled-components';

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
  font-size: 20px;
  padding: 5px;
  padding-right: 20px;
  color: white;
  cursor: pointer;
`;

const MenuList = styled.div`
  position: absolute;
  background: white;
  color: black;
  min-width: calc(100% + 10px);
  z-index: 100;
`;

const Icon = styled.i`
  color: black;
  margin-left: 5px;
  color: white;
  font-size: 25px;
  vertical-align: middle;
`;

export const DropDownItem = styled.div`
  display: block;
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;
  padding: 0 5px;
  cursor: pointer;
`;

export const DropDown = props => {
  return (
    <React.Fragment>
      {props.visible && <BackDrop onClick={props.handleMenu} />}
      <Menu onClick={props.handleMenu}>
        {props.title}
        <Icon className="ion-android-arrow-dropdown" />
        {props.visible ? <MenuList>{props.children}</MenuList> : null}
      </Menu>
    </React.Fragment>
  );
};
