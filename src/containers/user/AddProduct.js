import React from 'react';

import InputText from '../../components/user/FormInput/InputText';
import InputDropDown from '../../components/user/FormInput/InputDropDown';
import InputTextarea from '../../components/user/FormInput/InputTextarea';

class AddProduct extends React.Component {
  state = {
    title: '',
    type: 'new',
    description: ''
  };

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <InputText
          title="Title"
          placeholder="Title"
          value={this.state.title}
          handleChange={event => this.handleChange(event, 'title')}
        />
        <InputDropDown
          title="Type"
          options={['New', 'Used']}
          handleChange={event => this.handleChange(event, 'type')}
        />
        <InputTextarea
          title="Description"
          placeholder="Product Details "
          value={this.state.title}
          handleChange={event => this.handleChange(event, 'type')}
        />
      </React.Fragment>
    );
  }
}

export default AddProduct;
