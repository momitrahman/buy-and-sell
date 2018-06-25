import styled from 'styled-components';
import * as color from '../../../color';

const PostAdButton = styled.div`
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
  background-color: ${color.colorO};
  color: white;
  height: 100%;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 18px;
    padding: 7px 10px;
  }
`;

export default PostAdButton;
