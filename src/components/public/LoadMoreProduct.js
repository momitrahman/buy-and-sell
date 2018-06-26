import React from 'react';
import styled from 'styled-components';
import * as color from '../../color';

const LoadMore = styled.i`
  display: block;
  text-decoration: none;
  font-size: 25px;
  padding: 5px 0;
  line-height: 0;
  color: white;
  border: none;
  border-radius: 100px;
  width: 650px;
  margin: 10px 0;
  background-color: ${color.colorA};
  cursor: pointer;
  text-align: center;
`;

const LoadMoreProduct = props => (
  <LoadMore onClick={props.loadMore} className="ion-ios-arrow-down" />
);

export default LoadMoreProduct;
