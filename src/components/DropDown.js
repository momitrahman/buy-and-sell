import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  position: relative;
  font-size: 16px;
  cursor: pointer;
`;

const MenuList = styled.div`
  position: absolute;
  background: white;
  min-width: calc(100% + 10px);
`;

const Icon = styled.i`
  color: black;
  margin-left: 10px;
  font-size: 20px;
  vertical-align: middle;
`;

export const DropDownItem = styled.div`
  display: block;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
`;

export const DropDown = props => {
  return (
    <React.Fragment>
      <Menu onClick={props.handleMenu}>
        {props.title}
        <Icon className="ion-android-arrow-dropdown" />
        {props.visible ? <MenuList>{props.children}</MenuList> : null}
      </Menu>
    </React.Fragment>
  );
};
