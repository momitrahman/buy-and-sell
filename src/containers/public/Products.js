import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from '../../components/public/Product/ProductListItem';
import LoadMoreProduct from '../../components/public/LoadMoreProduct';
import ErrorMessage from '../../components/ErrorMessage';

class Products extends React.Component {
  state = {
    limit: 5
  };

  // reset limit if product list change
  componentDidUpdate(prevProps) {
    if (this.props.filteredProduct !== prevProps.filteredProduct) {
      this.setState({ limit: 5 });
    }
  }

  // set product load limit
  loadMore = () => {
    this.setState(prevState => ({
      limit: prevState.limit + 5
    }));
  };

  // load more product list on click based on limit
  productList = () => {
    return this.props.filteredProduct
      .slice(0, this.state.limit)
      .map((item, index) => {
        return (
          <ProductListItem
            key={item.key}
            id={item.key}
            item={item}
            index={index}
          />
        );
      });
  };

  render() {
    return (
      <div>
        {this.productList().length > 0 ? (
          this.productList()
        ) : (
          // eslint-disable-next-line
          <ErrorMessage>Noting found 😞</ErrorMessage>
        )}
        {this.props.filteredProduct.length > this.state.limit && (
          <LoadMoreProduct loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}

Products.propType = {
  filteredProduct: PropTypes.object.isRequired
};

export default Products;
