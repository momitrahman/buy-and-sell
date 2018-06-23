import styled from 'styled-components';
import * as color from '../color';

const ErrorMessage = styled.div`
  margin: auto;
  font-size: 18px;
  color: ${color.colorBlack};
  background-color: #fbddd1;
  padding: 5px;
  margin-top: 30px;
  text-transform: capitalize;
  border: 1px solid ${color.colorR};
  border-radius: 5px;
`;

export default ErrorMessage;
