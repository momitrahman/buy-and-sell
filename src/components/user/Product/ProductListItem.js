import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import DeleteProduct from '../../../containers/user/DeleteProduct';
import * as color from '../../../color';

const Item = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  margin: 30px 10px;
  border-radius: 5px;
  box-shadow: 0 0 1px black;
  background: white;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  max-width: 150px;
  max-height: 120px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: stretch;
`;

const Info = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const Heading = styled.div`
  color: ${color.colorG};
  font-size: 22px;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

const LocationTime = styled.div`
  font-size: 16px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Edit = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: black;
  border: none;
  padding: 10px;
  background-color: green;
  cursor: pointer;
`;

const ProductListItem = props => {
  const { title, location, price, date, key: pid } = props.item;
  return (
    <Item>
      <InfoBox>
        <Image src="https://picsum.photos/400/400?random" />
        <Info>
          <Heading>{title}</Heading>
          <LocationTime>
            {location} ‒ {moment(moment(date).format()).fromNow()}
          </LocationTime>
          <Price>৳ {price}</Price>
        </Info>
      </InfoBox>
      <Action>
        <Edit to={`/user/edit/${pid}`}>Edit</Edit>
        <DeleteProduct pid={pid}>Delete</DeleteProduct>
      </Action>
    </Item>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductListItem;
