import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as color from '../../../color';

export default styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: ${color.colorB};
  padding: 7px;
  margin-right: 10px;
  border: 1px solid ${color.colorB};
  border-radius: 100px;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 14px;
    padding: 4px;
    margin: 10px;
    flex: 1 1 0;
  }
`;
