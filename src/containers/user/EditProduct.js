import React from 'react';
import base from '../../firebase';

import InputText from '../../components/user/Form/InputText';
import InputDropDown from '../../components/user/Form/InputDropDown';
import InputTextarea from '../../components/user/Form/InputTextarea';
import SubmitButton from '../../components/user/Form/SubmitButton';
import Message from '../../components/user/Form/Message';
import StyledLink from '../../components/utility/StyledLink';
import Wrapper from '../../components/user/Form/Wrapper';

class EditProduct extends React.Component {
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
    this.setStateInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.fetchLocation();
      this.fetchCategory();
    }
  }

  // Fetch location list from firebase
  fetchLocation = () => {
    base
      .fetch('/locations', {
        context: this,
        asArray: true
      })
      .then(data => this.setState({ locationList: data }))
      .catch(error => console.log(error));
  };

  // Fetch Category list from firebase
  fetchCategory = () => {
    base
      .fetch('/category', {
        context: this
      })
      .then(data => {
        this.setState({
          categoryList: data,
          subcategoryList: data[this.state.category]
        });
      })
      .catch(error => console.log(error));
  };

  setStateInfo = () => {
    if (this.props.productList.length > 0) {
      const product = this.props.productList.filter(
        item => item.key === this.props.match.params.key
      );
      this.setState({ ...product[0] });
    }
  };

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  handleNameChange = event => {
    const value = event.target.value;
    const valueLength = value.length;
    if (valueLength <= 70) {
      return this.setState({
        title: value,
        titleMessage:
          valueLength > 0 && valueLength < 70
            ? `${70 - valueLength} characters left`
            : false
      });
    } else {
      return this.setState({
        titleMessage: false
      });
    }
  };

  handlePriceChange = event => {
    const value = event.target.value;
    if (!isNaN(value)) {
      this.setState({ price: value, priceMessage: false });
    } else {
      this.setState({ priceMessage: 'Numbers only' });
    }
  };

  handleDescriptionChange = event => {
    const value = event.target.value;
    const valueLength = value.length;
    if (valueLength <= 1500) {
      this.setState({
        description: value,
        descriptionMessage:
          valueLength > 0 && valueLength < 1500
            ? `${1500 - valueLength} characters left`
            : false
      });
    } else {
      this.setState({ descriptionMessage: false });
    }
  };

  handleMobileChange = event => {
    const value = event.target.value;
    const valueLength = value.length;
    if (!isNaN(value)) {
      if (valueLength <= 11) {
        this.setState({
          mobile: value,
          mobileMessage:
            valueLength > 0 && valueLength < 11
              ? `${11 - valueLength} digit left`
              : false
        });
      } else {
        this.setState({ mobileMessage: false });
      }
    } else {
      this.setState({ mobileMessage: 'Numbers only' });
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
      this.setState({ titleMessage: 'Can not be empty' });
    }
    if (this.state.price.length <= 0) {
      this.setState({ priceMessage: 'Can not be empty' });
    }
    if (this.state.description.length <= 400) {
      this.setState({
        descriptionMessage: 'At least 400 characters'
      });
    }
    if (this.state.mobile.length < 11) {
      this.setState({ mobileMessage: 'Must be 11 digit' });
    }

    if (
      this.state.title.length > 0 &&
      this.state.price.length > 0 &&
      this.state.description.length >= 400 &&
      this.state.mobile.length === 11
    ) {
      base
        .update(`/products/${this.props.match.params.key}`, {
          data: {
            category: this.state.category,
            subcategory: this.state.subcategory,
            location: this.state.location,
            title: this.state.title.toLowerCase(),
            type: this.state.type,
            price: this.state.price,
            description: this.state.description,
            mobile: this.state.mobile
          }
        })
        .then(() => console.log('success'))
        .then(() => this.props.history.push('/user/product-list'))
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <Wrapper>
        {this.state.title ? (
          <React.Fragment>
            <InputDropDown
              title="Category"
              options={Object.keys(this.state.categoryList).map(item =>
                item.split('_').join(' ')
              )}
              value={this.state.category.split('_').join(' ')}
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
              options={['Used', 'New']}
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
            <SubmitButton onClick={this.handleSubmit}>UPDATE</SubmitButton>
          </React.Fragment>
        ) : (
          <StyledLink to="/user/product-list">Get Back</StyledLink>
        )}
      </Wrapper>
    );
  }
}

export default EditProduct;
