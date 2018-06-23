import styled from 'styled-components';
import * as color from '../../../color';

const SubmitButton = styled.button`
  text-decoration: none;
  color: white;
  background-color: ${color.colorA};
  border: none;
  border-radius: 5px;
  width: 620px;
  margin-top: 15px;
  padding: 5px;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
`;

export default SubmitButton;
