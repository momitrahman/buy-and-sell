import styled from 'styled-components';
import * as color from './color';

const LoadMoreButton = styled.button`
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  width: 550px;
  margin: 10px;
  background-color: ${color.colorB};
  box-shadow: 0 0 1px black;
  cursor: pointer;
  text-align: center;
`;

export default LoadMoreButton;
