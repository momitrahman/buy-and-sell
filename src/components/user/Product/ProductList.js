import React from 'react';

import ProductListItem from './ProductListItem';

const ProductList = props => (
  <React.Fragment>
    {props.productList.length > 0
      ? props.productList.map((item, index) => (
        <ProductListItem
          key={item.key}
          id={item.key}
          item={item}
          index={index}
        />
      ))
      : null}
  </React.Fragment>
);

export default ProductList;
