import styled from 'styled-components';
import * as color from './color';

const LoadMoreButton = styled.button`
  display: block;
  text-decoration: none;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  width: 500px;
  margin: 10px;
  padding: 5px;
  background-color: ${color.colorB};
  box-shadow: 0 0 1px black;
  cursor: pointer;
`;

export default LoadMoreButton;
