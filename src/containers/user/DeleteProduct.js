import React from 'react';
import base from '../../firebase';
import { withRouter } from 'react-router';

import Confirm from '../../components/utility/Confirm';
import Delete from '../../components/user/Button/DeleteBtn';

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
        <Delete onClick={this.handleVisibility}>{this.props.children}</Delete>
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
