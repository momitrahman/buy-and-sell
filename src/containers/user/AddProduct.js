import React from 'react';
import base from '../../firebase';

import InputText from '../../components/user/Form/InputText';
import InputDropDown from '../../components/user/Form/InputDropDown';
import InputTextarea from '../../components/user/Form/InputTextarea';
import SubmitButton from '../../components/user/Form/SubmitButton';
import Message from '../../components/user/Form/Message';

class AddProduct extends React.Component {
  state = {
    categoryList: [],
    locationList: [],
    subcategoryList: [],
    category: '',
    subcategory: '',
    location: '',
    title: '',
    type: 'used',
    price: '',
    description: '',
    mobile: '',
    titleMessage: false,
    priceMessage: false,
    descriptionMessage: false,
    mobileMessage: false
  };

  componentDidMount() {
    this.fetchLocation();
    this.fetchCategory();
  }

  // Fetch location list from firebase
  fetchLocation = () => {
    base
      .fetch('/locations', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ locationList: data, location: data[0] }))
      .catch(error => console.log(error));
  };

  // Fetch Category list from firebase
  fetchCategory = () => {
    base
      .fetch('/category', {
        context: this
      })
      .then(data => {
        const keyList = Object.keys(data);
        this.setState({
          categoryList: data,
          subcategoryList: data[keyList[0]],
          category: keyList[0],
          subcategory: data[keyList[0]][0]
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  handleNameChange = event => {
    const value = event.target.value;
    if (value.length <= 50) {
      this.setState({ title: value, titleMessage: false });
    } else {
      this.setState({ titleMessage: 'Max 50 Characters' });
    }
  };

  handlePriceChange = event => {
    const value = event.target.value;
    if (!isNaN(value)) {
      this.setState({ price: value, priceMessage: false });
    } else {
      this.setState({ priceMessage: 'Numbers Only' });
    }
  };

  handleDescriptionChange = event => {
    const value = event.target.value;
    if (value.length <= 1500) {
      this.setState({ description: value, descriptionMessage: false });
    } else {
      this.setState({ descriptionMessage: 'Max 1500 Characters' });
    }
  };

  handleMobileChange = event => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 11) {
      this.setState({ mobile: value, mobileMessage: false });
    } else {
      this.setState({ mobileMessage: '11 Digits Only' });
    }
  };

  handleCategoryChange = event => {
    const value = event.target.value.split(' ').join('_');
    this.setState({
      category: value,
      subcategoryList: this.state.categoryList[value],
      subcategory: this.state.categoryList[value][0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title.length === 0) {
      this.setState({ titleMessage: 'Title Can Not Be Empty' });
    }
    if (this.state.price.length <= 0) {
      this.setState({ priceMessage: 'Price Can Not Be Empty' });
    }
    if (this.state.description.length <= 200) {
      this.setState({
        descriptionMessage: 'Description Can Not Be Less Than 200 Characters'
      });
    }
    if (this.state.mobile.length < 11) {
      this.setState({ mobileMessage: 'Must Be 11 Digits' });
    }

    if (
      this.state.title.length > 0 &&
      this.state.price.length > 0 &&
      this.state.description.length >= 200 &&
      this.state.mobile.length == 11
    ) {
      base
        .push('/products', {
          data: {
            category: this.state.category,
            subcategory: this.state.subcategory,
            location: this.state.location,
            title: this.state.title.toLowerCase(),
            type: this.state.type,
            price: this.state.price,
            description: this.state.description,
            mobile: this.state.mobile,
            date: Date.now(),
            uid: this.props.user.uid,
            email: this.props.user.email
          }
        })
        .then(() => console.log('success'))
        .then(() => this.props.history.push('/user/product-list'))
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <React.Fragment>
        <InputDropDown
          title="Category"
          options={Object.keys(this.state.categoryList).map(item =>
            item.split('_').join(' ')
          )}
          value={this.state.category}
          handleChange={event => this.handleCategoryChange(event)}
        />
        <InputDropDown
          title="Subcategory"
          options={this.state.subcategoryList}
          value={this.state.subcategory}
          handleChange={event => this.handleChange(event, 'subcategory')}
        />
        <InputDropDown
          title="Location"
          options={this.state.locationList}
          value={this.state.location}
          handleChange={event => this.handleChange(event, 'location')}
        />
        <InputText
          title="Title"
          placeholder="Product Title"
          value={this.state.title}
          handleChange={event => this.handleNameChange(event)}
        />
        {this.state.titleMessage && (
          <Message> {this.state.titleMessage} </Message>
        )}
        <InputDropDown
          title="Type"
          options={['used', 'new']}
          value={this.state.type}
          handleChange={event => this.handleChange(event, 'type')}
        />
        <InputText
          title="Price"
          placeholder="Product Price"
          value={this.state.price}
          handleChange={event => this.handlePriceChange(event)}
        />
        {this.state.priceMessage && (
          <Message>{this.state.priceMessage}</Message>
        )}
        <InputTextarea
          title="Description"
          placeholder="Product Details "
          value={this.state.description}
          handleChange={event => this.handleDescriptionChange(event)}
        />
        {this.state.descriptionMessage && (
          <Message>{this.state.descriptionMessage}</Message>
        )}
        <InputText
          title="Mobile"
          placeholder="Your Mobile"
          value={this.state.mobile}
          handleChange={event => this.handleMobileChange(event)}
        />
        {this.state.mobileMessage && (
          <Message>{this.state.mobileMessage}</Message>
        )}
        <SubmitButton onClick={this.handleSubmit}>SUBMIT</SubmitButton>
      </React.Fragment>
    );
  }
}

export default AddProduct;
