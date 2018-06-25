import styled from 'styled-components';
import * as color from '../../../color';

export default styled.button`
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: ${color.colorR};
  padding: 7px;
  margin-right: 10px;
  border: 1px solid ${color.colorR};
  border-radius: 100px;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 14px;
    padding: 4px;
    margin: 10px;
    flex: 1 1 0;
  }
`;
