import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import base from '../../../firebase';

const Wrapper = styled.div`
  width: 650px;
  border-radius: 5px;
  box-shadow: 0 0 1px black;
  background: white;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 20px;
  padding: 5px 20px;
  text-transform: capitalize;
  white-space: nowrap;
`;

const BasicInfo = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 5px 20px;
`;

const Name = styled.span`
  color: green;
`;

const Time = styled.span`
  color: orangered;
`;

const PriceInfo = styled.div`
  padding: 5px 20px;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 18px;
`;

const Info = styled.div`
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 16px;
  padding: 5px 20px;
  text-align: justify;
`;

const ContactInfo = styled.div`
  padding: 5px 20px;
  font-size: 18px;
  font-weight: 600;
`;

const Contact = styled.div`
  font-weight: 400;
`;
const Icon = styled.i`
  line-height: 0;
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
              <Name> {name}, </Name>
              <Time>
                {moment(moment(date)).format('dddd, MMMM Do YYYY, h:mm a') +
                  ' '}
              </Time>
              from {location}
            </BasicInfo>
            <hr />
            <PriceInfo>
              <Price>৳ {price}</Price>
              <Info>
                Category: <NonBoldSpan>{subcategory + ', '}</NonBoldSpan>
                Condition: <NonBoldSpan>{type}</NonBoldSpan>
              </Info>
            </PriceInfo>
            <Description>{description}</Description>
            <ContactInfo>
              Contact
              <hr />
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
