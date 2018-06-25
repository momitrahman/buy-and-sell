import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import * as color from '../../../color';

const Wrapper = styled.div`
  width: 650px;
  border-radius: 5px;
  box-shadow: 0 1px 2px ${color.colorA};
  background: white;
  overflow: hidden;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    width: 95vw;
  }
`;

const Title = styled.div`
  font-size: 28px;
  color: ${color.colorA};
  padding: 0 20px;
  text-transform: capitalize;
  white-space: nowrap;
  @media (max-width: 700px) {
    font-size: 24px;
    padding: 10px;
  }
`;

const BasicInfo = styled.div`
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 5px;
  @media (max-width: 700px) {
    font-size: 14px;
    padding: 0 10px;
  }
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
  @media (max-width: 700px) {
    padding: 5px 10px;
  }
`;

const Price = styled.div`
  font-size: 20px;
  background-color: ${color.colorO};
  padding: 5px 10px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  @media (max-width: 700px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const Info = styled.div`
  font-size: 18px;
  border-bottom: 1px solid ${color.colorO};
  @media (max-width: 700px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  text-align: justify;
  @media (max-width: 700px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const ContactInfo = styled.div`
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 700px) {
    padding: 5px 10px;
  }
`;

const Contact = styled.div`
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
const Icon = styled.i`
  line-height: 0;
  color: ${color.colorB};
  font-size: 20px;
  vertical-align: middle;
  margin-right: 10px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const NonBoldSpan = styled.span`
  font-weight: 300;
`;

const ProductItemView = props => {
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
  } = props.item;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <BasicInfo>
        Posted by
        <Uppercase> {name}, </Uppercase>
        {moment(moment(date)).format('dddd, MMMM Do YYYY, h:mm a') + ' '}
        from
        <Uppercase>{' ' + location}</Uppercase>
      </BasicInfo>
      <img src="https://picsum.photos/700/300/?random" alt="Product Item" />
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
  );
};

export default ProductItemView;
