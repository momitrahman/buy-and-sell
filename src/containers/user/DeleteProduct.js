import React from 'react';
import base from '../../firebase';
import { withRouter } from 'react-router';

import Confirm from '../../components/Confirm';

class DeleteProduct extends React.Component {
  state = { visible: false };

  handleConfirm = pid => {
    base
      .remove(`/products/${pid}`)
      .then(() => console.log('success'))
      .catch(error => console.log(error));
    this.setState({ visible: false });
    return window.location.reload();
  };

  handleCancel = () => this.setState({ visible: false });

  handleVisibility = () => this.setState({ visible: true });

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleVisibility}>{this.props.children}</button>
        <Confirm
          visible={this.state.visible}
          title="Are your sure?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => this.handleConfirm(this.props.pid)}
          onCancel={this.handleCancel}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(DeleteProduct);
