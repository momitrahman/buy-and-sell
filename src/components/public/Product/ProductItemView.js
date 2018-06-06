import React from 'react';
import styled from 'styled-components';
import base from '../../../firebase';

const Wrapper = styled.div`
  width: 650px;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class ProductItemView extends React.Component {
  state = {
    item: undefined
  };
  componentDidMount() {
    base
      .fetch(`/products/${this.props.match.params.id}`, {
        context: this
      })
      .then(data => this.setState({ item: data }))
      .catch(error => console.log(error));
  }
  render() {
    const { title } = this.state.item || {};

    return <Wrapper>{this.state.item && <Title>{title}</Title>}</Wrapper>;
  }
}

export default ProductItemView;
