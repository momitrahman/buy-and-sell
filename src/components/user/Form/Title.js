import styled from 'styled-components';
import * as color from '../../../color';

const Title = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 300;
  color: ${color.colorBlack};
  margin-top: 10px;
  text-transform: capitalize;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export default Title;
