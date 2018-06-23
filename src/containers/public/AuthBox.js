import React from 'react';
import firebase from 'firebase';

import Modal from '../../components/utility/Modal';
import PostAdButton from '../../components/public/AuthBox/PostAdButton';
import AuthButton from '../../components/public/AuthBox/AuthButton';

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
            <AuthButton
              authCheck={this.authCheck}
              color="#dd4b39"
              icon="ion-logo-google"
            >
              Sign in using Google
            </AuthButton>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AuthBox;
