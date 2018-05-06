import React from 'react';
import ProductListItem from '../components/ProductListItem';
import LoadMoreButton from '../UI/LoadMoreButton';

class Products extends React.Component {
  state = {
    limit: 4
  };

  componentDidUpdate(prevProps) {
    if (this.props.filteredProduct !== prevProps.filteredProduct) {
      this.setState({ limit: 4 });
    }
  }

  loadMore() {
    this.setState(prevState => ({
      limit: prevState.limit + 4
    }));
  }

  productList() {
    return this.props.filteredProduct.slice(0, this.state.limit).map(item => {
      return <ProductListItem key={item.key} id={item.key} item={item} />;
    });
  }

  render() {
    const ProductList = this.productList();
    return (
      <div>
        {ProductList}
        {this.props.filteredProduct.length > this.state.limit && (
          <LoadMoreButton onClick={this.loadMore.bind(this)}>
            <i className="ion-chevron-down" style={{ fontSize: '25px' }} />
          </LoadMoreButton>
        )}
      </div>
    );
  }
}

export default Products;
