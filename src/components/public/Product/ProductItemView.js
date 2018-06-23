import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import base from '../../../firebase';
import * as color from '../../../color';

const Wrapper = styled.div`
  width: 650px;
  border-radius: 5px;
  box-shadow: 0 1px 2px ${color.colorA};
  border-bottom: 3px solid ${color.colorG};
  background: white;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${color.colorA};
  padding: 0 20px;
  text-transform: capitalize;
  white-space: nowrap;
`;

const BasicInfo = styled.div`
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 5px;
`;

const Uppercase = styled.span`
  text-transform: capitalize;
  font-weight: 600;
`;

const PriceInfo = styled.div`
  padding: 5px 20px;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-size: 20px;
  background-color: ${color.colorO};
  padding: 5px 10px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

const Info = styled.div`
  font-size: 18px;
  border-bottom: 3px solid ${color.colorO};
`;

const Description = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  text-align: justify;
`;

const ContactInfo = styled.div`
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Contact = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
const Icon = styled.i`
  line-height: 0;
  color: ${color.colorG}
  font-size: 20px;
  vertical-align: middle;
  margin-right: 10px;
`;

const NonBoldSpan = styled.span`
  font-weight: 300;
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
    console.log(this.state.item);
    const {
      title,
      name,
      date,
      location,
      price,
      subcategory,
      type,
      description,
      mobile,
      email
    } =
      this.state.item || {};

    return (
      <React.Fragment>
        {this.state.item ? (
          <Wrapper>
            <Title>{title}</Title>
            <BasicInfo>
              Posted by
              <Uppercase> {name}, </Uppercase>
              {moment(moment(date)).format('dddd, MMMM Do YYYY, h:mm a') + ' '}
              from
              <Uppercase>{' ' + location}</Uppercase>
            </BasicInfo>
            <img
              src="https://picsum.photos/700/300/?random"
              alt="Product Item"
            />
            <PriceInfo>
              {/* eslint-disable-next-line */}
              <Price>৳ {price}</Price>
              <Info>
                Category: <NonBoldSpan>{subcategory + ', '}</NonBoldSpan>
                Condition: <NonBoldSpan>{type}</NonBoldSpan>
              </Info>
            </PriceInfo>
            <Description>{description}</Description>
            <ContactInfo>
              Contact
              <Contact>
                <Icon className="ion-md-call" />
                {mobile}
              </Contact>
              <Contact>
                <Icon className="ion-md-mail" />
                {email}
              </Contact>
            </ContactInfo>
          </Wrapper>
        ) : null}
      </React.Fragment>
    );
  }
}

export default ProductItemView;
