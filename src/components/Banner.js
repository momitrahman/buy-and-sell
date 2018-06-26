import styled from 'styled-components';

const Banner = styled.a`
  display: block;
  font-family: sans-serif;
  font-size: 12px;
  text-decoration: none;
  color: white;
  text-align: center;
  letter-spacing: 1px;
  word-spacing: 3px;
  background-color: #11998e;
  width: 650px;
  position: fixed;
  bottom: 0;
  line-height: 1;
  padding: 3px;

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

export default Banner;
