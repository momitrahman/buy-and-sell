import React from 'react';
import firebase from 'firebase';

import HeaderBar from '../components/HeaderBar';
import Modal from '../components/Modal';
import AuthButton from '../UI/AuthButton';

class Header extends React.Component {
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
        <HeaderBar handleModal={this.handleModal} user={this.props.user} />
        <Modal
          close
          visible={this.state.modal}
          title="Post Your Ad"
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

export default Header;
