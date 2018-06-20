import React from 'react';
import firebase from 'firebase';

import Modal from '../../utility/Modal';
import PostAdButton from '../PostAdButton';
import AuthButton from './AuthButton';

class AuthBox extends React.Component {
  state = { modal: false };

  // Handle modal visibility
  handleModal = () => this.setState({ modal: !this.state.modal });

  // Auth Provider for Google
  provider = new firebase.auth.GoogleAuthProvider();
  authCheck = () => {
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .then(() => this.setState({ modal: false }));
  };

  render() {
    return (
      <React.Fragment>
        <PostAdButton onClick={this.handleModal}>Post Your Add</PostAdButton>
        <Modal
          close
          visible={this.state.modal}
          title="Sign IN / UP"
          handleModal={this.handleModal}
        >
          <div>
            <AuthButton onClick={this.authCheck}>
              Sign in using Google
            </AuthButton>
            <AuthButton onClick={this.authCheck}>
              Sign up using Google
            </AuthButton>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AuthBox;
