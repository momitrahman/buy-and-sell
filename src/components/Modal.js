import React from 'react';
import styled from 'styled-components';
import * as color from '../UI/color';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Content = styled.div`
  background-color: white;
  width: 500px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  z-index: 100;
`;

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${color.colorO};
`;

const Body = styled.div`
  font-size: 16px;
  margin: 30px;
`;

const Close = styled.i`
  font-size: 20px;
  float: right;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: ${color.colorO};
  }
`;

const Modal = props => {
  return props.visible ? (
    <React.Fragment>
      <Backdrop onClick={props.handleModal} />
      <Content>
        {props.close && (
          <Close onClick={props.handleModal} className="ion-close" />
        )}
        <Title>{props.title}</Title>
        <Body>{props.children}</Body>
      </Content>
    </React.Fragment>
  ) : null;
};

export default Modal;
