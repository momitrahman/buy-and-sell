import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../../color';

const Focus = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  z-index: 100;
`;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${color.colorO};
`;

const Body = styled.div`
  font-size: 16px;
  margin: 10px 5px;
  display: flex;
  justify-content: space-evenly;
`;

const OkButton = styled.div`
  text-decoration: none;
  border-style: none;
  background-color: ${color.colorG};
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelButton = styled(OkButton)`
  background-color: ${color.colorR};
`;

const Confirm = props => {
  return props.visible ? (
    <React.Fragment>
      <Focus>
        <Content>
          <Title>{props.title}</Title>
          <Body>
            <OkButton onClick={props.onConfirm}>{props.okText}</OkButton>
            <CancelButton onClick={props.onCancel}>
              {props.cancelText}
            </CancelButton>
          </Body>
        </Content>
      </Focus>
    </React.Fragment>
  ) : null;
};

Confirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  okText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};
export default Confirm;
